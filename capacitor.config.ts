import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.diggiassist.app',
  appName: 'Diggiassist',
  webDir: 'out',
  "server": {
    "url": "http://192.168.0.103:3000",
    "cleartext": true
  },
};

export default config;
