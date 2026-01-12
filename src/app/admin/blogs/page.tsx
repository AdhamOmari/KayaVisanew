'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

interface Blog {
  id: string;
  title: { en: string; ar: string };
  content: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  author: { en: string; ar: string };
  category: { en: string; ar: string };
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogsManagement() {
  const { locale, dir } = useI18n();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const router = useRouter();

  const content = {
    ar: {
      title: 'إدارة المدونة',
      subtitle: 'إنشاء وإدارة المقالات',
      back: 'رجوع',
      newBlog: 'مقال جديد',
      cancel: 'إلغاء',
      editBlog: 'تعديل المقال',
      createBlog: 'إنشاء مقال جديد',
      titleEn: 'العنوان (إنجليزي)',
      titleAr: 'العنوان (عربي)',
      excerptEn: 'المقتطف (إنجليزي)',
      excerptAr: 'المقتطف (عربي)',
      contentEn: 'المحتوى (إنجليزي)',
      contentAr: 'المحتوى (عربي)',
      authorEn: 'الكاتب (إنجليزي)',
      authorAr: 'الكاتب (عربي)',
      categoryEn: 'التصنيف (إنجليزي)',
      categoryAr: 'التصنيف (عربي)',
      imageUrl: 'رابط الصورة',
      status: 'الحالة',
      published: 'منشور',
      updateBlog: 'تحديث المقال',
      saveBlog: 'حفظ المقال',
      allBlogs: 'جميع المقالات',
      noBlogs: 'لا توجد مقالات بعد. أنشئ مقالك الأول!',
      edit: 'تعديل',
      delete: 'حذف',
      draft: 'مسودة',
      deleteConfirm: 'هل أنت متأكد من حذف هذا المقال؟',
    },
    en: {
      title: 'Blog Management',
      subtitle: 'Create and manage blog posts',
      back: 'Back',
      newBlog: 'New Blog',
      cancel: 'Cancel',
      editBlog: 'Edit Blog',
      createBlog: 'Create New Blog',
      titleEn: 'Title (English)',
      titleAr: 'Title (Arabic)',
      excerptEn: 'Excerpt (English)',
      excerptAr: 'Excerpt (Arabic)',
      contentEn: 'Content (English)',
      contentAr: 'Content (Arabic)',
      authorEn: 'Author (English)',
      authorAr: 'Author (Arabic)',
      categoryEn: 'Category (English)',
      categoryAr: 'Category (Arabic)',
      imageUrl: 'Image URL',
      status: 'Status',
      published: 'Published',
      updateBlog: 'Update Blog',
      saveBlog: 'Create Blog',
      allBlogs: 'All Blogs',
      noBlogs: 'No blogs yet. Create your first blog!',
      edit: 'Edit',
      delete: 'Delete',
      draft: 'Draft',
      deleteConfirm: 'Are you sure you want to delete this blog?',
    },
  };

  const t = content[locale as keyof typeof content];

  const [formData, setFormData] = useState({
    title: { en: '', ar: '' },
    content: { en: '', ar: '' },
    excerpt: { en: '', ar: '' },
    author: { en: '', ar: '' },
    category: { en: '', ar: '' },
    image: '',
    published: false,
  });

  useEffect(() => {
    checkAuth();
    fetchBlogs();
  }, []);

  const checkAuth = () => {
    const token = document.cookie.includes('admin_token');
    if (!token) {
      router.push('/admin/login');
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/admin/blogs');
      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = '/api/admin/blogs';
      const method = editingBlog ? 'PUT' : 'POST';
      const body = editingBlog 
        ? JSON.stringify({ ...formData, id: editingBlog.id })
        : JSON.stringify(formData);

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      const data = await response.json();
      if (data.success) {
        fetchBlogs();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/admin/blogs?id=${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      author: blog.author,
      category: blog.category,
      image: blog.image,
      published: blog.published,
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: { en: '', ar: '' },
      content: { en: '', ar: '' },
      excerpt: { en: '', ar: '' },
      author: { en: '', ar: '' },
      category: { en: '', ar: '' },
      image: '',
      published: false,
    });
    setEditingBlog(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fas fa-spinner fa-spin" style={{ fontSize: '3rem', color: '#667eea' }}></i>
      </div>
    );
  }

  return (
    <div dir={dir} style={{ minHeight: '100vh', backgroundColor: '#f7fafc', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', padding: '20px 30px', borderRadius: '12px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '5px' }}>
              <i className="fas fa-blog" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '12px', color: '#667eea' }}></i>
              {t.title}
            </h1>
            <p style={{ color: '#718096' }}>{t.subtitle}</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/admin/dashboard" style={{ padding: '10px 20px', backgroundColor: '#e2e8f0', color: '#1a202c', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
              <i className={`fas fa-arrow-${dir === 'rtl' ? 'right' : 'left'}`} style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '8px' }}></i>
              {t.back}
            </Link>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{ padding: '10px 20px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <i className={`fas fa-${showForm ? 'times' : 'plus'}`} style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '8px' }}></i>
              {showForm ? t.cancel : t.newBlog}
            </button>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '25px' }}>
              {editingBlog ? t.editBlog : t.createBlog}
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.titleEn}</label>
                  <input
                    type="text"
                    value={formData.title.en}
                    onChange={(e) => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.titleAr}</label>
                  <input
                    type="text"
                    value={formData.title.ar}
                    onChange={(e) => setFormData({ ...formData, title: { ...formData.title, ar: e.target.value } })}
                    required
                    dir="rtl"
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.excerptEn}</label>
                  <textarea
                    value={formData.excerpt.en}
                    onChange={(e) => setFormData({ ...formData, excerpt: { ...formData.excerpt, en: e.target.value } })}
                    required
                    rows={3}
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.excerptAr}</label>
                  <textarea
                    value={formData.excerpt.ar}
                    onChange={(e) => setFormData({ ...formData, excerpt: { ...formData.excerpt, ar: e.target.value } })}
                    required
                    dir="rtl"
                    rows={3}
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.contentEn}</label>
                  <textarea
                    value={formData.content.en}
                    onChange={(e) => setFormData({ ...formData, content: { ...formData.content, en: e.target.value } })}
                    required
                    rows={8}
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.contentAr}</label>
                  <textarea
                    value={formData.content.ar}
                    onChange={(e) => setFormData({ ...formData, content: { ...formData.content, ar: e.target.value } })}
                    required
                    dir="rtl"
                    rows={8}
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.authorEn}</label>
                  <input
                    type="text"
                    value={formData.author.en}
                    onChange={(e) => setFormData({ ...formData, author: { ...formData.author, en: e.target.value } })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.authorAr}</label>
                  <input
                    type="text"
                    value={formData.author.ar}
                    onChange={(e) => setFormData({ ...formData, author: { ...formData.author, ar: e.target.value } })}
                    required
                    dir="rtl"
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.categoryEn}</label>
                  <input
                    type="text"
                    value={formData.category.en}
                    onChange={(e) => setFormData({ ...formData, category: { ...formData.category, en: e.target.value } })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.categoryAr}</label>
                  <input
                    type="text"
                    value={formData.category.ar}
                    onChange={(e) => setFormData({ ...formData, category: { ...formData.category, ar: e.target.value } })}
                    required
                    dir="rtl"
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.imageUrl}</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', width: 'fit-content' }}>
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span style={{ fontWeight: '500', color: '#1a202c' }}>{t.status}: {t.published}</span>
                </label>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button
                  type="submit"
                  style={{ padding: '12px 30px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}
                >
                  <i className="fas fa-save" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '8px' }}></i>
                  {editingBlog ? t.updateBlog : t.saveBlog}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  style={{ padding: '12px 30px', backgroundColor: '#e2e8f0', color: '#1a202c', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}
                >
                  {t.cancel}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Blogs List */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '25px' }}>
            {t.allBlogs} ({blogs.length})
          </h3>
          {blogs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#718096' }}>
              <i className="fas fa-blog" style={{ fontSize: '4rem', marginBottom: '20px', opacity: 0.3 }}></i>
              <p style={{ fontSize: '1.2rem' }}>{t.noBlogs}</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '20px' }}>
              {blogs.map((blog) => (
                <div key={blog.id} style={{ border: '2px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', gap: '20px', alignItems: 'start' }}>
                  {blog.image && (
                    <img src={blog.image} alt={blog.title.en} style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                      <div>
                        <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '5px' }}>{blog.title[locale as 'en' | 'ar']}</h4>
                        <p style={{ fontSize: '1.1rem', color: '#718096' }}>{blog.title[locale === 'en' ? 'ar' : 'en']}</p>
                      </div>
                      <span style={{ padding: '4px 12px', backgroundColor: blog.published ? '#48bb78' : '#48bb78', color: 'white', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                        {blog.published ? t.published : t.draft}
                      </span>
                    </div>
                    <p style={{ color: '#718096', marginBottom: '10px', fontSize: '0.95rem' }}>{blog.excerpt[locale as 'en' | 'ar']}</p>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#718096', marginBottom: '15px', flexWrap: 'wrap' }}>
                      <span><i className="fas fa-user" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '5px' }}></i>{blog.author[locale as 'en' | 'ar']}</span>
                      <span><i className="fas fa-tag" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '5px' }}></i>{blog.category[locale as 'en' | 'ar']}</span>
                      <span><i className="fas fa-calendar" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '5px' }}></i>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => handleEdit(blog)}
                        style={{ padding: '8px 16px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600' }}
                      >
                        <i className="fas fa-edit" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '6px' }}></i>
                        {t.edit}
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        style={{ padding: '8px 16px', backgroundColor: '#f56565', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600' }}
                      >
                        <i className="fas fa-trash" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '6px' }}></i>
                        {t.delete}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
