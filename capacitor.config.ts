import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.norandiaconu.recipesearch',
  appName: 'recipe-search',
  webDir: 'docs',
  server: {
    androidScheme: 'https'
  },
  backgroundColor: "#000000"
};

export default config;
