'use client';

import { useState } from 'react';
import '@/styles/whatsapp-button.css';

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
      className="whatsapp-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i>
      {isHovered && (
        <span className="whatsapp-tooltip">
          Chat with us
        </span>
      )}
    </a>
  );
}
