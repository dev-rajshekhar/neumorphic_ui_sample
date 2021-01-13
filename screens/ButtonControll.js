import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Neomorph, NeomorphBlur, Shadow} from 'react-native-neomorph-shadows';
import {calculationHelper} from './calculation_helper';
const ButtonControll = ({sendDataToParent}) => {
  const [currentValue, setCurrentValue] = useState('');
  const [previous, setPrevious] = useState('');
  const [operator, setOperator] = useState('');

  const NeumorphView = ({style, type, value}) => {
    return (
      <Neomorph
        darkShadowColor="#CCEBFF" // <- set this
        lightShadowColor="#CCEBFF"
        swapShadows={true}
        style={
          type === 'number'
            ? style
            : type === 'equal'
            ? {...style, backgroundColor: '#279CF7'}
            : {...style, backgroundColor: '#F8FBFF'}
        }>
        <TouchableOpacity
          style={styles.buttonParent}
          onPress={() => {
            handleOnClick(type, value);
          }}>
          <Text
            style={
              type === 'number'
                ? styles.textStyle
                : type === 'equal'
                ? {...styles.textStyle, color: 'white'}
                : styles.textStyleOperator
            }>
            {value}
          </Text>
        </TouchableOpacity>
      </Neomorph>
    );
  };

  const handleOnClick = (type, value) => {
    switch (type) {
      case 'clear':
        setPrevious('');
        setCurrentValue('');
        setOperator('');
        sendDataToParent('');
        break;
      case 'delete':
        if (currentValue.length > 0) {
          var modifiedString = currentValue.slice(0, -1);
          sendDataToParent(modifiedString);
          setCurrentValue(modifiedString);
        }
        break;
      case 'number':
        handleNumber(value);
        break;

      case 'operation':
        handleNumber(value);

        break;
    }
  };

  const handleNumber = (value) => {
    if (currentValue != '') {
      var str = `${currentValue}${value}`;
      setCurrentValue(str);
      sendDataToParent(str);
    } else if (currentValue === 0) {
      setCurrentValue(value);
      sendDataToParent(value);
    } else {
      setCurrentValue(value);
      sendDataToParent(value);
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#F8FBFF',
      }}>
      <View
        style={{
          marginVertical: 5,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <NeumorphView type="clear" value="AC" style={styles.neumorphStyle} />
        <NeumorphView type="decimal" value="." style={styles.neumorphStyle} />
        <NeumorphView
          type="percentage"
          value="%"
          style={styles.neumorphStyle}
        />
        <NeumorphView
          type="operator"
          value="/"
          style={{...styles.neumorphStyle, backgroundColor: '#279CF7'}}
        />
      </View>

      <View
        style={{
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <NeumorphView type="number" value="7" style={styles.neumorphStyle} />
        <NeumorphView type="number" value="8" style={styles.neumorphStyle} />
        <NeumorphView type="number" value="9" style={styles.neumorphStyle} />
        <NeumorphView type="operator" value="X" style={styles.neumorphStyle} />
      </View>
      <View
        style={{
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <NeumorphView type="number" value="4" style={styles.neumorphStyle} />
        <NeumorphView type="number" value="5" style={styles.neumorphStyle} />
        <NeumorphView type="number" value="6" style={styles.neumorphStyle} />
        <NeumorphView type="operator" value="+" style={styles.neumorphStyle} />
      </View>

      <View
        style={{
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <NeumorphView type="number" value="1" style={styles.neumorphStyle} />
        <NeumorphView type="number" value="2" style={styles.neumorphStyle} />
        <NeumorphView type="number" value="3" style={styles.neumorphStyle} />
        <NeumorphView type="operator" value="-" style={styles.neumorphStyle} />
      </View>

      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <NeumorphView type="number" value="0" style={styles.neumorphStyle} />
        <NeumorphView type="delete" value="Del" style={styles.neumorphStyle} />
        <NeumorphView
          type="equal"
          value="="
          style={{
            ...styles.neumorphStyle,
            width: Platform.OS === 'ios' ? 177 : 170,
            height: Platform.OS === 'ios' ? 75 : 65,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  neumorphStyle: {
    shadowRadius: Platform.OS === 'ios' ? 6 : 5,
    borderRadius: Platform.OS === 'ios' ? 10 : 8,
    backgroundColor: '#F8FBFF',
    alignItems: 'center',
    shadowOffset: {width: -4, height: -5},
    justifyContent: 'center',
    shadowOpacity: 0.6,
    height: Platform.OS === 'ios' ? 75 : 65,
    width: Platform.OS === 'ios' ? 75 : 65,
    elevation: 5,
  },
  textStyle: {
    fontSize: 24,
  },

  textStyleOperator: {
    fontSize: 20,
    color: '#279CF7',
  },
  buttonParent: {
    height: Platform.OS === 'ios' ? 70 : 60,
    width: Platform.OS === 'ios' ? 70 : 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ButtonControll;
