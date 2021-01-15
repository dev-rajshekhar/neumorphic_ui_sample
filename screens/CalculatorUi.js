import React, {useState, useCallback} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
import ButtonControll from './ButtonControll';

const CalculatorUi = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const NUM_OF_LINES = 2;
  const [numLine, setLines] = useState(3);
  const [initalValue, setValue] = useState('');

  const onTextLayout = useCallback(
    (e) => {
      console.log('=====Len', e.nativeEvent.lines.length);
      setLines(e.nativeEvent.lines.length);
    },
    [initalValue],
  );

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

                marginEnd: 30,
                paddingHorizontal: 10,
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                alignContent: 'flex-end',
              }}>
              <Text
                adjustsFontSizeToFit={true}
                onTextLayout={onTextLayout}
                numberOfLines={3}
                style={{
                  fontSize: 70,
                  textAlign: 'right',
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
