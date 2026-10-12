import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export type Tab = 'home' | 'profile' | 'settings';

type Props = {
  current: Tab;
  onChange: (tab: Tab) => void;
};

const TABS: { key: Tab; icon: string; label: string }[] = [
  { key: 'home', icon: '🏠', label: 'Главная' },
  { key: 'profile', icon: '👤', label: 'Профиль' },
  { key: 'settings', icon: '⚙️', label: 'Настройки' },
];

export default function BottomTabs({ current, onChange }: Props) {
  return (
    <View style={styles.bar}>
      {TABS.map((t) => (
        <Pressable key={t.key} style={styles.tab} onPress={() => onChange(t.key)}>
          <Text style={styles.icon}>{t.icon}</Text>
          <Text style={[styles.label, current === t.key && styles.active]}>
            {t.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F3',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  tab: { flex: 1, alignItems: 'center' },
  icon: { fontSize: 22 },
  label: { fontSize: 12, color: '#AAA9B2', marginTop: 2 },
  active: { color: '#A811DA', fontWeight: '700' },
});
