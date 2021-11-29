/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef, useReducer} from 'react';
import {useDispatch} from 'react-redux';
import {createBox, createText} from '@shopify/restyle';
import authConstants from '../../../Redux/AuthConstants';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  getVerificationCode,
  getVerifyCode,
  requestResendOtp,
} from '../../Services/Index';

import {Button, Header} from '../../ReusableComponents';
import CodeInput from 'react-native-confirmation-code-input';

import {fonts, palette, TypographyStyles} from '../../Theme/Index';
const Box = createBox();
const Text = createText();

export default ({navigation, route}) => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      errors: '',
      otp: '',
      postData: {},
      screenError: '',
      from: '',
    },
  );

  /**
   * @function useEffect
   * @description it will check the routes and set in the state named from and postData.
   */

  useEffect(() => {
    if (route && route.params) {
      if (route.params.from) {
        setState({from: route.params.from});
      }
      if (route.params.postData) {
        setState({postData: route.params.postData});
      }
    }
  }, []);

  /**
   * @function checkCode
   * @description it will use to Check the user state is forgot then it will nevigate to resetpassword screen other wise will naviagte to auth success screen .
   * @note It will use later with exact flow still it cannot be use.
   */
  const checkCode = code => {
    if (state.from === 'forgot') {
      verifyForgot(code);
    } else {
      verify(code);
    }
  };
  const verifyForgot = code => {
    const data = {
      otp: code,
      otpType: 'FORGOT',
    };
    getVerifyCode(data)
      .then(response => {
        // const {data} =response
        // const {token} = data
        // dispatch({
        //   type: authConstants.TOKEN,
        //   token: token,
        // });
        navigation.navigate('ResetPassword', {otp: code});
      })
      .catch(error => {
        const {data} = error;
        const {errorMessage} = data;
        dispatch({
          type: authConstants.TOAST,
          toast: {
            title: errorMessage,
            loading: true,
            status: 'error',
          },
        });
      });
  };

  const verify = code => {
    const TypeOTP =
      state.from === 'login'
        ? 'SIGNUP'
        : state.from === 'profile'
        ? 'SIGNUP'
        : 'SIGNUP';
    const data = {
      otp: code,
      otpType: TypeOTP,
    };
    getVerificationCode(data)
      .then(response => {
        const {data} = response;
        const {token} = data;
        dispatch({
          type: authConstants.TOKEN,
          token: token,
        });
        navigation.navigate('AuthSuccess', {from: state.from, data: data});
      })
      .catch(error => {
        const {data} = error;
        const {errorMessage} = data;
        dispatch({
          type: authConstants.TOAST,
          toast: {
            title: errorMessage,
            loading: true,
            status: 'error',
          },
        });
      });
  };
  const resendOtp = code => {
    const TypeOTP =
      state.from === 'forgot'
        ? 'FORGOT'
        : state.from === 'user_verification'
        ? 'UPDATE'
        : 'SIGNUP';

    const data = {
      otpType: TypeOTP,
    };
    requestResendOtp(data)
      .then(response => {
        const {data} = response;
        const {message} = data;
        dispatch({
          type: authConstants.TOAST,
          toast: {
            title: message,
            loading: true,
            status: 'success',
          },
        });
      })
      .catch(error => {});
  };
  const {params} = route;
  const {phone} = params;

  return (
    <Box style={TypographyStyles.container}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={TypographyStyles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <Box flex={0.1}></Box>
          <Box mt="xxxl" justifyContent="center" alignItems="center">
            <Text variant="tertiary224regular">OTP Authentication</Text>
            <Text
              mt="l"
              variant="primary314Regular"
              textAlign="center"
              marginHorizontal="xxxl">
              An authentication code has been sent to
            </Text>
            <Text
              variant="primary314Regular"
              textAlign="center"
              marginHorizontal="xxxl">
              (+84) 999 999 999
            </Text>
          </Box>
          <Box mt="xxxl" justifyContent="center" alignItems="center">
            <CodeInput
              ref={inputEl}
              codeInputStyle={styles.box}
              activeColor={palette.primary}
              inactiveColor={
                state.screenError === '' ? palette.primary : palette.primary1
              }
              keyboardType="number-pad"
              selectionColor="black"
              containerStyle={styles.inputContainer}
              value={`${state.otp}`}
              codeLength={4}
              className={'border-b'}
              space={15}
              size={60}
              inputPosition="left"
              onFulfill={code => {
                verify(code);
              }}
            />
          </Box>
          <Box flex={1} justifyContent="flex-end" alignItems="center">
            <Box flexDirection="row">
              <Text mb="l" variant="support1115regular">
                I didn’t receive code!{' '}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AuthSuccess');
                }}>
                <Text variant="support415regular">Resend</Text>
              </TouchableOpacity>
            </Box>
            <Box height={43}>
              <Button
                label="Verify"
                onPress={() => {
                  verify();
                }}
              />
            </Box>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(null);
              }}
              style={styles.changeNumber}>
              <Text mt="xl" variant="support416regular">
                Change Your number
              </Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    borderBottomWidth: 2,
    color: palette.support8,
    fontFamily: fonts.regular,
    fontSize: 20,
    backgroundColor: palette.primary4,
  },
  center: {
    alignSelf: 'center',
  },
  mainImage: {
    alignSelf: 'center',
    marginTop: 40,
  },
  titleText: {
    alignSelf: 'center',
    marginTop: 30,
  },
  subTitle: {
    alignSelf: 'center',
    marginTop: 20,
  },
  subTitleOne: {
    alignSelf: 'center',
    marginTop: 5,
  },
  margin30: {
    marginTop: 30,
  },
  card: {
    marginHorizontal: 30,
    justifyContent: 'center',
    flex: 1,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
  },
  paddingleft50: {
    left: 50,
  },
  leftImage: {
    alignSelf: 'center',
    marginRight: 3,
  },
  sideNumber: {
    width: 0.5,
    backgroundColor: '#979DA3',
    marginLeft: 5,
  },
  margin15: {marginTop: 15},
  flexEnd: {alignSelf: 'flex-end'},
  bottomButton: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
  },
  bottomtext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signuptext: {
    textAlign: 'center',
    lineHeight: 30,
  },
  headerLeft: {
    marginLeft: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  changeNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginLeft: 20,
  },
});
