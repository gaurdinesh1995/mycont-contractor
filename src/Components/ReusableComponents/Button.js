import {createText} from '@shopify/restyle';
import React from 'react';
import SpinnerButton from 'react-native-spinner-button';
import {Dimensions, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {palette} from '../Theme/Index';
const Text = createText();
const {width} = Dimensions.get('window');

const Button = ({label, buttonStyle, textStyle, ...props}) => {
  const {loading} = useSelector(state => ({
    ...state.auth.user,
  }));

  return (
    <SpinnerButton
      spinnerColor={'white'}
      buttonStyle={[
        {
          backgroundColor: palette.primary1,
        },
        styles.button,buttonStyle
      ]}
      spinnerType="MaterialIndicator"
      isLoading={loading}
      {...props}
      indicatorCount={1}>
      <Text style={textStyle} variant="white16Medium">
        {label}
      </Text>
    </SpinnerButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: width,
    height: 44,
    marginHorizontal: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
