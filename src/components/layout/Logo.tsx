import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "dynamic";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  // Determine fill colors based on the variant
  // primaryText: Navy (#062C4E) for dark theme (light bg), White (#FFFFFF) for light theme (dark bg)
  // secondaryColor: Always Rust Orange (#C3662A) to match the brand logo
  const primaryText = variant === "light" ? "#FFFFFF" : "#062C4E";
  const dividerColor = "#C3662A";
  const sparkleColor = variant === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(6, 44, 78, 0.15)";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        width="165"
        height="55"
        viewBox="0 0 165 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* SHIVAM Text */}
        <text
          x="82.5"
          y="23"
          textAnchor="middle"
          fontWeight="700"
          fontSize="22"
          letterSpacing="0.08em"
          fill={primaryText}
          style={{ 
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontFeatureSettings: '"kern" 1'
          }}
        >
          SHIVAM
        </text>
        
        {/* Curved, Tapered Divider Line */}
        <path
          d="M 12 28 C 45 30.2, 120 30.2, 153 28 C 120 26.8, 45 26.8, 12 28 Z"
          fill={dividerColor}
        />
        
        {/* REALTY Text */}
        <text
          x="83.5"
          y="44"
          textAnchor="middle"
          fontWeight="600"
          fontSize="11.5"
          letterSpacing="0.4em"
          fill={primaryText}
          style={{ 
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontFeatureSettings: '"kern" 1'
          }}
        >
          REALTY
        </text>

        {/* Small Elegant Sparkle Star at bottom right */}
        <path
          d="M 154 44 C 154 44, 156.5 44, 156.5 41.5 C 156.5 44, 159 44, 159 44 C 159 44, 156.5 44, 156.5 46.5 C 156.5 44, 154 44, 154 44 Z"
          fill={sparkleColor}
        />
      </svg>
    </div>
  );
}
