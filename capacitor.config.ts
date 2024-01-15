import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cookmate',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;

