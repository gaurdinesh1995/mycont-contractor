import React, {useState, useEffect, useReducer, useRef} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';
import {createBox, createText} from '@shopify/restyle';
import {Button} from '../../ReusableComponents';
import {palette, size} from '../../Theme/Index';
const Box = createBox();
const Text = createText();

export default ({navigation, route}) => {
  const progress = useRef(new Animated.Value(0));
  const lottie = useRef(null);
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      phoneNumber: '',
      password: '',
      errors: [],
      secure: true,
    },
  );

  useEffect(() => {
    Animated.loop(
      Animated.delay(2000),
      Animated.timing(progress.current, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="primary">
      <Box
        borderRadius={20}
        alignItems="center"
        backgroundColor="white"
        width={size.width - 40}
        height={size.height / 2}>
        <LottieView
          progress={progress.current}
          ref={lottie}
          style={styles.lottie}
          source={require('../../../assets/checkmarkAnimation/checkmarkAnimation.json')}
          autoPlay
          loop
        />
        <Text variant="tertiary225regular">Verified</Text>
        <Text
          pb="l"
          variant="tertiary225regular"
          textAlign="center"
          marginHorizontal={'xxl'}>
          You have successfully verified the account.
        </Text>
        <Box height={43} marginHorizontal="xxxl" mt="xxxl">
          <Button
            onPress={() => {
              navigation.goBack(null);
            }}
            label="Go To Dashbord"
            buttonStyle={styles.buttonStyle}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  lottie: {height: 250, width: 250},
  buttonStyle: {
    height: 44,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: palette.primary1,
    width: size.width - 80,
    marginHorizontal: 20,
  },
  text: {fontSize: 16, color: palette.tertiary2},
  eye: {height: 30, width: 30},
});
