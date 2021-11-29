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
import {fonts, palette, size, TypographyStyles} from '../../Theme/Index';
import {requestResetpassword, resetPassword} from '../../Services/AuthService';
import authConstants from '../../../Redux/AuthConstants';
const Recovery = require('../../../assets/PasswordRecovery/PasswordRecovery.png');
const password = require('../../../assets/InputIcons/password.png');
const Box = createBox();
const Text = createText();
const phone = require('../../../assets/InputIcons/phone.png');
const eye = require('../../../assets/eye/eye-icon.png');
const eyeHide = require('../../../assets/eye/password-hide.png');

export default ({navigation, route}) => {
  const PasswordRef = useRef(null);
  const ConfirmPasswordRef = useRef(null);
  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      confirmPassword: '',
      password: '',
      errors: [],
      secure: true,
      confirmSecure: true,
      code: '',
    },
  );

  /**
   * @function validateFields
   * @returns array of errors.
   * @description it will validate phonenumber and password.
   */
  const validateFields = () => {
    const emptyFields = [];

    if (state.password.trim().length === 0) {
      const obj = {
        name: 'password',
        valid: false,
        message: 'Password is required.',
      };
      emptyFields.push(obj);
    }
    if (state.confirmPassword.trim().length === 0) {
      const obj = {
        name: 'confirmPassword',
        valid: false,
        message: 'Confirm Password is required.',
      };
      emptyFields.push(obj);
    }
    if (
      state.confirmPassword.trim().length !== 0 &&
      state.password.trim().length !== 0 &&
      state.confirmPassword.trim() !== state.password.trim()
    ) {
      const obj = {
        name: 'confirmPassword',
        valid: false,
        message: 'Confirm Password should match password.',
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
  }, [state.password, state.confirmPassword]);

  /**
   * @function UpdatePassword
   * @description it will check phone number and navigate to reset password.
   */
  const UpdatePassword = () => {
    const error = validateFields();
    if (error !== null) {
      setState({errors: error});
    } else {
      setState({errors: []});
      const data = {
        otp: state.code,
        password: state.password,
      };
      requestResetpassword(data)
        .then(response => {
          navigation.navigate('AuthSuccess', {reset: 'reset'});
        })
        .catch(error => {
          const {message} = error;
          if (message === "Cannot read property 'data' of null") {
            dispatch({
              type: authConstants.TOAST,
              toast: {
                title: 'Token has expired',
                loading: true,
                status: 'error',
              },
            });
          }
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

  const objPassword = element => element.name === 'password';
  const passwordIndex = state.errors.findIndex(objPassword);
  const objConfirmPassword = element => element.name === 'confirmPassword';
  const confirmPasswordIndex = state.errors.findIndex(objConfirmPassword);
  return (
    <Box style={TypographyStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={TypographyStyles.container}>
        <Header title="Reset Password" style={styles.header} />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <Box flex={0.1}></Box>
          <Box mt="xxxl" justifyContent="center" alignItems="center">
            <Text
              mt="l"
              variant="support1115regular"
              textAlign="center"
              marginHorizontal="xxxl">
              Your new password must be different from the previous used
              password{' '}
            </Text>
          </Box>
          <Box mt="xxxl" justifyContent="center" alignItems="center">
            <Input
              ref={PasswordRef}
              title="Password"
              value={state.password}
              showErrorField={
                passwordIndex !== -1 && !state.errors[passwordIndex].valid
              }
              errorText={
                passwordIndex !== -1 && state.errors[passwordIndex].message
              }
              left={() => {
                return <Image style={styles.eye} source={password} />;
              }}
              right={() => {
                return (
                  <TouchableOpacity
                    onPress={() => setState({secure: !state.secure})}>
                    <Image
                      style={styles.eye}
                      source={state.secure ? eye : eyeHide}
                    />
                  </TouchableOpacity>
                );
              }}
              secureTextEntry={state.secure}
              onChangeText={text => {
                onChangeText('password', text);
              }}
              onSubmitEditing={() => {
                ConfirmPasswordRef.current.focus();
              }}
            />
          </Box>
          <Box mt="l">
            <Input
              ref={ConfirmPasswordRef}
              title="Confirm Password"
              value={state.confirmPassword}
              showErrorField={
                confirmPasswordIndex !== -1 &&
                !state.errors[confirmPasswordIndex].valid
              }
              errorText={
                confirmPasswordIndex !== -1 &&
                state.errors[confirmPasswordIndex].message
              }
              left={() => {
                return <Image style={styles.eye} source={password} />;
              }}
              right={() => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      setState({confirmSecure: !state.confirmSecure})
                    }>
                    <Image
                      style={styles.eye}
                      source={state.confirmSecure ? eye : eyeHide}
                    />
                  </TouchableOpacity>
                );
              }}
              secureTextEntry={state.confirmSecure}
              onChangeText={text => {
                onChangeText('confirmPassword', text);
              }}
            />
          </Box>
          <Box flex={1} justifyContent="flex-end" alignItems="center">
            <Box mb="xxxl" height={43}>
              <Button
                label="Update Password"
                onPress={() => {
                  UpdatePassword();
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
  header: {
    color: palette.primary,
    fontFamily: fonts.medium,
    fontSize: 24,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
