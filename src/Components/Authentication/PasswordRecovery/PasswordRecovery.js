/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useReducer, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Button, Input, Header} from '../../ReusableComponents';
import {palette, size, TypographyStyles} from '../../Theme/Index';
import {requestResetPassword} from '../../Services/AuthService';
const password = require('../../../assets/PasswordRecovery/PasswordRecovery.png');
const Box = createBox();
const Text = createText();
const phone = require('../../../assets/InputIcons/phone.png');
const Cross = require('../../../assets/Cross/Close-icon.png');
import {setAuthToken} from '../../Helpers/Index';
import {requestForgetPassword} from '../../Services/Index';

import authConstants from '../../../Redux/AuthConstants';
export default ({navigation, route}) => {
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      phoneNumber: '',
      errors: [],
    },
  );

  /**
   * @function validateFields
   * @returns array of errors.
   * @description it will validate phonenumber and password.
   */
  const validateFields = () => {
    const emptyFields = [];

    if (state.phoneNumber.trim().length === 0) {
      const obj = {
        name: 'phoneNumber',
        valid: false,
        message: 'Phone Number is required.',
      };
      emptyFields.push(obj);
    }

    if (emptyFields.length) {
      return emptyFields;
    }

    return null;
  };

  /**
   * @function useEffect
   * @description it will check the phonenumber and password after onchange.
   */
  useEffect(() => {
    const error = validateFields();
    if (error !== null) {
      setState({errors: error});
    } else {
      setState({errors: []});
    }
  }, [state.phoneNumber]);

  /**
   * @function PasswordRecovery
   * @description it will check phone number and navigate to reset password.
   */
  const PasswordRecovery = () => {
    const error = validateFields();
    if (error !== null) {
      setState({errors: error});
    } else {
      setState({errors: []});
      const data = {
        mobile: state.phoneNumber,
      };
      requestForgetPassword(data)
        .then(response => {
          const {data} = response;
          const {token} = data;
          dispatch({
            type: authConstants.TOKEN,
            token: token,
          });
          navigation.navigate('Verify', {
            from: 'forgot',
            phone: state.phoneNumber,
          });
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
    }
  };
  /**
   * @function onChangeText
   * @param {*} key
   * @param {*} value
   * @description it will set state for its key
   */
  const onChangeText = (key, value) => {
    setState({[key]: value});
  };

  /**
   * @function forgotPassword
   * @description if user forgot password then it will use to fetch data from the API.
   */

  const forgotPassword = () => {
    const error = validateFields();
    if (error !== null) {
      setState({errors: error});
    } else {
      setState({errors: []});

      const data = {
        mobile: state.phoneNumber,
      };
      requestResetPassword(data)
        .then(response => {
          const {data} = response;
          const {token} = data;
          setAuthToken(token);
          PasswordRecovery();
        })
        .catch(error => {});
    }
  };

  const objName = element => element.name === 'phoneNumber';
  const phoneNumberIndex = state.errors.findIndex(objName);
  return (
    <Box style={TypographyStyles.container}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={TypographyStyles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <Box mt="xxxl" justifyContent="center" alignItems="center">
            <Text variant="primary25medium">Forgot Password</Text>
            <Text
              mt="l"
              variant="primary314Regular"
              textAlign="center"
              marginHorizontal="xxxl">
              Enter the Phone number associated with your account and we'll send
              you the code to reset your password{' '}
            </Text>
          </Box>
          <Box mt="xxxl" justifyContent="center" alignItems="center">
            <Input
              returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
              title="Phone Number"
              value={state.phoneNumber}
              showErrorField={
                phoneNumberIndex !== -1 && !state.errors[phoneNumberIndex].valid
              }
              errorText={
                phoneNumberIndex !== -1 &&
                state.errors[phoneNumberIndex].message
              }
              left={() => {
                return <Image style={styles.eye} source={phone} />;
              }}
              onChangeText={text => {
                onChangeText('phoneNumber', text);
              }}
              keyboardType="numeric"
              onSumbitEditing={() => {
                passwordRef.current?.focus();
              }}
            />
          </Box>
          <Box flex={1} justifyContent="flex-end" alignItems="center">
            <Box mb="xxxl" height={43}>
              <Button
                label="Next"
                onPress={() => {
                  forgotPassword();
                }}
              />
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 44,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: palette.primary2,
    width: size.width,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: palette.tertiary2,
  },
  eye: {
    height: 30,
    width: 30,
  },
  headerLeft: {
    marginLeft: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
