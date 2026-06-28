import React from "react";

const S = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Rigid, angular crystalline ice
export const IconIce = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M24 5 L39 13.5 V34.5 L24 43 L9 34.5 V13.5 Z" />
    <path d="M24 5 V43" />
    <path d="M9 13.5 L24 21 L39 13.5" />
    <path d="M9 34.5 L24 27 L39 34.5" />
    <path d="M24 21 V27" />
  </svg>
);

// Hard frozen gel pack with crackle pattern
export const IconHardPack = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <rect x="9" y="9" width="30" height="30" rx="4" />
    <path d="M15 16 L21 22 L18 26" />
    <path d="M30 18 L26 24 L31 28" />
    <path d="M22 31 L27 35" />
  </svg>
);

// Flowing ocean waves (recover)
export const IconWave = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M5 22 C10 17 15 17 20 22 C25 27 30 27 35 22 C38 19 41 19 43 22" />
    <path d="M5 31 C10 26 15 26 20 31 C25 36 30 36 35 31 C38 28 41 28 43 31" />
    <path d="M9 40 C12 38 14 38 16 40" opacity="0.5" />
  </svg>
);

// Seaweed / kelp strand flowing (refine — alginate extraction)
export const IconKelp = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M24 42 C18 36 18 28 22 20 C24 15 22 10 24 6" />
    <path d="M24 24 C28 21 30 17 29 13" />
    <path d="M22 30 C18 28 16 25 17 22" />
    <circle cx="24" cy="7" r="1.4" />
  </svg>
);

// Connected gel beads (reimagine — alginate gel)
export const IconBeads = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <circle cx="16" cy="30" r="7" />
    <circle cx="32" cy="30" r="7" />
    <circle cx="24" cy="18" r="7" />
  </svg>
);

// Flowing S-ribbon (flexible conformity)
export const IconFlexCurve = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M10 14 C18 8 22 24 30 18 C36 14 38 22 42 18" />
    <path d="M6 30 C14 24 18 40 26 34 C32 30 34 38 38 34" opacity="0.55" />
  </svg>
);

// Soft flowing time-ring (long-lasting cold)
export const IconFlowTime = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="16" />
    <path d="M24 14 V24 L31 28" />
    <path d="M14 24 C18 22 22 26 24 24" opacity="0.5" />
  </svg>
);

// Soft six-point frost flower (fast freeze)
export const IconFrost = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M24 7 V41" />
    <path d="M9 15 L39 33" />
    <path d="M39 15 L9 33" />
    <path d="M24 7 L20 13 M24 7 L28 13" />
    <path d="M24 41 L20 35 M24 41 L28 35" />
    <path d="M9 15 L13 15 M9 15 L9 19" opacity="0.5" />
    <path d="M39 15 L35 15 M39 15 L39 19" opacity="0.5" />
  </svg>
);

// Face profile contour (plastic surgery / dermatology)
export const IconFaceProfile = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M31 6 C26 6 23 10 23 15 C23 18 21 20 18 21 C15 22 14 25 16 27 C17 28 16 31 15 32 C13 34 15 37 18 37 C21 37 23 39 23 42" />
    <path d="M28 17 C28 18 27 19 26 19" opacity="0.6" />
  </svg>
);

// Tooth (dental)
export const IconTooth = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M16 9 C12 9 10 13 11 18 C12 23 13 27 15 31 C16 33 18 33 19 30 C20 27 20 23 22 23 C24 23 24 27 25 30 C26 33 28 33 29 31 C31 27 32 23 33 18 C34 13 32 9 28 9 C25 9 24 11 22 11 C20 11 19 9 16 9 Z" />
  </svg>
);

// Joint — two knobs connected (orthopedics)
export const IconJoint = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <circle cx="15" cy="15" r="6" />
    <circle cx="33" cy="33" r="6" />
    <path d="M19 19 L29 29" />
  </svg>
);

// Lab flask (science-led)
export const IconFlask = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M19 7 H29" />
    <path d="M20 7 V19 L11 35 a3.2 3.2 0 0 0 2.8 4.7 H34.2 a3.2 3.2 0 0 0 2.8-4.7 L28 19 V7" />
    <path d="M16 28 H32" opacity="0.6" />
  </svg>
);

// Ocean — wave over horizon (ocean-positive)
export const IconOcean = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M5 24 C10 19 14 19 19 24 C24 29 28 29 33 24 C36 21 39 21 43 24" />
    <path d="M6 36 C10 33 14 33 18 36" opacity="0.55" />
    <path d="M26 36 C30 33 34 33 38 36" opacity="0.55" />
  </svg>
);

// Heart with pulse line (patient-first)
export const IconPulseHeart = ({ className }) => (
  <svg {...S} className={className} aria-hidden="true">
    <path d="M24 40 C17 34 9 28 9 19 a7 7 0 0 1 14-2 a7 7 0 0 1 14 2 C39 28 31 34 24 40 Z" />
    <path d="M13 23 H19 L21 19 L25 27 L27 23 H35" opacity="0.6" />
  </svg>
);