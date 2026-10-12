import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BottomTabs, { Tab } from './BottomTabs';

type Props = {
  name: string;
  phone: string;
  city: string;
  onTab: (tab: Tab) => void;
  onLogout: () => void;
};

export default function Profile({ name, phone, city, onTab, onLogout }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0).toUpperCase()}</Text>
        </View>

        <Text style={styles.name}>{name}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>📞 Телефон</Text>
          <Text style={styles.value}>{phone || '—'}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>📍 Город</Text>
          <Text style={styles.value}>{city || '—'}</Text>
        </View>

        <View style={styles.bottom}>
          <Pressable style={styles.button} onPress={onLogout}>
            <Text style={styles.buttonText}>Выйти</Text>
          </Pressable>
        </View>
      </View>

      <BottomTabs current="profile" onChange={onTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 40 },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#A811DA',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  avatarText: { fontSize: 40, fontWeight: '700', color: '#FFFFFF' },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B1923',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  label: { fontSize: 16, color: '#AAA9B2' },
  value: { fontSize: 16, color: '#1B1923', fontWeight: '500' },
  bottom: { flex: 1, justifyContent: 'flex-end', paddingBottom: 20 },
  button: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
  },
  buttonText: { fontSize: 18, fontWeight: '700', color: '#FFFFFF' },
});
