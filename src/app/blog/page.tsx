'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
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

export default function BlogPage() {
  const { locale, dir, t } = useI18n();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Fetch posts
  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch posts:', error);
        setLoading(false);
      });
  }, []);

  // Filter posts
  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post =>
        post.category[locale].toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt[locale].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory, posts, locale]);

  const categories = [
    { en: 'All', ar: 'الكل', value: 'all' },
    { en: 'Visas & Procedures', ar: 'التأشيرات والإجراءات', value: 'visas & procedures' },
    { en: 'Business & Study Travel', ar: 'السفر للأعمال والدراسة', value: 'business & study travel' },
    { en: 'Tips & Experiences', ar: 'النصائح والتجارب', value: 'tips & experiences' },
    { en: 'Updates & News', ar: 'التحديثات والأخبار', value: 'updates & news' },
  ];

  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'all' || searchQuery);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return locale === 'ar'
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.5rem', color: '#e2bc42' }}>
          {locale === 'ar' ? 'جاري التحميل...' : 'Loading...'}
        </div>
      </div>
    );
  }

  return (
    <div dir={dir}>
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>{locale === 'ar' ? 'المدونة' : 'Blog'}</h1>
          <p>
            {locale === 'ar'
              ? 'دليلك الموثوق لعالم السفر والتأشيرات - نصائح وأخبار ومقالات شاملة'
              : 'Your Trusted Guide to the World of Travel and Visas - Tips, News, and Comprehensive Articles'}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="blog-filters">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              placeholder={locale === 'ar' ? 'ابحث في المقالات...' : 'Search articles...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </div>

          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`category-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {locale === 'ar' ? cat.ar : cat.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === 'all' && !searchQuery && (
          <section className="featured-posts">
            <h2 className="section-title">
              {locale === 'ar' ? 'مقالات مميزة' : 'Featured Articles'}
            </h2>
            <div className="row">
              {featuredPosts.map(post => (
                <div key={post.id} className="col-md-4 mb-4">
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="featured-card">
                      <div className="card-image">
                        <Image
                          src={post.image}
                          alt={post.title[locale]}
                          width={400}
                          height={250}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="featured-badge">
                          {locale === 'ar' ? 'مميز' : 'Featured'}
                        </div>
                      </div>
                      <div className="card-content">
                        <span className="card-category">{post.category[locale]}</span>
                        <h3>{post.title[locale]}</h3>
                        <p>{post.excerpt[locale]}</p>
                        <div className="card-meta">
                          <span>
                            <i className="far fa-user"></i> {post.author}
                          </span>
                          <span>
                            <i className="far fa-calendar"></i> {formatDate(post.publishedAt)}
                          </span>
                        </div>
                        <div style={{ marginTop: '15px' }}>
                          <span className="read-more-btn">
                            {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                            <i className={`fas fa-arrow-${locale === 'ar' ? 'left' : 'right'}`}></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="all-posts">
          <h2 className="section-title">
            {locale === 'ar' ? 'جميع المقالات' : 'All Articles'}
            {regularPosts.length > 0 && (
              <span style={{ fontSize: '1rem', fontWeight: 'normal', marginInlineStart: '15px', color: '#6B7280' }}>
                ({regularPosts.length} {locale === 'ar' ? 'مقال' : 'articles'})
              </span>
            )}
          </h2>

          {regularPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
              <i className="fas fa-search" style={{ fontSize: '4rem', marginBottom: '20px', opacity: 0.3 }}></i>
              <p style={{ fontSize: '1.2rem' }}>
                {locale === 'ar' ? 'لم يتم العثور على مقالات' : 'No articles found'}
              </p>
            </div>
          ) : (
            <div className="posts-grid">
              {regularPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="post-card">
                    <div className="card-image">
                      <Image
                        src={post.image}
                        alt={post.title[locale]}
                        width={400}
                        height={250}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-category">{post.category[locale]}</span>
                      <h3>{post.title[locale]}</h3>
                      <p>{post.excerpt[locale]}</p>
                      <div className="card-meta">
                        <span>
                          <i className="far fa-user"></i> {post.author}
                        </span>
                        <span>
                          <i className="far fa-calendar"></i> {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      <div style={{ marginTop: '15px' }}>
                        <span className="read-more-btn">
                          {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                          <i className={`fas fa-arrow-${locale === 'ar' ? 'left' : 'right'}`}></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
