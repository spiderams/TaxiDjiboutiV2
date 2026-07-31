/** @type {import('tailwindcss').Config} */

const palette = require('./src/theme/palette');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  presets: [
    require('nativewind/preset'),
  ],

  theme: {
    extend: {
      colors: {
        primary: palette.primary,
        'primary-container': palette.primaryContainer,
        'on-primary-container': palette.onPrimaryContainer,

        'secondary-container': palette.secondaryContainer,
        'on-secondary-container': palette.onSecondaryContainer,

        surface: palette.surface,
        'surface-container': palette.surfaceContainer,
        'surface-container-high': palette.surfaceContainerHigh,

        white: palette.white,

        'on-surface': palette.onSurface,
        'on-surface-variant': palette.onSurfaceVariant,

        'outline-variant': palette.outlineVariant,

        'status-success': palette.statusSuccess,
        'status-warning': palette.statusWarning,
        'status-error': palette.statusError,
      },
    },
  },

  plugins: [],
};