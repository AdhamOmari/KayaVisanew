import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const blogsPath = path.join(process.cwd(), 'src/data/blogs.json');

// GET - Fetch all blogs
export async function GET() {
  try {
    const data = fs.readFileSync(blogsPath, 'utf8');
    const blogs = JSON.parse(data);
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, blogs: [] });
  }
}

// POST - Create new blog
export async function POST(request: Request) {
  try {
    const newBlog = await request.json();
    const data = fs.readFileSync(blogsPath, 'utf8');
    const blogs = JSON.parse(data);
    
    const blog = {
      id: Date.now().toString(),
      ...newBlog,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    blogs.push(blog);
    fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create blog' }, { status: 500 });
  }
}

// PUT - Update blog
export async function PUT(request: Request) {
  try {
    const updatedBlog = await request.json();
    const data = fs.readFileSync(blogsPath, 'utf8');
    let blogs = JSON.parse(data);
    
    blogs = blogs.map((blog: any) => 
      blog.id === updatedBlog.id 
        ? { ...updatedBlog, updatedAt: new Date().toISOString() }
        : blog
    );
    
    fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE - Delete blog
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    const data = fs.readFileSync(blogsPath, 'utf8');
    let blogs = JSON.parse(data);
    
    blogs = blogs.filter((blog: any) => blog.id !== id);
    
    fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete blog' }, { status: 500 });
  }
}
