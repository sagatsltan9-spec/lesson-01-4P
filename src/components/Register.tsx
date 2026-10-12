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
  onNext: (name: string, phone: string) => void;
};

export default function Register({ onBack, onNext }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const registerBtn = () => {
    if (!name || !phone || !password) {
      Alert.alert('Қате', 'Барлық өрісті толтырыңыз');
      return;
    }
    if (!agree) {
      Alert.alert('Қате', 'Шарттармен келісіңіз');
      return;
    }
    onNext(name, phone);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        {/* Артқа батырмасы */}
        <Pressable
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        {/* Тақырып */}
        <Text style={styles.title}>
          Регистрация
        </Text>

        {/* Түсіндірме */}
        <Text style={styles.subtitle}>
          Создайте учетную запись,
          {'\n'}
          чтобы продолжить!
        </Text>

        {/* Аты */}
        <View style={[styles.inputContainer, { marginTop: 29 }]}>
          <Text style={styles.inputIconText}>👤</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ваше имя"
            placeholderTextColor="#AAA9B2"
          />
        </View>

        {/* Телефон */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>📞</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>

        {/* Пароль */}
        <View style={styles.inputContainer}>
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

        {/* Келісім */}
        <Pressable
          style={styles.agreeRow}
          onPress={() => setAgree(!agree)}
        >
          <View style={[styles.checkbox, agree && styles.checkboxOn]}>
            {agree && <Text style={styles.check}>✓</Text>}
          </View>
          <Text style={styles.agreeText}>
            Создавая учетную запись, вы соглашаетесь с нашими{' '}
            <Text style={styles.link}>Условиями использования.</Text>
          </Text>
        </Pressable>

        {/* Зарегистрироваться */}
        <Pressable
          style={styles.button}
          onPress={registerBtn}
        >
          <Text style={styles.buttonText}>
            Зарегистрироваться
          </Text>
        </Pressable>

        {/* Аккаунт бар */}
        <Text style={styles.bottomText}>
          Уже есть аккаунт?{' '}
          <Text style={styles.link} onPress={onBack}>
            Войти
          </Text>
        </Text>

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
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 45,
  },

  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 8,
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

  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#AAA9B2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  checkboxOn: {
    backgroundColor: '#A811DA',
    borderColor: '#A811DA',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  agreeText: {
    flex: 1,
    fontSize: 13,
    color: '#1B1923',
  },

  link: {
    color: '#A811DA',
    fontWeight: '500',
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

  bottomText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#AAA9B2',
    marginTop: 24,
  },
});
