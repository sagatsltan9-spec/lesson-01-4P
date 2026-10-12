import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BottomTabs, { Tab } from './BottomTabs';

type Props = {
  onTab: (tab: Tab) => void;
};

export default function Settings({ onTab }: Props) {
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const items = [
    { label: '🔔 Уведомления', value: notifications, set: setNotifications },
    { label: '🔊 Звук', value: sound, set: setSound },
    { label: '🌙 Тёмная тема', value: darkMode, set: setDarkMode },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Text style={styles.title}>Настройки</Text>
        <Text style={styles.subtitle}>Управляйте приложением под себя</Text>

        {items.map((item) => (
          <View key={item.label} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Switch
              value={item.value}
              onValueChange={item.set}
              trackColor={{ true: '#A811DA' }}
            />
          </View>
        ))}

        <Text style={styles.version}>Версия 1.0.0</Text>
      </View>

      <BottomTabs current="settings" onChange={onTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 30 },
  title: { fontSize: 27, fontWeight: '700', color: '#1B1923' },
  subtitle: { fontSize: 18, color: '#AAA9B2', marginTop: 5, marginBottom: 29 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    height: 62,
    marginBottom: 14,
  },
  label: { fontSize: 18, color: '#1B1923' },
  version: { textAlign: 'center', color: '#AAA9B2', marginTop: 24 },
});
