/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';

const App = () => {
  const [colorRed, setColorRed] = useState(160);
  const [colorGreen, setColorGreen] = useState(160);
  const [colorBlue, setColorBlue] = useState(160);
  const [color, setColor] = useState(160);
  const [shadowRadius, setShadowRadius] = useState(10);
  const [borderRadius, setBorderRadius] = useState(20);

  const colorStr = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  shadowStyle: {
    shadowOpacity: 1,
    backgroundColor: '#ECF0F3',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neomorphStyle: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
