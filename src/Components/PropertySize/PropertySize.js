import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {palette} from '../Theme/Index';
const Check = require('../../assets/check/checkyellow.png');
const Text = createText();
const Box = createBox();

export default ({navigation, route, item, index}) => {
  const [selected, setSelected] = useState('');
  return (
    <Box style={[styles.jonDetails]}>
      <TouchableOpacity
        onPress={() => setSelected(selected ? '' : index)}
        style={[
          styles.propertSize,
          {
            borderWidth: selected ? 1 : 0.2,
            borderColor: selected && palette.primary1,
          },
        ]}>
        <Image source={selected && Check} />
      </TouchableOpacity>

      <Text p="m" variant="tertiary214regular">
        {item.text}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  jonDetails: {
    flex: 0.5,
    marginVertical: 5,
    marginHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  propertSize: {
    height: 28.4,
    width: 29,
    borderRadius: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
