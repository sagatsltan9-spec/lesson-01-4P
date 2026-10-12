import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  onBack: () => void;
  onNext: (city: string) => void;
};

const CITIES = ['Алматы', 'Астана', 'Шымкент', 'Қарағанды', 'Ақтөбе'];

export default function ChooseCity({ onBack, onNext }: Props) {
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Выберите город
        </Text>

        <Text style={styles.subtitle}>
          Заведения которые будут показываться
          {'\n'}
          вам, будут зависеть от вашего города.
        </Text>

        {/* Dropdown */}
        <Pressable style={styles.select} onPress={() => setOpen(!open)}>
          <Text style={city ? styles.selected : styles.placeholder}>
            {city || 'Выбрать город'}
          </Text>
          <Text style={styles.arrow}>{open ? '⌃' : '⌄'}</Text>
        </Pressable>

        {open && (
          <View style={styles.list}>
            {CITIES.map((c) => (
              <Pressable
                key={c}
                style={styles.item}
                onPress={() => {
                  setCity(c);
                  setOpen(false);
                }}
              >
                <Text style={styles.itemText}>{c}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Төменде тұратын батырма */}
        <View style={styles.bottom}>
          <Pressable
            style={[styles.button, !city && { opacity: 0.4 }]}
            onPress={() => onNext(city)}
            disabled={!city}
          >
            <Text style={styles.buttonText}>Продолжить</Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1B1923',
  },

  subtitle: {
    fontSize: 18,
    color: '#AAA9B2',
    marginTop: 5,
    marginBottom: 29,
  },

  select: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
  },

  placeholder: {
    fontSize: 18,
    color: '#AAA9B2',
  },

  selected: {
    fontSize: 18,
    color: '#1B1923',
  },

  arrow: {
    fontSize: 22,
    color: '#1B1923',
  },

  list: {
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    marginTop: 8,
    overflow: 'hidden',
  },

  item: {
    padding: 18,
  },

  itemText: {
    fontSize: 18,
    color: '#1B1923',
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  button: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
