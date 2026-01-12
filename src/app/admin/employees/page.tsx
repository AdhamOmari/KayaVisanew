'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

interface Employee {
  id: string;
  name: { en: string; ar: string };
  email: string;
  phone: string;
  position: { en: string; ar: string };
  department: string;
  role: 'admin' | 'employee';
  status: 'active' | 'inactive';
  createdAt: string;
}

export default function EmployeesManagement() {
  const { locale, dir } = useI18n();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const router = useRouter();

  const content = {
    ar: {
      title: 'إدارة الموظفين',
      subtitle: 'إضافة وإدارة الموظفين',
      back: 'رجوع',
      newEmployee: 'موظف جديد',
      cancel: 'إلغاء',
      editEmployee: 'تعديل الموظف',
      addEmployee: 'إضافة موظف جديد',
      nameEn: 'الاسم (إنجليزي)',
      nameAr: 'الاسم (عربي)',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      positionEn: 'المنصب (إنجليزي)',
      positionAr: 'المنصب (عربي)',
      department: 'القسم',
      role: 'الدور',
      admin: 'مدير',
      employee: 'موظف',
      status: 'الحالة',
      active: 'نشط',
      inactive: 'غير نشط',
      updateEmployee: 'تحديث الموظف',
      addNew: 'إضافة موظف',
      allEmployees: 'جميع الموظفين',
      noEmployees: 'لا يوجد موظفين بعد. أضف موظفك الأول!',
      edit: 'تعديل',
      delete: 'حذف',
      deleteConfirm: 'هل أنت متأكد من حذف هذا الموظف؟',
      permissions: 'الصلاحيات',
      fullAccess: 'صلاحيات كاملة',
      limitedAccess: 'صلاحيات محدودة',
    },
    en: {
      title: 'Employee Management',
      subtitle: 'Add and manage employees',
      back: 'Back',
      newEmployee: 'New Employee',
      cancel: 'Cancel',
      editEmployee: 'Edit Employee',
      addEmployee: 'Add New Employee',
      nameEn: 'Name (English)',
      nameAr: 'Name (Arabic)',
      email: 'Email',
      phone: 'Phone',
      positionEn: 'Position (English)',
      positionAr: 'Position (Arabic)',
      department: 'Department',
      role: 'Role',
      admin: 'Admin',
      employee: 'Employee',
      status: 'Status',
      active: 'Active',
      inactive: 'Inactive',
      updateEmployee: 'Update Employee',
      addNew: 'Add Employee',
      allEmployees: 'All Employees',
      noEmployees: 'No employees yet. Add your first employee!',
      edit: 'Edit',
      delete: 'Delete',
      deleteConfirm: 'Are you sure you want to delete this employee?',
      permissions: 'Permissions',
      fullAccess: 'Full Access',
      limitedAccess: 'Limited Access',
    },
  };

  const t = content[locale as keyof typeof content];

  const [formData, setFormData] = useState({
    name: { en: '', ar: '' },
    email: '',
    phone: '',
    position: { en: '', ar: '' },
    department: '',
    role: 'employee' as 'admin' | 'employee',
    status: 'active' as 'active' | 'inactive',
  });

  useEffect(() => {
    checkAuth();
    fetchEmployees();
  }, []);

  const checkAuth = () => {
    const token = document.cookie.includes('admin_token');
    if (!token) {
      router.push('/admin/login');
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/admin/employees');
      const data = await response.json();
      if (data.success) {
        setEmployees(data.employees);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = '/api/admin/employees';
      const method = editingEmployee ? 'PUT' : 'POST';
      const body = editingEmployee 
        ? JSON.stringify({ ...formData, id: editingEmployee.id })
        : JSON.stringify(formData);

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      const data = await response.json();
      if (data.success) {
        fetchEmployees();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t.deleteConfirm)) return;

    try {
      const response = await fetch(`/api/admin/employees?id=${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        fetchEmployees();
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setFormData({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      position: employee.position,
      department: employee.department,
      role: employee.role,
      status: employee.status,
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      name: { en: '', ar: '' },
      email: '',
      phone: '',
      position: { en: '', ar: '' },
      department: '',
      role: 'employee',
      status: 'active',
    });
    setEditingEmployee(null);
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
              <i className="fas fa-users" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '12px', color: '#48bb78' }}></i>
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
              style={{ padding: '10px 20px', backgroundColor: '#48bb78', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <i className={`fas fa-${showForm ? 'times' : 'user-plus'}`} style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '8px' }}></i>
              {showForm ? t.cancel : t.newEmployee}
            </button>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '25px' }}>
              {editingEmployee ? t.editEmployee : t.addEmployee}
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.nameEn}</label>
                  <input
                    type="text"
                    value={formData.name.en}
                    onChange={(e) => setFormData({ ...formData, name: { ...formData.name, en: e.target.value } })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.nameAr}</label>
                  <input
                    type="text"
                    value={formData.name.ar}
                    onChange={(e) => setFormData({ ...formData, name: { ...formData.name, ar: e.target.value } })}
                    required
                    dir="rtl"
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.email}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.positionEn}</label>
                  <input
                    type="text"
                    value={formData.position.en}
                    onChange={(e) => setFormData({ ...formData, position: { ...formData.position, en: e.target.value } })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.positionAr}</label>
                  <input
                    type="text"
                    value={formData.position.ar}
                    onChange={(e) => setFormData({ ...formData, position: { ...formData.position, ar: e.target.value } })}
                    required
                    dir="rtl"
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.department}</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  >
                    <option value="">{locale === 'ar' ? 'اختر القسم' : 'Select Department'}</option>
                    <option value="Sales">{locale === 'ar' ? 'المبيعات' : 'Sales'}</option>
                    <option value="Marketing">{locale === 'ar' ? 'التسويق' : 'Marketing'}</option>
                    <option value="Support">{locale === 'ar' ? 'الدعم' : 'Support'}</option>
                    <option value="Operations">{locale === 'ar' ? 'العمليات' : 'Operations'}</option>
                    <option value="Finance">{locale === 'ar' ? 'المالية' : 'Finance'}</option>
                    <option value="HR">{locale === 'ar' ? 'الموارد البشرية' : 'HR'}</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.role}</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as 'admin' | 'employee' })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  >
                    <option value="employee">{t.employee}</option>
                    <option value="admin">{t.admin}</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>{t.status}</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  >
                    <option value="active">{t.active}</option>
                    <option value="inactive">{t.inactive}</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button
                  type="submit"
                  style={{ padding: '12px 30px', backgroundColor: '#48bb78', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}
                >
                  <i className="fas fa-save" style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: '8px' }}></i>
                  {editingEmployee ? t.updateEmployee : t.addNew}
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

        {/* Employees Table */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '25px' }}>
            {t.allEmployees} ({employees.length})
          </h3>
          {employees.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#718096' }}>
              <i className="fas fa-users" style={{ fontSize: '4rem', marginBottom: '20px', opacity: 0.3 }}></i>
              <p style={{ fontSize: '1.2rem' }}>{t.noEmployees}</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f7fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', fontWeight: '600', color: '#1a202c' }}>{locale === 'ar' ? 'الاسم' : 'Name'}</th>
                    <th style={{ padding: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', fontWeight: '600', color: '#1a202c' }}>{t.email}</th>
                    <th style={{ padding: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', fontWeight: '600', color: '#1a202c' }}>{locale === 'ar' ? 'المنصب' : 'Position'}</th>
                    <th style={{ padding: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', fontWeight: '600', color: '#1a202c' }}>{t.department}</th>
                    <th style={{ padding: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', fontWeight: '600', color: '#1a202c' }}>{t.role}</th>
                    <th style={{ padding: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', fontWeight: '600', color: '#1a202c' }}>{t.status}</th>
                    <th style={{ padding: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', fontWeight: '600', color: '#1a202c' }}>{locale === 'ar' ? 'الإجراءات' : 'Actions'}</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '15px' }}>
                        <div style={{ fontWeight: '600', color: '#1a202c' }}>{employee.name[locale as 'en' | 'ar']}</div>
                        <div style={{ fontSize: '0.9rem', color: '#718096' }}>{employee.name[locale === 'en' ? 'ar' : 'en']}</div>
                      </td>
                      <td style={{ padding: '15px', color: '#718096' }}>{employee.email}</td>
                      <td style={{ padding: '15px' }}>
                        <div style={{ color: '#1a202c' }}>{employee.position[locale as 'en' | 'ar']}</div>
                        <div style={{ fontSize: '0.9rem', color: '#718096' }}>{employee.position[locale === 'en' ? 'ar' : 'en']}</div>
                      </td>
                      <td style={{ padding: '15px', color: '#718096' }}>{employee.department}</td>
                      <td style={{ padding: '15px' }}>
                        <span style={{ 
                          padding: '4px 12px', 
                          backgroundColor: employee.role === 'admin' ? '#667eea' : '#667eea', 
                          color: 'white', 
                          borderRadius: '20px', 
                          fontSize: '0.85rem', 
                          fontWeight: '600' 
                        }}>
                          {employee.role === 'admin' ? t.admin : t.employee}
                        </span>
                      </td>
                      <td style={{ padding: '15px' }}>
                        <span style={{ 
                          padding: '4px 12px', 
                          backgroundColor: employee.status === 'active' ? '#48bb78' : '#cbd5e0', 
                          color: 'white', 
                          borderRadius: '20px', 
                          fontSize: '0.85rem', 
                          fontWeight: '600' 
                        }}>
                          {employee.status === 'active' ? t.active : t.inactive}
                        </span>
                      </td>
                      <td style={{ padding: '15px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => handleEdit(employee)}
                            style={{ padding: '6px 12px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
                            title={t.edit}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(employee.id)}
                            style={{ padding: '6px 12px', backgroundColor: '#f56565', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
                            title={t.delete}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
