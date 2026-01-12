'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/blog.css';

interface AdminUser {
  id: string;
  email: string;
  name: { en: string; ar: string };
  role: 'super-admin' | 'sub-admin';
  createdAt: string;
  active: boolean;
}

export default function AdminUsersPage() {
  const router = useRouter();
  const { locale, dir } = useI18n();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name_en: '',
    name_ar: '',
    role: 'sub-admin' as 'super-admin' | 'sub-admin',
    active: true,
  });

  useEffect(() => {
    // Check authentication
    const userDataStr = sessionStorage.getItem('admin-auth');
    if (!userDataStr) {
      router.push('/admin/login');
      return;
    }

    try {
      const userData = JSON.parse(userDataStr);
      
      // Only super-admin can access this page
      if (userData.role !== 'super-admin') {
        alert(locale === 'ar' ? 'غير مصرح لك بالوصول' : 'Access denied');
        router.push('/admin/blog');
        return;
      }

      setCurrentUser(userData);

      // Fetch users
      fetch('/api/admin/users')
        .then(res => res.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Failed to fetch users:', error);
          setLoading(false);
        });
    } catch (error) {
      router.push('/admin/login');
    }
  }, [router, locale]);

  const handleOpenModal = (user?: AdminUser) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        email: user.email,
        password: '', // Don't show password
        name_en: user.name.en,
        name_ar: user.name.ar,
        role: user.role,
        active: user.active,
      });
    } else {
      setEditingUser(null);
      setFormData({
        email: '',
        password: '',
        name_en: '',
        name_ar: '',
        role: 'sub-admin',
        active: true,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      id: editingUser?.id,
      email: formData.email,
      password: formData.password || undefined,
      name: {
        en: formData.name_en,
        ar: formData.name_ar,
      },
      role: formData.role,
      active: formData.active,
    };

    try {
      const response = await fetch('/api/admin/users', {
        method: editingUser ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        if (editingUser) {
          setUsers(users.map(u => u.id === data.id ? data : u));
          alert(locale === 'ar' ? 'تم تحديث المستخدم بنجاح' : 'User updated successfully');
        } else {
          setUsers([...users, data]);
          alert(locale === 'ar' ? 'تم إنشاء المستخدم بنجاح' : 'User created successfully');
        }
        handleCloseModal();
      } else {
        alert(data.error || (locale === 'ar' ? 'فشلت العملية' : 'Operation failed'));
      }
    } catch (error) {
      alert(locale === 'ar' ? 'فشلت العملية' : 'Operation failed');
    }
  };

  const handleDelete = async (id: string, name: string) => {
    const confirmText = locale === 'ar'
      ? `هل أنت متأكد من حذف المستخدم "${name}"؟`
      : `Are you sure you want to delete user "${name}"?`;

    if (!confirm(confirmText)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        setUsers(users.filter(u => u.id !== id));
        alert(locale === 'ar' ? 'تم حذف المستخدم بنجاح' : 'User deleted successfully');
      } else {
        alert(data.error || (locale === 'ar' ? 'فشل حذف المستخدم' : 'Failed to delete user'));
      }
    } catch (error) {
      alert(locale === 'ar' ? 'فشل حذف المستخدم' : 'Failed to delete user');
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
    title: locale === 'ar' ? 'إدارة المستخدمين' : 'User Management',
    welcome: locale === 'ar' ? 'مرحباً' : 'Welcome',
    logout: locale === 'ar' ? 'تسجيل الخروج' : 'Logout',
    createUser: locale === 'ar' ? 'إنشاء مستخدم جديد' : 'Create New User',
    backToBlog: locale === 'ar' ? 'العودة للمدونة' : 'Back to Blog',
    totalUsers: locale === 'ar' ? 'إجمالي المستخدمين' : 'Total Users',
    loading: locale === 'ar' ? 'جاري التحميل...' : 'Loading...',
    noUsers: locale === 'ar' ? 'لا يوجد مستخدمون' : 'No users found',
    name: locale === 'ar' ? 'الاسم' : 'Name',
    email: locale === 'ar' ? 'البريد الإلكتروني' : 'Email',
    role: locale === 'ar' ? 'الدور' : 'Role',
    status: locale === 'ar' ? 'الحالة' : 'Status',
    created: locale === 'ar' ? 'تاريخ الإنشاء' : 'Created',
    actions: locale === 'ar' ? 'الإجراءات' : 'Actions',
    superAdmin: locale === 'ar' ? 'مسؤول رئيسي' : 'Super Admin',
    subAdmin: locale === 'ar' ? 'مسؤول فرعي' : 'Sub Admin',
    active: locale === 'ar' ? 'نشط' : 'Active',
    inactive: locale === 'ar' ? 'غير نشط' : 'Inactive',
    editUser: locale === 'ar' ? 'تعديل مستخدم' : 'Edit User',
    newUser: locale === 'ar' ? 'مستخدم جديد' : 'New User',
    emailField: locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address',
    passwordField: locale === 'ar' ? 'كلمة المرور' : 'Password',
    passwordNote: locale === 'ar' ? 'اتركه فارغاً للاحتفاظ بكلمة المرور الحالية' : 'Leave empty to keep current password',
    nameEn: locale === 'ar' ? 'الاسم (إنجليزي)' : 'Name (English)',
    nameAr: locale === 'ar' ? 'الاسم (عربي)' : 'Name (Arabic)',
    roleField: locale === 'ar' ? 'الدور' : 'Role',
    statusField: locale === 'ar' ? 'الحالة' : 'Status',
    save: locale === 'ar' ? 'حفظ' : 'Save',
    cancel: locale === 'ar' ? 'إلغاء' : 'Cancel',
    create: locale === 'ar' ? 'إنشاء' : 'Create',
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
                <i className="fas fa-users" style={{ marginInlineEnd: '15px' }}></i>
                {text.title}
              </h1>
              {currentUser && (
                <div style={{ fontSize: '0.95rem', opacity: 0.95 }}>
                  {text.welcome}, <strong>{currentUser.name[locale]}</strong>
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
          <button onClick={() => handleOpenModal()} className="btn btn-primary">
            <i className="fas fa-plus"></i> {text.createUser}
          </button>
          <Link href="/admin/blog" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i> {text.backToBlog}
          </Link>
          <div style={{ marginInlineStart: 'auto', color: '#6B7280', fontWeight: '600' }}>
            {text.totalUsers}: {users.length}
          </div>
        </div>

        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>{text.name}</th>
                <th>{text.email}</th>
                <th>{text.role}</th>
                <th>{text.status}</th>
                <th>{text.created}</th>
                <th>{text.actions}</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: '#6B7280' }}>
                    <i className="fas fa-users" style={{ fontSize: '3rem', marginBottom: '15px', opacity: 0.3, display: 'block' }}></i>
                    {text.noUsers}
                  </td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user.id}>
                    <td>
                      <strong>{user.name[locale]}</strong>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span style={{ 
                        background: user.role === 'super-admin' ? '#7C3AED' : '#14B8A6',
                        color: 'white', 
                        padding: '4px 12px', 
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>
                        {user.role === 'super-admin' ? text.superAdmin : text.subAdmin}
                      </span>
                    </td>
                    <td>
                      <span style={{ 
                        color: user.active ? '#10B981' : '#EF4444',
                        fontWeight: '600'
                      }}>
                        {user.active ? text.active : text.inactive}
                      </span>
                    </td>
                    <td>{formatDate(user.createdAt)}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button 
                          onClick={() => handleOpenModal(user)}
                          className="btn btn-primary" 
                          style={{ padding: '6px 12px', fontSize: '0.9rem' }}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          onClick={() => handleDelete(user.id, user.name[locale])}
                          className="btn btn-danger" 
                          style={{ padding: '6px 12px', fontSize: '0.9rem' }}
                          disabled={user.id === currentUser?.id}
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

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '30px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }} dir={dir}>
            <h2 style={{ marginBottom: '25px', color: '#7C3AED' }}>
              <i className="fas fa-user" style={{ marginInlineEnd: '10px' }}></i>
              {editingUser ? text.editUser : text.newUser}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{text.emailField} *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  {text.passwordField} {editingUser && '*'}
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required={!editingUser}
                />
                {editingUser && (
                  <small style={{ color: '#6B7280' }}>{text.passwordNote}</small>
                )}
              </div>

              <div className="form-group">
                <label>{text.nameEn} *</label>
                <input
                  type="text"
                  value={formData.name_en}
                  onChange={(e) => setFormData({ ...formData, name_en: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>{text.nameAr} *</label>
                <input
                  type="text"
                  value={formData.name_ar}
                  onChange={(e) => setFormData({ ...formData, name_ar: e.target.value })}
                  dir="rtl"
                  required
                />
              </div>

              <div className="form-group">
                <label>{text.roleField} *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as 'super-admin' | 'sub-admin' })}
                  required
                >
                  <option value="sub-admin">{text.subAdmin}</option>
                  <option value="super-admin">{text.superAdmin}</option>
                </select>
              </div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="active"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  />
                  <label htmlFor="active">{text.active}</label>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '25px' }}>
                <button type="submit" className="btn btn-success" style={{ flex: 1 }}>
                  <i className="fas fa-check"></i> {editingUser ? text.save : text.create}
                </button>
                <button type="button" onClick={handleCloseModal} className="btn btn-secondary" style={{ flex: 1 }}>
                  <i className="fas fa-times"></i> {text.cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
