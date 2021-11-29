import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Button} from '../ReusableComponents';
import {palette} from '../Theme/Index';
const Text = createText();
const Box = createBox();
const Location = require('../../assets/location/location.png');
export default ({navigation, index, button}) => {
  const [selected, setSelected] = useState('');

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SingleJobDetail', {button: button})}
      style={styles.matchingjobs}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal="l">
        <Text pt="l" variant="support818medium">
          {'Lighting'}
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
        <Text variant="support1314regular">{'Lighting Extension'}</Text>
      </Box>
      <Box
        flex={1}
        ml="l"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text variant="support1314regular">{'Target date:30-06-2021'}</Text>
        {button === 'third' ? (
          <>
            <Button
              buttonStyle={styles.acceptButton}
              textStyle={styles.text}
              label={'Accept'}
            />
            <Text pr="l" variant="primary112regular">
              {'reject'}
            </Text>
          </>
        ) : (
          <Button
            buttonStyle={styles.button}
            textStyle={styles.text}
            label={button === 'second' ? 'Cancel' : 'Apply Job'}
          />
        )}
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
  acceptButton: {height: 31, width: 110},
  text: {fontSize: 12},
});
