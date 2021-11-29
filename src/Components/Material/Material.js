import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {createText, createBox} from '@shopify/restyle';
import {fonts, palette} from '../Theme/Index';
import {Button, Header, Search} from '../ReusableComponents';
import MaterialList from './MaterialList';

const SearchIcon = require('../../assets/Search/search.png');

const Text = createText();
const Box = createBox();
export default ({navigation, route, item, index}) => {
  return (
    <Box flex={1} backgroundColor="support14">
      <Header backgroundColor="support14" title="Select Material" />
      <Box marginVertical="s" height={50}>
        <Search title="Selected Material" />
      </Box>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
        data={[
          {Key: 1, text: 'LED Ceiling light', RM: '50'},
          {Key: 2, text: 'Reflection Ceiling light', RM: '100'},
          {Key: 3, text: 'Track light', RM: '30'},
          {Key: 4, text: 'Warm light', RM: '40'},
          {Key: 5, text: 'Reflection Ceiling light', RM: '100'},
          {Key: 6, text: 'Warm light', RM: '40'},
        ]}
        renderItem={({item, index}) => {
          return <MaterialList index={index} item={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </Box>
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
  flatlistContainer: {flexGrow: 1, overflow: 'scroll'},
});
