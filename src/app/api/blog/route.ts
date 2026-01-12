import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOG_FILE = path.join(process.cwd(), 'src/data/blog-posts.json');

// Helper to read posts
function readPosts() {
  const data = fs.readFileSync(BLOG_FILE, 'utf-8');
  return JSON.parse(data);
}

// Helper to write posts
function writePosts(posts: any[]) {
  fs.writeFileSync(BLOG_FILE, JSON.stringify(posts, null, 2));
}

// GET - List all posts or get single post
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');
    
    const posts = readPosts();
    
    if (id) {
      const post = posts.find((p: any) => p.id === id);
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    }
    
    if (slug) {
      const post = posts.find((p: any) => p.slug === slug);
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    }
    
    // Return all posts, sorted by date (newest first)
    const sortedPosts = posts.sort((a: any, b: any) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    return NextResponse.json(sortedPosts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST - Create new post
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const posts = readPosts();
    
    // Generate new ID
    const maxId = posts.length > 0 
      ? Math.max(...posts.map((p: any) => parseInt(p.id))) 
      : 0;
    const newId = (maxId + 1).toString();
    
    // Create new post
    const newPost = {
      id: newId,
      slug: body.slug || `post-${newId}`,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      image: body.image || '/images/blog/default.jpg',
      author: body.author || 'Kaya Team',
      publishedAt: body.publishedAt || new Date().toISOString(),
      featured: body.featured || false,
    };
    
    posts.push(newPost);
    writePosts(posts);
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

// PUT - Update existing post
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const posts = readPosts();
    
    const index = posts.findIndex((p: any) => p.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    // Update post
    posts[index] = {
      ...posts[index],
      ...body,
      id: posts[index].id, // Preserve ID
    };
    
    writePosts(posts);
    
    return NextResponse.json(posts[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE - Delete post
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Post ID required' }, { status: 400 });
    }
    
    const posts = readPosts();
    const filteredPosts = posts.filter((p: any) => p.id !== id);
    
    if (filteredPosts.length === posts.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    writePosts(filteredPosts);
    
    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
