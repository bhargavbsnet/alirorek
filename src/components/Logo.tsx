import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

// Gradient definition component to prevent id collisions
export const LogoGradients = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient id="logo-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" /> {/* Electric Mint */}
        <stop offset="50%" stopColor="#06B6D4" /> {/* Bright Cyan */}
        <stop offset="100%" stopColor="#4C1D95" /> {/* Deep Violet */}
      </linearGradient>
      <linearGradient id="logo-grad-mint" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="logo-grad-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#4C1D95" />
      </linearGradient>
    </defs>
  </svg>
);

// 1. Icon Mark - isometric organization flow layers forming an "A"
export const LogoIcon: React.FC<LogoProps> = ({ className = "h-8 w-8", width = 32, height = 32 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ALIROREK Icon Mark"
    >
      {/* Top Layer: Flow Node */}
      <path
        d="M50 15 L80 32 L50 49 L20 32 Z"
        fill="url(#logo-grad-mint)"
        opacity="0.9"
      />
      {/* Middle Layer: Productivity/Automation Stack */}
      <path
        d="M20 42 L50 59 L80 42 L80 49 L50 66 L20 49 Z"
        fill="url(#logo-grad-cyan)"
      />
      {/* Bottom Layer: Cloud Infrastructure Foundation */}
      <path
        d="M20 59 L50 76 L80 59 L80 66 L50 83 L20 66 Z"
        fill="url(#logo-grad-primary)"
      />
      {/* Rising Core Arrow - indicating Growth */}
      <path
        d="M50 35 L62 42 L50 49 L38 42 Z"
        fill="#ffffff"
        opacity="0.8"
      />
    </svg>
  );
};

// 2. Primary Logo: Icon Mark + Stylized Brand Text (Dark Backgrounds)
export const LogoPrimary: React.FC<LogoProps> = ({ className = "", width = 180, height = 40 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon className="h-9 w-9" />
      <span className="text-xl font-bold tracking-wider font-sans text-white">
        ALIRO<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">REK</span>
      </span>
    </div>
  );
};

// 3. Secondary Logo: Horizontal layout with Tagline
export const LogoSecondary: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <LogoIcon className="h-8 w-8" />
        <span className="text-lg font-bold tracking-wider text-white">
          ALIRO<span className="text-accent">REK</span>
        </span>
      </div>
      <span className="text-[10px] text-slate-400 tracking-widest uppercase pl-10 -mt-1">
        Cloud Productivity
      </span>
    </div>
  );
};

// 4. Monochrome Version
export const LogoMonochrome: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className="h-8 w-8 text-slate-400"
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 15 L80 32 L50 49 L20 32 Z" opacity="0.8" />
        <path d="M20 42 L50 59 L80 42 L80 49 L50 66 L20 49 Z" opacity="0.6" />
        <path d="M20 59 L50 76 L80 59 L80 66 L50 83 L20 66 Z" opacity="0.4" />
      </svg>
      <span className="text-xl font-semibold tracking-wider text-slate-300">
        ALIROREK
      </span>
    </div>
  );
};

// 5. Light Version (For white or high-brightness backgrounds)
export const LogoLight: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon className="h-9 w-9" />
      <span className="text-xl font-bold tracking-wider text-slate-900">
        ALIRO<span className="text-secondary">REK</span>
      </span>
    </div>
  );
};

// 6. Dark Version (Alias to Primary Logo)
export const LogoDark: React.FC<LogoProps> = LogoPrimary;
