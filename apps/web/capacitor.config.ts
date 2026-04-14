import { CapacitorConfig } from '@capacitor/cli';
import { address } from 'ip';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'web',
  webDir: '../../dist/apps/web/browser',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

const serverConfig = {
  androidScheme: 'https'
};

if (process.env.LIVE === 'true') {
  const localIp = address();
  const port = process.env.PORT || '4200';
  config.server = {
    url: `http://${localIp}:${port}`,
    cleartext: true,
    ...serverConfig
  };
} else {
  Reflect.deleteProperty(config, 'server');
  config.server = serverConfig;
}

export default config;
