import React, {useState, useReducer} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {palette} from '../Theme/Index';
import Modal from 'react-native-modal';
const Text = createText();
const Box = createBox();
const Location = require('../../assets/location/location.png');
export default ({navigation, index, item, toogleModal}) => {
  const [selected, setSelected] = useState('');

  return (
    <TouchableOpacity
      onPress={() => setSelected(selected ? '' : index)}
      style={styles.matchingjobs}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal="l">
        <Text pt="l" variant="support818medium">
          {item.text}
        </Text>
        <Text pt="l" variant="primary18medium">
          {'RM 120'}
        </Text>
      </Box>
      <Box mt="s" marginHorizontal="l" flexDirection="row" alignItems="center">
        <Image source={Location} style={styles.image} />
        <Text pl="s" variant="support1112regular">
          {'Alexa tower, 2nd floor,New York'}
        </Text>
      </Box>
      <Box mt="s" marginHorizontal="l">
        <Text variant="support1314regular">{item.extension}</Text>
      </Box>
      <Box
        flex={1}
        ml="l"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <TouchableOpacity onPress={() => toogleModal(true)}>
          <Text color="primary1" variant="support1314regular">
            {'Assign'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('JobDetailStatus', {item: item})}
          style={[styles.statusItem, {backgroundColor: item.background}]}>
          <Text style={{color: item.color}} variant="support811regular">
            {item.status}
          </Text>
        </TouchableOpacity>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  matchingjobs: {
    flex: 1,
    height: 146,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 5,
    alignSelf: 'center',
  },
  checkImage: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 5,
    right: 5,
    height: 24,
    width: 25,
  },
  image: {
    tintColor: palette.primary,
    height: 11.3,
    width: 7.9,
  },
  button: {
    height: 31,
    width: 140,
  },
  statusItem: {
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 10,
    height: 25,
    width: 70,
  },
});
