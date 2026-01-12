'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

interface TeamMember {
  id: string;
  name: { en: string; ar: string };
  position: { en: string; ar: string };
  image: string;
  bio: { en: string; ar: string };
  email: string;
  phone: string;
  role: string;
}

export default function AdminTeamPage() {
  const { locale, dir } = useI18n();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    nameEn: '',
    nameAr: '',
    positionEn: '',
    positionAr: '',
    image: '',
    bioEn: '',
    bioAr: '',
    email: '',
    phone: '',
    role: 'member',
  });

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await fetch('/api/team');
      const data = await response.json();
      setMembers(data.members || []);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingMember(null);
    setFormData({
      nameEn: '',
      nameAr: '',
      positionEn: '',
      positionAr: '',
      image: '',
      bioEn: '',
      bioAr: '',
      email: '',
      phone: '',
      role: 'member',
    });
    setShowModal(true);
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setFormData({
      nameEn: member.name.en,
      nameAr: member.name.ar,
      positionEn: member.position.en,
      positionAr: member.position.ar,
      image: member.image,
      bioEn: member.bio.en,
      bioAr: member.bio.ar,
      email: member.email,
      phone: member.phone,
      role: member.role,
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!formData.nameEn || !formData.nameAr || !formData.positionEn || !formData.positionAr) {
      alert('Name and position are required in both languages!');
      return;
    }

    setSaving(true);
    try {
      const body = {
        ...(editingMember && { id: editingMember.id }),
        name: { en: formData.nameEn, ar: formData.nameAr },
        position: { en: formData.positionEn, ar: formData.positionAr },
        image: formData.image || '/images/team/default-avatar.png',
        bio: { en: formData.bioEn, ar: formData.bioAr },
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
      };

      const response = await fetch('/api/team', {
        method: editingMember ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setShowModal(false);
        fetchTeam();
        alert(editingMember ? 'Member updated successfully!' : 'Member added successfully!');
      } else {
        alert('Failed to save member!');
      }
    } catch (error) {
      console.error('Error saving member:', error);
      alert('Error saving member!');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const response = await fetch(`/api/team?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTeam();
        alert('Member deleted successfully!');
      } else {
        alert('Failed to delete member!');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      alert('Error deleting member!');
    }
  };

  return (
    <div dir={dir} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '10px' }}>
              {locale === 'ar' ? 'إدارة الفريق' : 'Team Management'}
            </h1>
            <p style={{ color: '#718096', fontSize: '1.1rem' }}>
              {locale === 'ar' ? 'إضافة وتعديل وحذف أعضاء الفريق' : 'Add, edit, and delete team members'}
            </p>
          </div>
          <button
            onClick={handleAdd}
            style={{
              padding: '14px 32px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5568d3';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#667eea';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <i className="fas fa-plus"></i>
            {locale === 'ar' ? 'إضافة عضو جديد' : 'Add New Member'}
          </button>
        </div>

        {/* Team Members Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px' }}>
            <div
              style={{
                display: 'inline-block',
                width: '50px',
                height: '50px',
                border: '5px solid #f3f3f3',
                borderTop: '5px solid #667eea',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {members.map((member) => (
              <div
                key={member.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '25px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {member.image && member.image !== '/images/team/default-avatar.png' ? (
                      <img
                        src={member.image}
                        alt={member.name.en}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <i className="fas fa-user" style={{ fontSize: '2rem', color: 'white' }}></i>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '5px' }}>
                      {member.name[locale as keyof typeof member.name]}
                    </h3>
                    <p style={{ color: '#667eea', fontSize: '0.95rem', fontWeight: '600', marginBottom: '5px' }}>
                      {member.position[locale as keyof typeof member.position]}
                    </p>
                    {member.role === 'admin' && (
                      <span
                        style={{
                          backgroundColor: '#fef3c7',
                          color: '#92400e',
                          padding: '3px 10px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        <i className="fas fa-crown"></i>
                        Admin
                      </span>
                    )}
                  </div>
                </div>

                {member.bio[locale as keyof typeof member.bio] && (
                  <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '12px', lineHeight: '1.5' }}>
                    {member.bio[locale as keyof typeof member.bio].substring(0, 100)}
                    {member.bio[locale as keyof typeof member.bio].length > 100 && '...'}
                  </p>
                )}

                {(member.email || member.phone) && (
                  <div style={{ marginBottom: '15px', paddingTop: '12px', borderTop: '1px solid #e2e8f0' }}>
                    {member.email && (
                      <div style={{ fontSize: '0.85rem', color: '#48bb78', marginBottom: '5px' }}>
                        <i className="fas fa-envelope" style={{ width: '16px', color: '#667eea' }}></i> {member.email}
                      </div>
                    )}
                    {member.phone && (
                      <div style={{ fontSize: '0.85rem', color: '#48bb78' }}>
                        <i className="fas fa-phone" style={{ width: '16px', color: '#667eea' }}></i> {member.phone}
                      </div>
                    )}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleEdit(member)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#5568d3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#667eea';
                    }}
                  >
                    <i className="fas fa-edit"></i> {locale === 'ar' ? 'تعديل' : 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#dc2626';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ef4444';
                    }}
                  >
                    <i className="fas fa-trash"></i> {locale === 'ar' ? 'حذف' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px',
            }}
            onClick={() => setShowModal(false)}
          >
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '40px',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', color: '#1a202c' }}>
                {editingMember ? (locale === 'ar' ? 'تعديل عضو' : 'Edit Member') : (locale === 'ar' ? 'إضافة عضو جديد' : 'Add New Member')}
              </h2>

              <div style={{ display: 'grid', gap: '20px' }}>
                {/* Name EN */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    Name (English) *
                  </label>
                  <input
                    type="text"
                    value={formData.nameEn}
                    onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                {/* Name AR */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    الاسم (عربي) *
                  </label>
                  <input
                    type="text"
                    value={formData.nameAr}
                    onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      direction: 'rtl',
                    }}
                  />
                </div>

                {/* Position EN */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    Position (English) *
                  </label>
                  <input
                    type="text"
                    value={formData.positionEn}
                    onChange={(e) => setFormData({ ...formData, positionEn: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                {/* Position AR */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    المنصب (عربي) *
                  </label>
                  <input
                    type="text"
                    value={formData.positionAr}
                    onChange={(e) => setFormData({ ...formData, positionAr: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      direction: 'rtl',
                    }}
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/images/team/member-name.png"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                {/* Bio EN */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    Bio (English)
                  </label>
                  <textarea
                    value={formData.bioEn}
                    onChange={(e) => setFormData({ ...formData, bioEn: e.target.value })}
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Bio AR */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    السيرة الذاتية (عربي)
                  </label>
                  <textarea
                    value={formData.bioAr}
                    onChange={(e) => setFormData({ ...formData, bioAr: e.target.value })}
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      direction: 'rtl',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                {/* Role */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#48bb78' }}>
                    Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  >
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  style={{
                    flex: 1,
                    padding: '14px',
                    backgroundColor: saving ? '#9ca3af' : '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: saving ? 'not-allowed' : 'pointer',
                  }}
                >
                  {saving ? (locale === 'ar' ? 'جاري الحفظ...' : 'Saving...') : (locale === 'ar' ? 'حفظ' : 'Save')}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    flex: 1,
                    padding: '14px',
                    backgroundColor: '#e2e8f0',
                    color: '#48bb78',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {locale === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
