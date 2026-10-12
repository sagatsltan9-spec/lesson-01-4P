import React, { useState } from 'react';

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
  onBack: () => void;
  onDone: () => void;
};

export default function ResetPassword({ onBack, onDone }: Props) {
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  const nextBtn = () => {
    const strong =
      password.length >= 8 &&
      /[a-zа-я]/.test(password) &&
      /[A-ZА-Я]/.test(password);

    if (!strong) {
      Alert.alert('Қате', 'Кемінде 8 таңба, бас және кіші әріптер болу керек');
      return;
    }
    if (password !== repeat) {
      Alert.alert('Қате', 'Құпиясөздер сәйкес емес');
      return;
    }
    Alert.alert('Дайын', 'Құпиясөз сәтті өзгертілді', [
      { text: 'OK', onPress: onDone },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Сбросить пароль
        </Text>

        <Text style={styles.subtitle}>
          Не менее 8 символов, с прописными и строчными буквами
        </Text>

        {/* Пароль */}
        <View style={[styles.inputContainer, { marginTop: 29 }]}>
          <Text style={styles.inputIconText}>🔒</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            placeholderTextColor="#AAA9B2"
            secureTextEntry={true}
          />
        </View>

        {/* Повторить пароль */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>🔒</Text>
          <TextInput
            style={styles.input}
            value={repeat}
            onChangeText={setRepeat}
            placeholder="Повторить пароль"
            placeholderTextColor="#AAA9B2"
            secureTextEntry={true}
          />
        </View>

        <Pressable style={styles.button} onPress={nextBtn}>
          <Text style={styles.buttonText}>Продолжить</Text>
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

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 18,
  },

  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
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
