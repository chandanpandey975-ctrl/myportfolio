module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Netflix-inspired confidence
        primary: {
          DEFAULT: "#E50914", // red-600 Netflix-inspired
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#E50914", // custom Netflix red
          700: "#B91C1C", // red-700
          900: "#7F1D1D", // red-900
        },
        
        // Secondary Colors - Premium content background
        secondary: {
          DEFAULT: "#141414", // gray-900 Premium content background
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          800: "#1F2937", // gray-800
          900: "#141414", // custom dark gray
        },

        // Accent Colors - Clean contrast
        accent: {
          DEFAULT: "#FFFFFF", // white Clean contrast
          50: "#FAFAFA", // gray-50
          100: "#F5F5F5", // gray-100
        },

        // Background Colors - Cinematic canvas
        background: {
          DEFAULT: "#000000", // black Cinematic canvas
          dark: "#000000", // black
          light: "#0A0A0A", // gray-950
        },

        // Surface Colors - Subtle card elevation
        surface: {
          DEFAULT: "#564D4D", // gray-600 Subtle card elevation
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          600: "#564D4D", // custom surface gray
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
        },

        // Text Colors
        text: {
          primary: "#FFFFFF", // white Extended reading
          secondary: "#808080", // gray-500 Clear hierarchy
          muted: "#6B7280", // gray-500
          dark: "#1F2937", // gray-800
        },

        // Status Colors
        success: {
          DEFAULT: "#46D369", // green-400 Positive feedback
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          400: "#46D369", // custom success green
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
        },

        warning: {
          DEFAULT: "#FFB800", // amber-500 Attention without panic
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          400: "#FBBF24", // amber-400
          500: "#FFB800", // custom warning amber
          600: "#D97706", // amber-600
        },

        error: {
          DEFAULT: "#FF6B6B", // red-400 Helpful concern
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          400: "#FF6B6B", // custom error red
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern geometric clarity
        inter: ['Inter', 'sans-serif'], // Headlines and body text
        mono: ['JetBrains Mono', 'monospace'], // Technical credibility
        jetbrains: ['JetBrains Mono', 'monospace'], // Code snippets
      },

      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },

      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.15)', // Secondary cards
        'dramatic': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Hero elements
        'hero': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Primary project cards
        'netflix': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Netflix-style layering
      },

      borderRadius: {
        'netflix': '8px', // Consistent with streaming platforms
        'card': '12px', // Premium card styling
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'premium': 'premium 0.4s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        premium: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

      transitionDuration: {
        '300': '300ms', // Smooth transitions
        '400': '400ms', // Premium transitions
      },

      transitionTimingFunction: {
        'smooth': 'ease-out', // Standard easing
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)', // Premium feel
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}