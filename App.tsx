import React, { useState } from 'react';

import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar as RNStatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import ForgetPassword from './src/components/ForgetPassword';
import Register from './src/components/Register';
import ConfirmNumber from './src/components/ConfirmNumber';
import ResetPassword from './src/components/ResetPassword';
import ChooseCity from './src/components/ChooseCity';
import Home from './src/components/Home';
import Profile from './src/components/Profile';
import Settings from './src/components/Settings';


function Main() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState('login');
  const [name, setName] = useState('Пользователь');
  const [city, setCity] = useState('Алматы');


  const forgetPassword = () => {
    setPage('forget');
  };

  const handleBack = () => {
    console.log('login');
    setPage('login');
  };

  const loginBtn = () => {
    console.log('Войти кнопкасы басылды!');
    setPage('home');
  };

  const registerBtn = () => {
    console.log('register');
    setPage('register');
  };


  if (page ==='forget'){
    return (
      <ForgetPassword
        onBack={handleBack}
        onNext={(p) => {
          setPhone(p);
          setPage('confirm');
        }}
      />
    );

  }

  if (page === 'confirm') {
    return (
      <ConfirmNumber
        phone={phone}
        onBack={() => setPage('forget')}
        onNext={() => setPage('reset')}
      />
    );
  }

  if (page === 'reset') {
    return (
      <ResetPassword
        onBack={() => setPage('confirm')}
        onDone={handleBack}
      />
    );
  }

  if (page === 'register') {
    return (
      <Register
        onBack={handleBack}
        onNext={(n, p) => {
          setName(n);
          setPhone(p);
          setPage('city');
        }}
      />
    );
  }

  if (page === 'city') {
    return (
      <ChooseCity
        onBack={() => setPage('register')}
        onNext={(c) => {
          setCity(c);
          setPage('home');
        }}
      />
    );
  }

  if (page === 'home') {
    return <Home name={name} city={city} onTab={setPage} />;
  }

  if (page === 'profile') {
    return (
      <Profile
        name={name}
        phone={phone}
        city={city}
        onTab={setPage}
        onLogout={handleBack}
      />
    );
  }

  if (page === 'settings') {
    return <Settings onTab={setPage} />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        {/* Артқа батырмасы */}
        <Pressable
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        {/* Тақырып */}
        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

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

        {/* Забыли пароль */}
        <Pressable onPress={forgetPassword}>
          <Text style={styles.forgetBtn}>
            Забыли пароль?
          </Text>
        </Pressable>

        {/* Войти */}
        <Pressable
          onPress={loginBtn}
          style={styles.logBtn}
        >
          <Text style={styles.logBtn_text}>
            Войти
          </Text>
        </Pressable>

        {/* Регистрация */}
        <Text style={styles.noAccount}>
          У вас нет аккаунта?
        </Text>

        <Pressable onPress={registerBtn}>
          <Text style={styles.registerText}>
            Зарегистрироваться
          </Text>
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
    backgroundColor: '#FFFFFF',
  },

  // Артқа батырмасы
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
    fontWeight: '300',
  },

  // Тақырып
  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 3,
    marginBottom: 29,
  },

  // Телефон және пароль
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

  // Забыли пароль
  forgetBtn: {
    fontSize: 18,
    color: '#A811DA',
    textAlign: 'right',
    marginTop: 0,
    marginBottom: 26,
  },

  // Войти батырмасы
  logBtn: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
    marginBottom: 0,
  },

  logBtn_text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // Аккаунт жоқ
  noAccount: {
    textAlign: 'center',
    fontSize: 18,
    color: '#AAA9B2',
    marginTop: 35,
  },

  // Регистрация
  registerText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#A811DA',
    fontWeight: '500',
    marginTop: 6,
  },
});

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
      }}
    >
      <Main />
    </View>
  );
}
