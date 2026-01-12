import React from 'react';

export default function GlobalLoading() {
  return (
    <>
      <style>{`
        @keyframes planeMove {
          0% {
            transform: translateX(-100px) translateY(10px) rotate(-15deg);
            opacity: 0;
          }
          50% {
            transform: translateX(0px) translateY(0px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(-10px) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes cloudFloat1 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(20px) translateY(-5px);
          }
        }

        @keyframes cloudFloat2 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-15px) translateY(5px);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes compassRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #FEF3C7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loading-content {
          position: relative;
        }

        .cloud1 {
          position: absolute;
          top: -80px;
          left: -128px;
          opacity: 0.4;
          animation: cloudFloat1 4s ease-in-out infinite;
        }

        .cloud2 {
          position: absolute;
          bottom: -64px;
          right: 0;
          opacity: 0.4;
          animation: cloudFloat2 5s ease-in-out infinite 1s;
        }

        .loading-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          padding: 48px;
          width: 320px;
          position: relative;
          overflow: hidden;
        }

        .gradient-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #003DA5 0%, #1E40AF 50%, #E5B84A 100%);
        }

        .compass-decoration {
          position: absolute;
          top: 16px;
          right: 16px;
          opacity: 0.05;
        }

        .compass-inner {
          width: 64px;
          height: 64px;
          position: relative;
          animation: compassRotate 4s linear infinite;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
          height: 96px;
          align-items: center;
          overflow: hidden;
        }

        .plane {
          animation: planeMove 3s ease-in-out infinite;
        }

        .loading-text {
          text-align: center;
          animation: fadeIn 0.8s ease-out;
        }

        .loading-title {
          font-size: 24px;
          font-weight: bold;
          color: #1F2937;
          margin-bottom: 12px;
        }

        .loading-subtitle {
          color: #6B7280;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          animation: dotPulse 1.5s ease-in-out infinite;
        }

        .dot-blue-900 {
          background-color: #003DA5;
          animation-delay: 0s;
        }

        .dot-blue-700 {
          background-color: #1E40AF;
          animation-delay: 0.3s;
        }

        .dot-amber {
          background-color: #E5B84A;
          animation-delay: 0.6s;
        }

        .icons-container {
          margin-top: 32px;
          display: flex;
          justify-content: center;
          gap: 16px;
          opacity: 0.3;
        }

        .icon-item {
          font-size: 12px;
          color: #9CA3AF;
        }

        .shadow-effect {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 75%;
          height: 16px;
          background: black;
          opacity: 0.05;
          filter: blur(20px);
          border-radius: 50%;
        }
      `}</style>

      <div className="loading-container">
        <div className="loading-content">
          {/* Background clouds */}
          <div className="cloud1">
            <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
              <ellipse cx="25" cy="35" rx="20" ry="15" fill="#E0F2FE" />
              <ellipse cx="45" cy="30" rx="25" ry="18" fill="#E0F2FE" />
              <ellipse cx="65" cy="35" rx="20" ry="15" fill="#E0F2FE" />
            </svg>
          </div>
          
          <div className="cloud2">
            <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
              <ellipse cx="20" cy="30" rx="15" ry="12" fill="#DBEAFE" />
              <ellipse cx="40" cy="25" rx="20" ry="15" fill="#DBEAFE" />
              <ellipse cx="60" cy="30" rx="15" ry="12" fill="#DBEAFE" />
            </svg>
          </div>

          {/* Main content container */}
          <div className="loading-card">
            {/* Decorative gradient overlay */}
            <div className="gradient-bar"></div>
            
            {/* Compass background decoration */}
            <div className="compass-decoration">
              <div className="compass-inner">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" stroke="#003DA5" strokeWidth="2" />
                  <path d="M32 2 L32 12 M32 52 L32 62 M2 32 L12 32 M52 32 L62 32" stroke="#003DA5" strokeWidth="2" />
                  <path d="M32 8 L28 32 L32 56 L36 32 Z" fill="#003DA5" />
                </svg>
              </div>
            </div>

            {/* Animated Kaya Logo */}
            <div className="logo-container">
              <div className="plane">
                <svg width="100" height="80" viewBox="0 0 350 200" fill="none">
                  {/* Mountain/Arrow shape with blue and gold stripes */}
                  <path d="M100 150 L50 100 L75 100 L75 60 L100 60 L100 100 L125 100 Z" 
                        fill="#003DA5" />
                  <path d="M125 150 L75 100 L100 100 L100 60 L125 60 L125 100 L150 100 Z" 
                        fill="#003DA5" />
                  <path d="M150 150 L100 100 L125 100 L125 60 L150 60 L150 100 L175 100 Z" 
                        fill="#E5B84A" />
                  
                  {/* White diagonal stripes for detail */}
                  <line x1="85" y1="80" x2="95" y2="100" stroke="white" strokeWidth="3" />
                  <line x1="110" y1="80" x2="120" y2="100" stroke="white" strokeWidth="3" />
                </svg>
              </div>
            </div>

            {/* Loading text */}
            <div className="loading-text">
              <h2 className="loading-title">
                Preparing Your Journey
              </h2>
              <p className="loading-subtitle">
                Discovering amazing destinations...
              </p>
            </div>

            {/* Loading dots */}
            <div className="dots-container">
              <div className="dot dot-blue-900"></div>
              <div className="dot dot-blue-700"></div>
              <div className="dot dot-amber"></div>
            </div>

            {/* Bottom decorative element */}
            <div className="icons-container">
              <div className="icon-item">✈</div>
              <div className="icon-item">🌍</div>
              <div className="icon-item">🗺</div>
              <div className="icon-item">🧳</div>
            </div>
          </div>

          {/* Shadow effect */}
          <div className="shadow-effect"></div>
        </div>
      </div>
    </>
  );
}