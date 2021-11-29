import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createText} from '@shopify/restyle';

const Text = createText();

export default ({navigation, route, item, index}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.screenName)}
      style={[styles.jobCategory, {backgroundColor: item.color}]}>
      <Image source={item.Image} />
      <Text pt="l" variant="support717regular">
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobCategory: {
    flex: 0.5,
    height: 146,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 5,
  },
  checkImage: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 5,
    right: 5,
    height: 24,
    width: 25,
  },
});
