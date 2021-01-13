import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
import ButtonControll from './ButtonControll';

const CalculatorUi = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [initalValue, setValue] = useState('');

  const sendDataToParent = (index) => {
    // the callback. Use a better name
    setValue(index);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#F8FBFF', flex: 1}}>
      <View style={{backgroundColor: '#F8FBFF', flex: 5}}>
        <View
          style={{
            flex: 5,
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 4.5,
              marginBottom: 10,
            }}>
            <View
              style={{
                marginVertical: 10,
                padding: 10,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginHorizontal: 15,
                width: windowWidth - 10,
                flexWrap: 'wrap',
              }}>
              <Text
                style={{
                  fontSize: 50,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                {initalValue}
              </Text>
            </View>
            <ButtonControll sendDataToParent={sendDataToParent} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  neumorphStyle: {
    shadowRadius: 20,
    borderRadius: 35,
    backgroundColor: '#F7FAFF',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
});
export default CalculatorUi;
