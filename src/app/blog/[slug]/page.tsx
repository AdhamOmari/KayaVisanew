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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { locale, dir } = useI18n();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the post
    fetch(`/api/blog?slug=${params.slug}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        
        // Fetch related posts (same category)
        return fetch('/api/blog').then(res => res.json()).then(allPosts => ({
          post: data,
          allPosts
        }));
      })
      .then(({ post: fetchedPost, allPosts }) => {
        const related = allPosts
          .filter((p: BlogPost) => 
            p.slug !== params.slug && 
            p.category.en === fetchedPost.category.en
          )
          .slice(0, 3);
        setRelatedPosts(related);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch post:', error);
        setLoading(false);
      });
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return locale === 'ar' 
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.5rem', color: '#7C3AED' }}>
          {locale === 'ar' ? 'جاري التحميل...' : 'Loading...'}
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
        <div style={{ fontSize: '1.5rem', color: '#6B7280' }}>
          {locale === 'ar' ? 'المقال غير موجود' : 'Post not found'}
        </div>
        <Link href="/blog" className="btn btn-primary">
          {locale === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
        </Link>
      </div>
    );
  }

  return (
    <div dir={dir}>
      {/* Post Hero */}
      <section className="post-hero">
        <div className="container">
          <span className="post-category">{post.category[locale]}</span>
          <h1>{post.title[locale]}</h1>
          <div className="post-meta">
            <span>
              <i className="far fa-user"></i> {post.author}
            </span>
            <span>
              <i className="far fa-calendar"></i> {formatDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <div className="container" style={{ position: 'relative' }}>
        <div className="post-content-wrapper">
          <Image 
            src={post.image} 
            alt={post.title[locale]} 
            width={900}
            height={500}
            className="post-featured-image"
            style={{ width: '100%', height: 'auto' }}
          />
          
          <div className="post-content">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content[locale] }}
            />
          </div>
        </div>

        {/* Back to Blog Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/blog" className="btn btn-primary">
            <i className={`fas fa-arrow-${locale === 'ar' ? 'right' : 'left'}`}></i>
            {locale === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2 className="section-title">
              {locale === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>
            <div className="row">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="col-md-4 mb-4">
                  <Link href={`/blog/${relatedPost.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="post-card">
                      <div className="card-image">
                        <Image 
                          src={relatedPost.image} 
                          alt={relatedPost.title[locale]} 
                          width={400}
                          height={250}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="card-content">
                        <span className="card-category">{relatedPost.category[locale]}</span>
                        <h3>{relatedPost.title[locale]}</h3>
                        <p>{relatedPost.excerpt[locale]}</p>
                        <div className="card-meta">
                          <span>
                            <i className="far fa-user"></i> {relatedPost.author}
                          </span>
                          <span>
                            <i className="far fa-calendar"></i> {formatDate(relatedPost.publishedAt)}
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
          </div>
        </section>
      )}
    </div>
  );
}
