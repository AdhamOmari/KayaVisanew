'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function AdminDashboard() {
  const { locale, dir } = useI18n();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const content = {
    ar: {
      title: 'لوحة التحكم',
      subtitle: 'نظام إدارة كايا للسفر',
      viewSite: 'عرض الموقع',
      logout: 'تسجيل الخروج',
      welcome: 'مرحباً بك، المسؤول!',
      welcomeText: 'إدارة محتوى موقعك وإعداداته من هنا',
      blogPosts: 'المقالات',
      employees: 'الموظفون',
      newMessages: 'رسائل جديدة',
      teamMembers: 'أعضاء الفريق',
      managementTools: 'أدوات الإدارة',
      menu: [
        { title: 'إدارة المدونة', description: 'إنشاء وتعديل وإدارة المقالات' },
        { title: 'إدارة الموظفين', description: 'إدارة حسابات الموظفين والصلاحيات' },
        { title: 'محتوى التذييل', description: 'تحرير الشروط وسياسة الخصوصية والأسئلة الشائعة' },
        { title: 'أعضاء الفريق', description: 'إدارة ملفات أعضاء الفريق' },
        { title: 'رسائل الاتصال', description: 'عرض والرد على رسائل نموذج الاتصال' },
        { title: 'إعدادات الموقع', description: 'تكوين إعدادات وتفضيلات الموقع' },
      ],
    },
    en: {
      title: 'Admin Dashboard',
      subtitle: 'KAYA Travel Management System',
      viewSite: 'View Site',
      logout: 'Logout',
      welcome: 'Welcome back, Admin!',
      welcomeText: 'Manage your website content and settings from here',
      blogPosts: 'Blog Posts',
      employees: 'Employees',
      newMessages: 'New Messages',
      teamMembers: 'Team Members',
      managementTools: 'Management Tools',
      menu: [
        { title: 'Blog Management', description: 'Create, edit and manage blog posts' },
        { title: 'Employee Management', description: 'Manage employee accounts and permissions' },
        { title: 'Footer Content', description: 'Edit Terms, Privacy Policy, and FAQ' },
        { title: 'Team Members', description: 'Manage team member profiles' },
        { title: 'Contact Messages', description: 'View and respond to contact form submissions' },
        { title: 'Site Settings', description: 'Configure website settings and preferences' },
      ],
    },
  };

  const t = content[locale as keyof typeof content];

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      // In a real app, verify token with API
      const token = document.cookie.includes('admin_token');
      if (!token) {
        router.push('/admin/login');
      } else {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fas fa-spinner fa-spin" style={{ fontSize: '3rem', color: '#667eea' }}></i>
      </div>
    );
  }

  const menuItems = [
    { title: t.menu[0].title, icon: 'fas fa-blog', href: '/admin/blogs', color: '#667eea', description: t.menu[0].description },
    { title: t.menu[1].title, icon: 'fas fa-users', href: '/admin/employees', color: '#48bb78', description: t.menu[1].description },
    { title: t.menu[2].title, icon: 'fas fa-file-alt', href: '/admin/footer', color: '#48bb78', description: t.menu[2].description },
    { title: t.menu[3].title, icon: 'fas fa-user-friends', href: '/admin/team', color: '#667eea', description: t.menu[3].description },
    { title: t.menu[4].title, icon: 'fas fa-envelope', href: '/admin/contacts', color: '#f56565', description: t.menu[4].description },
    { title: t.menu[5].title, icon: 'fas fa-cog', href: '/admin/settings', color: '#718096', description: t.menu[5].description },
  ];

  return (
    <div style={styles.container} dir={dir}>
      {/* Language Switcher */}
      <div style={{ position: 'fixed', top: '20px', right: dir === 'rtl' ? 'auto' : '20px', left: dir === 'rtl' ? '20px' : 'auto', zIndex: 1000 }}>
        <LanguageSwitcher />
      </div>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.headerTitle}>
              <i className="fas fa-shield-alt" style={{ marginRight: dir === 'rtl' ? '0' : '12px', marginLeft: dir === 'rtl' ? '12px' : '0', color: '#667eea' }}></i>
              {t.title}
            </h1>
            <p style={styles.headerSubtitle}>{t.subtitle}</p>
          </div>
          <div style={styles.headerActions}>
            <Link href="/" style={styles.viewSiteBtn}>
              <i className="fas fa-globe" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0' }}></i>
              {t.viewSite}
            </Link>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              <i className="fas fa-sign-out-alt" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0' }}></i>
              {t.logout}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.content}>
          {/* Welcome Section */}
          <div style={styles.welcomeSection}>
            <h2 style={styles.welcomeTitle}>{t.welcome}</h2>
            <p style={styles.welcomeText}>{t.welcomeText}</p>
          </div>

          {/* Stats Cards */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={{ ...styles.statIcon, backgroundColor: '#ebf4ff' }}>
                <i className="fas fa-blog" style={{ color: '#667eea', fontSize: '1.5rem' }}></i>
              </div>
              <div>
                <p style={styles.statLabel}>{t.blogPosts}</p>
                <p style={styles.statValue}>24</p>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={{ ...styles.statIcon, backgroundColor: '#e6fffa' }}>
                <i className="fas fa-users" style={{ color: '#48bb78', fontSize: '1.5rem' }}></i>
              </div>
              <div>
                <p style={styles.statLabel}>{t.employees}</p>
                <p style={styles.statValue}>8</p>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={{ ...styles.statIcon, backgroundColor: '#fff5f5' }}>
                <i className="fas fa-envelope" style={{ color: '#f56565', fontSize: '1.5rem' }}></i>
              </div>
              <div>
                <p style={styles.statLabel}>{t.newMessages}</p>
                <p style={styles.statValue}>12</p>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={{ ...styles.statIcon, backgroundColor: '#faf5ff' }}>
                <i className="fas fa-user-friends" style={{ color: '#667eea', fontSize: '1.5rem' }}></i>
              </div>
              <div>
                <p style={styles.statLabel}>{t.teamMembers}</p>
                <p style={styles.statValue}>15</p>
              </div>
            </div>
          </div>

          {/* Management Menu */}
          <div style={styles.menuSection}>
            <h3 style={styles.sectionTitle}>{t.managementTools}</h3>
            <div style={styles.menuGrid}>
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} style={styles.menuCard}>
                  <div style={{ ...styles.menuIcon, backgroundColor: `${item.color}15` }}>
                    <i className={item.icon} style={{ color: item.color, fontSize: '2rem' }}></i>
                  </div>
                  <h4 style={styles.menuTitle}>{item.title}</h4>
                  <p style={styles.menuDescription}>{item.description}</p>
                  <div style={styles.menuArrow}>
                    <i className="fas fa-arrow-right" style={{ color: item.color }}></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '20px 0',
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  headerTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  headerSubtitle: {
    fontSize: '0.95rem',
    color: '#718096',
  },
  headerActions: {
    display: 'flex',
    gap: '12px',
  },
  viewSiteBtn: {
    padding: '10px 20px',
    backgroundColor: '#667eea',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s',
  },
  logoutBtn: {
    padding: '10px 20px',
    backgroundColor: '#f56565',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s',
  },
  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  welcomeSection: {
    textAlign: 'center',
    padding: '20px',
  },
  welcomeTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '10px',
  },
  welcomeText: {
    fontSize: '1.1rem',
    color: '#718096',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  statIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#718096',
    marginBottom: '5px',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a202c',
  },
  menuSection: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '25px',
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  menuCard: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    textDecoration: 'none',
    transition: 'all 0.3s',
    position: 'relative',
    border: '2px solid transparent',
  },
  menuIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  menuTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '10px',
  },
  menuDescription: {
    fontSize: '0.95rem',
    color: '#718096',
    lineHeight: '1.5',
  },
  menuArrow: {
    position: 'absolute',
    top: '30px',
    right: '30px',
    fontSize: '1.2rem',
  },
};
