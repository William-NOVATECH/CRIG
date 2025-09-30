import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('...')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text style={{ fontWeight: 'bold' }}>CRIG</Text>
          </Text>
          <Text style={styles.subtitle}>
            Conoce, avanza y crece con nuestra aplicación diseñada totalmente para ti, ¿Qué esperas? .
          </Text>
          <View style={styles.dotsContainer}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  textContainer: {
    padding: 30,
    backgroundColor: '#fff',  
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    boxShadowColor: '#000',
    boxShadowOffset: { width: 0, height: -5 },
    boxShadowOpacity: 0.1,
    boxShadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    color: '#6857E8',  
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#6857E8',  
    width: 20,
  },
  button: {
    backgroundColor: '#6857E8',  
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
