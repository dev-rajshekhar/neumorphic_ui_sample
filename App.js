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
import CalculatorUi from './screens/CalculatorUi';

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <CalculatorUi />
      </View>
    </>
  );
};

export default App;
