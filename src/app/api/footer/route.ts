import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

const FOOTER_DATA_PATH = path.join(process.cwd(), 'src/data/footer-content.json');

// GET - Fetch footer content
export async function GET() {
  try {
    const fileContents = await readFile(FOOTER_DATA_PATH, 'utf8');
    const footerData = JSON.parse(fileContents);
    return NextResponse.json(footerData);
  } catch (error) {
    return NextResponse.json({ 
      sections: {
        terms: { en: '', ar: '' },
        privacy: { en: '', ar: '' },
        faq: []
      }
    });
  }
}

// PUT - Update footer content
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Save to file
    await writeFile(FOOTER_DATA_PATH, JSON.stringify(body, null, 2));

    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    console.error('Error updating footer content:', error);
    return NextResponse.json(
      { error: 'Failed to update footer content' },
      { status: 500 }
    );
  }
}
