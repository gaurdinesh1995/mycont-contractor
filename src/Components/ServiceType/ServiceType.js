import React, {useState, useReducer} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createText} from '@shopify/restyle';
import {fonts, palette} from '../Theme/Index';
const Check = require('../../assets/check/Check.png');
const Text = createText();

export default ({navigation, route, item, index}) => {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      selected: '',
    },
  );
  return (
    <TouchableOpacity
      onPress={() => setState({selected: item.key})}
      style={[
        styles.jobCategory,
        {
          backgroundColor:
            state.selected == item.key ? palette.primary : palette.support14,
        },
      ]}>
      <Text
        style={{
          color:
            state.selected == item.key ? palette.support7 : palette.support8,
        }}
        variant="support814regular">
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobCategory: {
    flex: 0.33,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 5,
  },
});
