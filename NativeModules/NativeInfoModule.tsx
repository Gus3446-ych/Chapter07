import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import NativeInfo from './nativeInfo';

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value || '로딩 중...'}</Text>
  </View>
);

const NewModuleButton = () => {
  const [appVersion, setAppVersion] = useState('');
  const [buildVersion, setBuildVersion] = useState('');
  const [bundleIdentifier, setBundleIdentifier] = useState('');
  const [currentDevice, setCurrentDevice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onPress = () => {
    setIsLoading(true);
    try {
      const getCurrentDevice = NativeInfo.currentDevice;
      const getAppVersion = NativeInfo.appVersion;
      const getBuildVersion = NativeInfo.buildVersion;
      const getBundleId = NativeInfo.bundleIdentifier;
      setCurrentDevice(getCurrentDevice);
      setAppVersion(getAppVersion);
      setBuildVersion(getBuildVersion);
      setBundleIdentifier(getBundleId);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>애플리케이션 정보</Text>
        <Text style={styles.subtitle}>디바이스 및 앱 정보를 조회합니다</Text>

        <View style={styles.infoCard}>
          <InfoItem label="앱 버전" value={appVersion} />
          <View style={styles.divider} />
          <InfoItem label="빌드 버전" value={buildVersion} />
          <View style={styles.divider} />
          <InfoItem label="번들 아이디" value={bundleIdentifier} />
          <View style={styles.divider} />
          <InfoItem label="디바이스" value={currentDevice} />
        </View>

        <TouchableOpacity
          onPress={onPress}
          disabled={isLoading}
          style={[styles.buttonStyle, isLoading && styles.buttonDisabled]}>
          <Text style={styles.buttonTextStyle}>
            {isLoading ? '조회 중...' : '정보 조회'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoItem: {
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 13,
    color: '#999',
    fontWeight: '600',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 12,
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    shadowOpacity: 0.1,
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default NewModuleButton;
