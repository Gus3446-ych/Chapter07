import { NativeModules } from 'react-native';
const { NativeInfoModule } = NativeModules;

type NativeInfoType = {
  appVersion: string;
  buildVersion: string;
  bundleIdentifier: string;
  currentDevice: string;
};

export default NativeInfoModule as NativeInfoType;
