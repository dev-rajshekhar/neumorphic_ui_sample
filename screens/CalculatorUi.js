import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
import ButtonControll from './ButtonControll';

const CalculatorUi = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 5}}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 5,
            justifyContent: 'flex-start',
          }}>
          <Neomorph
            inner={true}
            swapShadows={true}
            style={{
              marginVertical: 10,
              padding: 10,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              shadowRadius: Platform.OS === 'ios' ? 0 : 0,
              borderRadius: Platform.OS === 'ios' ? 0 : 0,
              marginHorizontal: 15,
              backgroundColor: 'white',
              width: windowWidth - 30,
              height: 180,
            }}>
            <Text style={{fontSize: 32}}>123 + 25</Text>
          </Neomorph>
          <ButtonControll />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  neumorphStyle: {
    shadowRadius: 20,
    borderRadius: 35,
    backgroundColor: 'white',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
});
export default CalculatorUi;
