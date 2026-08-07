import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'glass-gradient': 'radial-gradient(circle at top, rgba(59, 130, 246, 0.15), transparent 30%), linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(168, 85, 247, 0.1))'
      }
    }
  },
  plugins: []
};

export default config;
