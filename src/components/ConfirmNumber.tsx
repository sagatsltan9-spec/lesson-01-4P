import React, { useRef, useState } from 'react';

import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  phone: string;
  onBack: () => void;
  onNext: () => void;
};

export default function ConfirmNumber({ phone, onBack, onNext }: Props) {
  const [code, setCode] = useState(['', '', '', '']);
  const refs = useRef<(TextInput | null)[]>([]);

  // Әр қорапқа бір сан, келесіге автоматты өту
  const changeDigit = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);
    if (text && index < 3) {
      refs.current[index + 1]?.focus();
    }
  };

  const nextBtn = () => {
    if (code.join('').length < 4) {
      Alert.alert('Қате', '4 санды толық енгізіңіз');
      return;
    }
    onNext();
  };

  const resend = () => {
    setCode(['', '', '', '']);
    refs.current[0]?.focus();
    Alert.alert('Код', 'Код қайта жіберілді');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Подтвердить номер
        </Text>

        <Text style={styles.subtitle}>
          Мы только что отправили код на
          {'\n'}
          {phone}
        </Text>

        {/* 4 қорап */}
        <View style={styles.codeRow}>
          {code.map((digit, i) => (
            <TextInput
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              style={styles.codeBox}
              value={digit}
              onChangeText={(t) => changeDigit(t, i)}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        <Pressable style={styles.button} onPress={nextBtn}>
          <Text style={styles.buttonText}>Продолжить</Text>
        </Pressable>

        <Pressable onPress={resend}>
          <Text style={styles.resend}>Отправить код еще раз</Text>
        </Pressable>

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
  },

  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 29,
    marginBottom: 24,
  },

  codeBox: {
    width: 70,
    height: 62,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#1B1923',
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

  resend: {
    textAlign: 'center',
    fontSize: 16,
    color: '#AAA9B2',
    marginTop: 24,
  },
});
