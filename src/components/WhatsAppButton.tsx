'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  // WhatsApp phone number (replace with actual number)
  const phoneNumber = '962XXXXXXXXX'; // Replace with your WhatsApp business number
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.button,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered 
          ? '0 8px 30px rgba(37, 211, 102, 0.5)' 
          : '0 4px 20px rgba(37, 211, 102, 0.3)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp" style={styles.icon}></i>
      {isHovered && (
        <span style={styles.tooltip}>
          Chat with us
        </span>
      )}
    </a>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 9999,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    border: 'none',
    animation: 'pulse 2s infinite',
  },
  icon: {
    fontSize: '2rem',
    color: '#ffffff',
  },
  tooltip: {
    position: 'absolute',
    right: '70px',
    backgroundColor: '#ffffff',
    color: '#25D366',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    animation: 'slideIn 0.3s ease',
  },
};
