import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createText} from '@shopify/restyle';
import {fonts, palette} from '../Theme/Index';
const Check = require('../../assets/check/Check.png');

const Text = createText();

export default ({navigation, route, item, index}) => {
  return (
    <TouchableOpacity style={styles.jobCategory}>
      <Text p="m" variant="primary13medium">
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobCategory: {
    flex: 0.5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: palette.primary,
    borderWidth: 1,
    backgroundColor: palette.primary2,
    borderRadius: 12,
    flexDirection: 'row',
  },
  checkImage: {
    resizeMode: 'contain',
  },
});
