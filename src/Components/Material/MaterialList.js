import React, {useReducer} from 'react';
import {Image, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {createText, createBox} from '@shopify/restyle';
import {fonts, palette} from '../Theme/Index';
import {Button, Header, Search} from '../ReusableComponents';
const Check = require('../../assets/check/selected-icon.png');
const Text = createText();
const Box = createBox();
export default ({navigation, route, item, index}) => {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      count: 0,
      checked: false,
    },
  );

  /**
   * @function checkedIcon
   * @description it will check and uncheck the Image Icon.
   */

  const checkedIcon = () => {
    setState({checked: !state.checked});
  };

  /**
   * @function decreseSteps
   * @description it will decrese the count and update the count state .
   */

  const decreseSteps = () => {
    setState({count: state.count - 1});
  };

  /**
   * @function increseSteps
   * @description it will increase the count and update the count state .
   */
  const increseSteps = () => {
    setState({count: state.count + 1});
  };
  return (
    <Box
      alignItems="center"
      borderWidth={state.checked ? 1 : 0}
      borderColor="primary"
      borderRadius={12}
      flexDirection="row"
      height={state.checked ? 76 : 50}
      marginHorizontal="l"
      marginVertical="s"
      backgroundColor="support7">
      <TouchableOpacity onPress={() => checkedIcon()}>
        <Image
          source={state.checked && Check}
          style={[
            styles.image,
            {
              backgroundColor: state.checked
                ? palette.support7
                : palette.support14,
            },
          ]}
        />
      </TouchableOpacity>
      <Box ml="l" style={{marginTop: state.checked ? 0 : 25}}>
        <Text variant="support1514medium">{item.text}</Text>
        <Text pt="m" variant="primary14meduim">
          {state.checked && `RM ${item.RM}`}
        </Text>
      </Box>
      {state.checked && (
        <Box
          position="absolute"
          right={0}
          borderRadius={10}
          flexDirection="row"
          mr="m"
          alignItems="center"
          justifyContent="center"
          height={30}
          backgroundColor="primary2">
          <TouchableOpacity
            onPress={() => {
              state.count > 0 && decreseSteps();
            }}>
            <Text paddingHorizontal="m" variant="primary20bold">
              {'-'}
            </Text>
          </TouchableOpacity>
          <Text paddingHorizontal="s" variant="primary14meduim">
            {state.count}
          </Text>
          <TouchableOpacity onPress={() => increseSteps()}>
            <Text paddingHorizontal="m" variant="primary20bold">
              {'+'}
            </Text>
          </TouchableOpacity>
        </Box>
      )}
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
  image: {height: 30, width: 30, borderRadius: 15, marginLeft: 10},
});
