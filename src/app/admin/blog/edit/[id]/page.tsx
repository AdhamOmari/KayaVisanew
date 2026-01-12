'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/blog.css';

interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string; ar: string };
  category: { en: string; ar: string };
  image: string;
  author: string;
  publishedAt: string;
  featured: boolean;
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    slug: '',
    title_en: '',
    title_ar: '',
    excerpt_en: '',
    excerpt_ar: '',
    content_en: '',
    content_ar: '',
    category_en: '',
    category_ar: '',
    image: '',
    author: '',
    featured: false,
  });

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('admin-auth') === 'true';
    if (!isAuthenticated) {
      router.push('/admin/login');
      return;
    }

    // Fetch post
    fetch(`/api/blog?id=${params.id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setFormData({
          slug: data.slug,
          title_en: data.title.en,
          title_ar: data.title.ar,
          excerpt_en: data.excerpt.en,
          excerpt_ar: data.excerpt.ar,
          content_en: data.content.en,
          content_ar: data.content.ar,
          category_en: data.category.en,
          category_ar: data.category.ar,
          image: data.image,
          author: data.author,
          featured: data.featured,
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch post:', error);
        alert('Failed to load post');
        router.push('/admin/blog');
      });
  }, [params.id, router]);

  const categories = [
    { en: 'Visas & Procedures', ar: 'التأشيرات والإجراءات' },
    { en: 'Business & Study Travel', ar: 'السفر للأعمال والدراسة' },
    { en: 'Tips & Experiences', ar: 'النصائح والتجارب' },
    { en: 'Updates & News', ar: 'التحديثات والأخبار' },
  ];

  const handleCategoryChange = (value: string) => {
    const category = categories.find(c => c.en === value);
    if (category) {
      setFormData({
        ...formData,
        category_en: category.en,
        category_ar: category.ar,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const updatedPost = {
        id: params.id,
        slug: formData.slug,
        title: {
          en: formData.title_en,
          ar: formData.title_ar,
        },
        excerpt: {
          en: formData.excerpt_en,
          ar: formData.excerpt_ar,
        },
        content: {
          en: formData.content_en,
          ar: formData.content_ar,
        },
        category: {
          en: formData.category_en,
          ar: formData.category_ar,
        },
        image: formData.image,
        author: formData.author,
        featured: formData.featured,
        publishedAt: post?.publishedAt, // Preserve original publish date
      };

      const response = await fetch('/api/blog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        alert('Post updated successfully!');
        router.push('/admin/blog');
      } else {
        alert('Failed to update post');
      }
    } catch (error) {
      alert('Failed to update post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.5rem', color: '#7C3AED' }}>
          <i className="fas fa-spinner fa-spin"></i> Loading...
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div className="container">
          <h1>
            <i className="fas fa-edit" style={{ marginRight: '15px' }}></i>
            Edit Post
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="admin-actions">
          <Link href="/admin/blog" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </Link>
          <Link href={`/blog/${post.slug}`} className="btn btn-primary">
            <i className="fas fa-eye"></i> Preview Post
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <h3 style={{ marginBottom: '25px', color: '#7C3AED' }}>
            <i className="fas fa-globe"></i> Basic Information
          </h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="slug">
                Slug (URL) <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <input
                type="text"
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g., schengen-visa-guide-2025"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">
                Author <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <input
                type="text"
                id="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Author name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">
                Category <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <select
                id="category"
                value={formData.category_en}
                onChange={(e) => handleCategoryChange(e.target.value)}
                required
              >
                {categories.map(cat => (
                  <option key={cat.en} value={cat.en}>{cat.en} / {cat.ar}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">
                Image URL <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <input
                type="text"
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/images/blog/post-image.jpg"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              />
              <label htmlFor="featured">
                <i className="fas fa-star" style={{ color: '#F59E0B', marginRight: '8px' }}></i>
                Mark as Featured Post
              </label>
            </div>
          </div>

          <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px solid #E5E7EB' }} />

          <h3 style={{ marginBottom: '25px', color: '#7C3AED' }}>
            <i className="fas fa-language"></i> English Content
          </h3>

          <div className="form-group">
            <label htmlFor="title_en">
              Title (English) <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              type="text"
              id="title_en"
              value={formData.title_en}
              onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
              placeholder="Post title in English"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt_en">
              Excerpt (English) <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <textarea
              id="excerpt_en"
              value={formData.excerpt_en}
              onChange={(e) => setFormData({ ...formData, excerpt_en: e.target.value })}
              placeholder="Brief summary in English (2-3 sentences)"
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content_en">
              Content (English - HTML) <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <textarea
              id="content_en"
              value={formData.content_en}
              onChange={(e) => setFormData({ ...formData, content_en: e.target.value })}
              placeholder="Full content in English with HTML tags"
              rows={10}
              required
            />
            <small style={{ color: '#6B7280' }}>
              Use HTML tags for formatting: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;
            </small>
          </div>

          <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px solid #E5E7EB' }} />

          <h3 style={{ marginBottom: '25px', color: '#7C3AED' }}>
            <i className="fas fa-language"></i> Arabic Content (المحتوى العربي)
          </h3>

          <div className="form-group">
            <label htmlFor="title_ar">
              Title (Arabic) <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              type="text"
              id="title_ar"
              value={formData.title_ar}
              onChange={(e) => setFormData({ ...formData, title_ar: e.target.value })}
              placeholder="عنوان المقال بالعربية"
              dir="rtl"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt_ar">
              Excerpt (Arabic) <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <textarea
              id="excerpt_ar"
              value={formData.excerpt_ar}
              onChange={(e) => setFormData({ ...formData, excerpt_ar: e.target.value })}
              placeholder="ملخص مختصر بالعربية (2-3 جمل)"
              rows={3}
              dir="rtl"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content_ar">
              Content (Arabic - HTML) <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <textarea
              id="content_ar"
              value={formData.content_ar}
              onChange={(e) => setFormData({ ...formData, content_ar: e.target.value })}
              placeholder="المحتوى الكامل بالعربية مع HTML"
              rows={10}
              dir="rtl"
              required
            />
            <small style={{ color: '#6B7280' }}>
              استخدم HTML للتنسيق: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;
            </small>
          </div>

          <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px solid #E5E7EB' }} />

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button 
              type="submit" 
              className="btn btn-success" 
              disabled={saving}
              style={{ minWidth: '200px' }}
            >
              {saving ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Saving...
                </>
              ) : (
                <>
                  <i className="fas fa-save"></i> Save Changes
                </>
              )}
            </button>
            <Link href="/admin/blog" className="btn btn-secondary" style={{ minWidth: '150px' }}>
              <i className="fas fa-times"></i> Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
