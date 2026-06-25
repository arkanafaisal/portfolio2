import React, { useState, useEffect } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Single Source of Truth untuk durasi animasi toggle
  const toggleDuration = 500;

  const handleToggle = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (isActive) {
      setIsActive(false);
      setIsHovered(false);
    } else {
      setIsActive(true);
    }

    // JS timeout tersinkronisasi penuh dengan durasi transisi CSS
    setTimeout(() => {
      setIsTransitioning(false);
    }, toggleDuration);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans select-none overflow-hidden">
      
      {/* Kontainer pemanggil - Mengatur penyelarasan Gear dan Rack secara absolut/terpusat */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center">
        
        {/* Komponen Rel Atas */}
        <div className="w-full" style={{ height: '71.68px' }}>
          <Rack 
            isActive={isActive} 
            direction="right" 
            widthTeeth={80} 
            offset={0} 
            color="#4b5563"
          />
        </div>

        {/* Komponen Gear di Tengah */}
        <div className="relative flex items-center justify-center z-10" style={{ width: '256px', height: '256px', marginTop: '-40.96px' }}>
          <button
            onClick={handleToggle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={isActive ? "Matikan mesin" : "Nyalakan mesin"}
            disabled={isTransitioning}
            className={`
              relative focus:outline-none touch-manipulation origin-center w-full h-full disabled:cursor-not-allowed
              transition-all ease-out
            `}
            style={{
              WebkitTapHighlightColor: 'transparent',
              outline: 'none',
              transitionDuration: `${toggleDuration}ms`
            }}
          >
            <GearIcon 
              isActive={isActive} 
              isHovered={isHovered}
              text="PROJECTS" 
              gearColor="#4b5563" 
              boardColor="#e5e7eb" 
              textColor="#374151" 
              toggleDuration={toggleDuration}
            />
          </button>
        </div>

        {/* Komponen Rel Bawah */}
        <div className="w-full" style={{ height: '71.68px', marginTop: '-40.96px' }}>
          <Rack 
            isActive={isActive} 
            direction="left" 
            widthTeeth={80} 
            offset={0} 
            color="#4b5563"
            isBottom={true} 
          />
        </div>

      </div>

    </div>
  );
}

// --- Komponen UI: Rack (Rel Besi Bergigi) ---
const Rack = ({ isActive, direction = "right", color = "#4b5563", widthTeeth = 30, offset = 0, isBottom = false }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const width = widthTeeth * 20.944;

  return (
    <div className={`w-full h-full max-w-full max-h-full transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <svg viewBox={`0 0 ${width} 28`} className="w-full h-full max-w-full max-h-full" preserveAspectRatio="xMidYMid slice">
        <style>
          {`
            @keyframes slideRight {
              0% { transform: translateX(0); }
              100% { transform: translateX(251.328px); }
            }
            @keyframes slideLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-251.328px); }
            }
            .anim-slide-right { animation: slideRight 4s linear infinite; }
            .anim-slide-left { animation: slideLeft 4s linear infinite; }
          `}
        </style>
        
        <g className={isActive ? (direction === 'right' ? 'anim-slide-right' : 'anim-slide-left') : ''}>
          <g transform={`translate(${offset - (20 * 20.944)}, 0)`}>
            {Array.from({ length: widthTeeth + 40 }).map((_, i) => {
              if (isBottom) {
                return <path key={i} transform={`translate(${i * 20.944}, 0)`} d="M 0,12 L 4.5,12 L 8.97,0 L 11.97,0 L 16.44,12 L 20.94,12 L 20.94,28 L 0,28 Z" fill={color} />;
              } else {
                return <path key={i} transform={`translate(${i * 20.944}, 0)`} d="M 0,16 L 4.5,16 L 8.97,28 L 11.97,28 L 16.44,16 L 20.94,16 L 20.94,0 L 0,0 Z" fill={color} />;
              }
            })}
          </g>
        </g>
      </svg>
    </div>
  );
};


// --- Komponen UI: GearIcon (Gerigi Sentral) ---
const GearIcon = ({ isActive, isHovered, text = "PROJECTS", gearColor = "#4b5563", boardColor = "#e5e7eb", textColor = "#374151", toggleDuration = 500 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className="relative w-full h-full max-w-full max-h-full"
    >
      <g 
        style={{ transformOrigin: '50px 50px', transitionDuration: `${toggleDuration}ms` }} 
        className={`transition-all ${isActive || isHovered ? 'scale-100' : 'scale-75'} ${isMounted ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
      >
        <g 
          style={{ transformOrigin: '50px 50px' }} 
          className={isActive ? 'animate-[spin_4s_linear_infinite]' : ''}
        >
          <defs>
            <mask id="gearHoles">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <circle 
                cx="50" cy="50" r="25" fill="transparent" stroke="black" strokeWidth="6" 
                strokeDasharray="60 18.54" transform="rotate(21.25 50 50)" 
              />
              <circle cx="50" cy="50" r="14" fill="black" />
            </mask>
          </defs>

          <g mask="url(#gearHoles)" fill={gearColor}>
            <circle cx="50" cy="50" r="38" />
            {Array.from({ length: 12 }).map((_, i) => (
              <polygon
                key={i}
                points="46,4 54,4 57,16 43,16"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
          </g>

          <rect x="16" y="34" width="68" height="32" rx="8" fill={boardColor} />
          
          <circle cx="22" cy="39" r="1.5" fill={textColor} />
          <circle cx="78" cy="39" r="1.5" fill={textColor} />
          <circle cx="22" cy="61" r="1.5" fill={textColor} />
          <circle cx="78" cy="61" r="1.5" fill={textColor} />
          
          <g fontSize="10" fontWeight="900" textAnchor="middle" dominantBaseline="middle" letterSpacing="0.15em">
            <text x="50" y="52.5" fill="#ffffff" opacity="0.8">{text}</text>
            <text x="50" y="51" fill={textColor}>{text}</text>
          </g>
        </g>
      </g>
    </svg>
  );
};
