import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
import {calculationHelper} from './calculation_helper';
const ButtonControll = ({sendDataToParent}) => {
  const [currentValue, setCurrentValue] = useState('');
  const [previous, setPrevious] = useState('');
  const [operator, setOperator] = useState('');

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

  const handleOperation = (value) => {
    var clickedOperator = value;
    var previousValue = currentValue;
    var currentData = '';

    setPrevious(currentValue);
    setCurrentValue(0);
    // if (value === '+') {
    //   var addition = previous + currentValue;
    // }
    var str = `${previousValue}${clickedOperator}${currentData}`;
    console.log('====', previous);
    console.log('====', clickedOperator);
    sendDataToParent(str);
    console.log('====>>', str);
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('clear');
            }}>
            <Text style={styles.textStyle}>AC</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('decimal');
            }}>
            <Text style={styles.textStyle}>.</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity
            onPress={() => {}}
            onPress={() => {
              handleOnClick('percentage');
            }}>
            <Text style={styles.textStyle}>%</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity
            onPress={() => {
              handleOnClick('operation', '/');
            }}>
            <Text style={styles.textStyle}>/</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>

      <View
        style={{
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 7);
            }}>
            <Text style={styles.textStyle}>7</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 8);
            }}>
            <Text style={styles.textStyle}>8</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 9);
            }}>
            <Text style={styles.textStyle}>9</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <Text style={styles.textStyle}>*</Text>
        </Neomorph>
      </View>
      <View
        style={{
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 4);
            }}>
            <Text style={styles.textStyle}>4</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 5);
            }}>
            <Text style={styles.textStyle}>5</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 6);
            }}>
            <Text style={styles.textStyle}>6</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph
          style={{
            ...styles.neumorphStyle,
            backgroundColor: '#fa9702',
          }}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('operation', '-');
            }}>
            <Text style={styles.textStyle}>-</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>

      <View
        style={{
          marginVertical: 10,

          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 1);
            }}>
            <Text style={styles.textStyle}>1</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 2);
            }}>
            <Text style={styles.textStyle}>2</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('number', 3);
            }}>
            <Text style={styles.textStyle}>3</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('operation', '+');
            }}>
            <Text style={styles.textStyle}>+</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>

      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Neomorph
          style={{
            ...styles.neumorphStyle,
            width: Platform.OS === 'ios' ? 180 : 180,
            height: Platform.OS === 'ios' ? 70 : 60,
          }}>
          <TouchableOpacity
            style={{
              ...styles.buttonParent,
              width: Platform.OS === 'ios' ? 180 : 180,
              height: Platform.OS === 'ios' ? 70 : 60,
            }}
            onPress={() => {
              handleOnClick('number', 0);
            }}>
            <Text style={styles.textStyle}>0</Text>
          </TouchableOpacity>
        </Neomorph>

        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('delete');
            }}>
            <Text style={styles.textStyle}>Del</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity
            style={styles.buttonParent}
            onPress={() => {
              handleOnClick('equal', '=');
            }}>
            <Text style={styles.textStyle}>=</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  neumorphStyle: {
    shadowRadius: Platform.OS === 'ios' ? 20 : 18,
    borderRadius: Platform.OS === 'ios' ? 35 : 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? 70 : 60,
    width: Platform.OS === 'ios' ? 70 : 60,
  },
  textStyle: {
    fontSize: 18,
  },

  buttonParent: {
    height: Platform.OS === 'ios' ? 70 : 60,
    width: Platform.OS === 'ios' ? 70 : 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ButtonControll;
