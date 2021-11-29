import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createText} from '@shopify/restyle';
import {fonts, palette} from '../Theme/Index';
const Check = require('../../assets/check/Check.png');

const Text = createText();

export default ({navigation, route, item, index}) => {
  return (
    <TouchableOpacity style={[styles.jobCategory]}>
      <Text paddingHorizontal="l" p="m" variant="primary15medium">
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobCategory: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: palette.primary,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
  },
  checkImage: {
    resizeMode: 'contain',
  },
});
