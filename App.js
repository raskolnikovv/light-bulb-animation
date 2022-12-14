import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

import LightAnimation from './src/LightAnimation';

const App = () => {
  const [fontsLoaded] = useFonts({
    Albiona: require('./assets/font/Albiona.otf'),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={{ flex: 1 }}>
      <LightAnimation />
    </View>
  );
};

export default App;