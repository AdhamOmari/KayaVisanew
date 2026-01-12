'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/blog.css';

interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  category: { en: string; ar: string };
  author: string;
  publishedAt: string;
  featured: boolean;
}

interface AdminUser {
  id: string;
  email: string;
  name: { en: string; ar: string };
  role: 'super-admin' | 'sub-admin';
  active: boolean;
}

export default function AdminBlogPage() {
  const router = useRouter();
  const { locale, dir } = useI18n();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const userDataStr = sessionStorage.getItem('admin-auth');
    if (!userDataStr) {
      router.push('/admin/login');
      return;
    }

    try {
      const userData = JSON.parse(userDataStr);
      setCurrentUser(userData);

      // Fetch posts
      fetch('/api/blog')
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Failed to fetch posts:', error);
          setLoading(false);
        });
    } catch (error) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleDelete = async (id: string, title: string) => {
    const confirmText = locale === 'ar' 
      ? `هل أنت متأكد من حذف "${title}"؟`
      : `Are you sure you want to delete "${title}"?`;
    
    if (!confirm(confirmText)) {
      return;
    }

    try {
      const response = await fetch(`/api/blog?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPosts(posts.filter(post => post.id !== id));
        alert(locale === 'ar' ? 'تم حذف المقال بنجاح' : 'Post deleted successfully');
      } else {
        alert(locale === 'ar' ? 'فشل حذف المقال' : 'Failed to delete post');
      }
    } catch (error) {
      alert(locale === 'ar' ? 'فشل حذف المقال' : 'Failed to delete post');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin-auth');
    router.push('/admin/login');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return locale === 'ar'
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const text = {
    title: locale === 'ar' ? 'إدارة المدونة' : 'Blog Management',
    welcome: locale === 'ar' ? 'مرحباً' : 'Welcome',
    role: locale === 'ar' ? 'الدور' : 'Role',
    superAdmin: locale === 'ar' ? 'مسؤول رئيسي' : 'Super Admin',
    subAdmin: locale === 'ar' ? 'مسؤول فرعي' : 'Sub Admin',
    logout: locale === 'ar' ? 'تسجيل الخروج' : 'Logout',
    createPost: locale === 'ar' ? 'إنشاء مقال جديد' : 'Create New Post',
    viewBlog: locale === 'ar' ? 'عرض المدونة' : 'View Blog',
    manageUsers: locale === 'ar' ? 'إدارة المستخدمين' : 'Manage Users',
    totalPosts: locale === 'ar' ? 'إجمالي المقالات' : 'Total Posts',
    loading: locale === 'ar' ? 'جاري التحميل...' : 'Loading...',
    noPosts: locale === 'ar' ? 'لا توجد مقالات. قم بإنشاء مقالك الأول!' : 'No posts found. Create your first post!',
    titleEn: locale === 'ar' ? 'العنوان (إنجليزي)' : 'Title (EN)',
    category: locale === 'ar' ? 'التصنيف' : 'Category',
    author: locale === 'ar' ? 'الكاتب' : 'Author',
    published: locale === 'ar' ? 'تاريخ النشر' : 'Published',
    featured: locale === 'ar' ? 'مميز' : 'Featured',
    actions: locale === 'ar' ? 'الإجراءات' : 'Actions',
    yes: locale === 'ar' ? 'نعم' : 'Yes',
    no: locale === 'ar' ? 'لا' : 'No',
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.5rem', color: '#7C3AED' }}>
          <i className="fas fa-spinner fa-spin"></i> {text.loading}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container" dir={dir}>
      <div className="admin-header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <div>
              <h1 style={{ marginBottom: '5px' }}>
                <i className="fas fa-blog" style={{ marginInlineEnd: '15px' }}></i>
                {text.title}
              </h1>
              {currentUser && (
                <div style={{ fontSize: '0.95rem', opacity: 0.95 }}>
                  {text.welcome}, <strong>{currentUser.name[locale]}</strong> 
                  <span style={{ 
                    marginInlineStart: '10px', 
                    padding: '3px 10px', 
                    background: 'rgba(255,255,255,0.2)', 
                    borderRadius: '12px',
                    fontSize: '0.85rem'
                  }}>
                    {currentUser.role === 'super-admin' ? text.superAdmin : text.subAdmin}
                  </span>
                </div>
              )}
            </div>
            <button onClick={handleLogout} className="btn btn-secondary">
              <i className="fas fa-sign-out-alt"></i> {text.logout}
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="admin-actions">
          <Link href="/admin/blog/new" className="btn btn-primary">
            <i className="fas fa-plus"></i> {text.createPost}
          </Link>
          <Link href="/blog" className="btn btn-secondary">
            <i className="fas fa-eye"></i> {text.viewBlog}
          </Link>
          {currentUser?.role === 'super-admin' && (
            <Link href="/admin/users" className="btn" style={{ background: '#14B8A6', color: 'white' }}>
              <i className="fas fa-users"></i> {text.manageUsers}
            </Link>
          )}
          <div style={{ marginInlineStart: 'auto', color: '#6B7280', fontWeight: '600' }}>
            {text.totalPosts}: {posts.length}
          </div>
        </div>

        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>{text.titleEn}</th>
                <th>{text.category}</th>
                <th>{text.author}</th>
                <th>{text.published}</th>
                <th>{text.featured}</th>
                <th>{text.actions}</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: '#6B7280' }}>
                    <i className="fas fa-inbox" style={{ fontSize: '3rem', marginBottom: '15px', opacity: 0.3, display: 'block' }}></i>
                    {text.noPosts}
                  </td>
                </tr>
              ) : (
                posts.map(post => (
                  <tr key={post.id}>
                    <td>
                      <strong>{post.title.en}</strong>
                      <br />
                      <small style={{ color: '#6B7280' }}>Slug: {post.slug}</small>
                    </td>
                    <td>{post.category[locale]}</td>
                    <td>{post.author}</td>
                    <td>{formatDate(post.publishedAt)}</td>
                    <td>
                      {post.featured ? (
                        <span style={{ 
                          background: '#F59E0B', 
                          color: 'white', 
                          padding: '4px 12px', 
                          borderRadius: '12px',
                          fontSize: '0.85rem',
                          fontWeight: '600'
                        }}>
                          <i className="fas fa-star"></i> {text.yes}
                        </span>
                      ) : (
                        <span style={{ color: '#9CA3AF' }}>{text.no}</span>
                      )}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.9rem' }}>
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link href={`/admin/blog/edit/${post.id}`} className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.9rem' }}>
                          <i className="fas fa-edit"></i>
                        </Link>
                        <button 
                          onClick={() => handleDelete(post.id, post.title[locale])}
                          className="btn btn-danger" 
                          style={{ padding: '6px 12px', fontSize: '0.9rem' }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
