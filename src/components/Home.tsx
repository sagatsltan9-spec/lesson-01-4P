import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BottomTabs, { Tab } from './BottomTabs';

type Props = {
  name: string;
  city: string;
  onTab: (tab: Tab) => void;
};

const PLACES = [
  { id: '1', icon: '☕', title: 'Coffee House', info: 'Кофейня • 4.8 ⭐' },
  { id: '2', icon: '🍕', title: 'Pizza Time', info: 'Пиццерия • 4.6 ⭐' },
  { id: '3', icon: '🍣', title: 'Sushi Bar', info: 'Суши • 4.7 ⭐' },
  { id: '4', icon: '🍔', title: 'Burger Club', info: 'Бургерная • 4.5 ⭐' },
];

export default function Home({ name, city, onTab }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Привет, {name}! 👋</Text>
        <Text style={styles.subtitle}>📍 {city}</Text>

        <Text style={styles.section}>Заведения рядом</Text>

        {PLACES.map((p) => (
          <View key={p.id} style={styles.card}>
            <Text style={styles.cardIcon}>{p.icon}</Text>
            <View>
              <Text style={styles.cardTitle}>{p.title}</Text>
              <Text style={styles.cardInfo}>{p.info}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <BottomTabs current="home" onChange={onTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { paddingHorizontal: 28, paddingTop: 30 },
  title: { fontSize: 27, fontWeight: '700', color: '#1B1923' },
  subtitle: { fontSize: 18, color: '#AAA9B2', marginTop: 5, marginBottom: 24 },
  section: { fontSize: 20, fontWeight: '700', color: '#1B1923', marginBottom: 14 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  cardIcon: { fontSize: 32, marginRight: 16 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#1B1923' },
  cardInfo: { fontSize: 14, color: '#AAA9B2', marginTop: 3 },
});
