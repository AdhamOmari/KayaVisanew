import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

const TEAM_DATA_PATH = path.join(process.cwd(), 'src/data/team-members.json');

// GET - Fetch all team members
export async function GET() {
  try {
    const fileContents = await readFile(TEAM_DATA_PATH, 'utf8');
    const teamData = JSON.parse(fileContents);
    return NextResponse.json(teamData);
  } catch (error) {
    return NextResponse.json({ members: [] });
  }
}

// POST - Add new team member
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, position, image, bio, email, phone, role } = body;

    // Validation
    if (!name?.en || !name?.ar || !position?.en || !position?.ar) {
      return NextResponse.json(
        { error: 'Name and position are required in both languages' },
        { status: 400 }
      );
    }

    // Read existing data
    let teamData;
    try {
      const fileContents = await readFile(TEAM_DATA_PATH, 'utf8');
      teamData = JSON.parse(fileContents);
    } catch {
      teamData = { members: [] };
    }

    // Create new member
    const newMember = {
      id: Date.now().toString(),
      name,
      position,
      image: image || '/images/team/default-avatar.png',
      bio: bio || { en: '', ar: '' },
      email: email || '',
      phone: phone || '',
      role: role || 'member',
      createdAt: new Date().toISOString(),
    };

    teamData.members.push(newMember);

    // Save to file
    await writeFile(TEAM_DATA_PATH, JSON.stringify(teamData, null, 2));

    return NextResponse.json({ success: true, member: newMember });
  } catch (error) {
    console.error('Error adding team member:', error);
    return NextResponse.json(
      { error: 'Failed to add team member' },
      { status: 500 }
    );
  }
}

// PUT - Update team member
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, position, image, bio, email, phone, role } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Member ID is required' },
        { status: 400 }
      );
    }

    // Read existing data
    const fileContents = await readFile(TEAM_DATA_PATH, 'utf8');
    const teamData = JSON.parse(fileContents);

    // Find and update member
    const memberIndex = teamData.members.findIndex((m: any) => m.id === id);
    if (memberIndex === -1) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    teamData.members[memberIndex] = {
      ...teamData.members[memberIndex],
      name: name || teamData.members[memberIndex].name,
      position: position || teamData.members[memberIndex].position,
      image: image || teamData.members[memberIndex].image,
      bio: bio || teamData.members[memberIndex].bio,
      email: email !== undefined ? email : teamData.members[memberIndex].email,
      phone: phone !== undefined ? phone : teamData.members[memberIndex].phone,
      role: role || teamData.members[memberIndex].role,
      updatedAt: new Date().toISOString(),
    };

    // Save to file
    await writeFile(TEAM_DATA_PATH, JSON.stringify(teamData, null, 2));

    return NextResponse.json({
      success: true,
      member: teamData.members[memberIndex],
    });
  } catch (error) {
    console.error('Error updating team member:', error);
    return NextResponse.json(
      { error: 'Failed to update team member' },
      { status: 500 }
    );
  }
}

// DELETE - Remove team member
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Member ID is required' },
        { status: 400 }
      );
    }

    // Read existing data
    const fileContents = await readFile(TEAM_DATA_PATH, 'utf8');
    const teamData = JSON.parse(fileContents);

    // Filter out the member
    const initialLength = teamData.members.length;
    teamData.members = teamData.members.filter((m: any) => m.id !== id);

    if (teamData.members.length === initialLength) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    // Save to file
    await writeFile(TEAM_DATA_PATH, JSON.stringify(teamData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting team member:', error);
    return NextResponse.json(
      { error: 'Failed to delete team member' },
      { status: 500 }
    );
  }
}
