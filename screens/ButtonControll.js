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
const ButtonControll = () => {
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
              console.log('000');
            }}>
            <Text style={styles.textStyle}>AC</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>.</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity onPress={() => {}} onPress={() => {}}>
            <Text style={styles.textStyle}>%</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity onPress={() => {}}>
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
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>7</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>8</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
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
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>4</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>5</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>6</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph
          style={{
            ...styles.neumorphStyle,
            backgroundColor: '#fa9702',
          }}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
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
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>1</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>2</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={styles.neumorphStyle}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>3</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
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
            width: Platform.OS === 'ios' ? 180 : 160,
            height: Platform.OS === 'ios' ? 70 : 60,
          }}>
          <TouchableOpacity
            style={{
              ...styles.buttonParent,
              width: Platform.OS === 'ios' ? 180 : 160,
              height: Platform.OS === 'ios' ? 70 : 60,
            }}
            onPress={() => {}}>
            <Text style={styles.textStyle}>0</Text>
          </TouchableOpacity>
        </Neomorph>

        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
            <Text style={styles.textStyle}>,</Text>
          </TouchableOpacity>
        </Neomorph>
        <Neomorph style={{...styles.neumorphStyle, backgroundColor: '#fa9702'}}>
          <TouchableOpacity style={styles.buttonParent} onPress={() => {}}>
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
