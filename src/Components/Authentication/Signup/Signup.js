/* eslint-disable no-shadow */
import React, {useEffect, useReducer, useRef} from 'react';
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
import {fonts, palette, TypographyStyles} from '../../Theme/Index';
import {registerUser} from '../../Services/AuthService';
import authConstants from '../../../Redux/AuthConstants';
const Box = createBox();
const Text = createText();
const phone = require('../../../assets/InputIcons/phone.png');
const password = require('../../../assets/InputIcons/password.png');
const eye = require('../../../assets/eye/eye-icon.png');
const eyeHide = require('../../../assets/eye/password-hide.png');
const email = require('../../../assets/InputIcons/email.png');
export default ({navigation, route}) => {
  const emailRef = useRef(null);
  const PhoneNumberRef = useRef(null);
  const PasswordRef = useRef(null);
  const ConfirmPasswordRef = useRef(null);

  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      username: '',
      email: '',
      confirmPassword: '',
      phoneNumber: '',
      password: '',
      errors: [],
      secure: true,
      confirmSecure: true,
      personal: true,
      icNumber: '',
      companyName: '',
      ssmNumber: '',
    },
  );

  /**
   * @function validateFields
   * @returns array of errors.
   * @description it will validate phonenumber and password.
   */
  const validateFields = () => {
    const emptyFields = [];
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (state.personal) {
      if (state.username.trim().length === 0) {
        const obj = {
          name: 'username',
          valid: false,
          message: 'Full Name is required.',
        };
        emptyFields.push(obj);
      }
    }
    if (!state.personal) {
      if (state.companyName.trim().length === 0) {
        const obj = {
          name: 'companyName',
          valid: false,
          message: 'Company Name is required.',
        };
        emptyFields.push(obj);
      }
    }
    if (state.personal) {
      if (state.icNumber.trim().length === 0) {
        const obj = {
          name: 'icNumber',
          valid: false,
          message: 'IC Number is required.',
        };
        emptyFields.push(obj);
      }
    }
    if (!state.personal) {
      if (state.ssmNumber.trim().length === 0) {
        const obj = {
          name: 'ssmNumber',
          valid: false,
          message: 'SSM Number is required.',
        };
        emptyFields.push(obj);
      }
    }
    if (state.email.trim().length === 0) {
      const obj = {
        name: 'email',
        valid: false,
        message: 'Email is required.',
      };
      emptyFields.push(obj);
    }
    if (!re.test(String(state.email).toLowerCase())) {
      const obj = {
        name: 'email',
        valid: false,
        message: 'Valid email is required.',
      };
      emptyFields.push(obj);
    }
    if (state.phoneNumber.trim().length === 0) {
      const obj = {
        name: 'phoneNumber',
        valid: false,
        message: 'Phone Number is required.',
      };
      emptyFields.push(obj);
    }
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
    if (
      state.username !== '' ||
      state.email !== '' ||
      state.phoneNumber !== '' ||
      state.password !== '' ||
      state.confirmPassword !== '' ||
      state.icNumber !== '' ||
      state.companyName !== '' ||
      state.ssmNumber !== ''
    ) {
      if (error !== null) {
        setState({errors: error});
      } else {
        setState({errors: []});
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.username,
    state.email,
    state.phoneNumber,
    state.password,
    state.confirmPassword,
    state.icNumber,
    state.companyName,
    state.ssmNumber,
  ]);

  /**
   * @function onChangeText
   * @param {*} key
   * @param {*} value
   * @description it will set state for its key
   */
  const onChangeText = (key, value) => {
    setState({[key]: value});
  };

  let param = '';
  if (route && route.params !== undefined) {
    param = route.params.space;
  }
  const objUserName = element => element.name === 'username';
  const usernameIndex = state.errors.findIndex(objUserName);
  const objName = element => element.name === 'phoneNumber';
  const icNumber = element => element.name === 'icNumber';
  const icNumberIndex = state.errors.findIndex(icNumber);
  const phoneNumberIndex = state.errors.findIndex(objName);
  const objEmail = element => element.name === 'email';
  const emailIndex = state.errors.findIndex(objEmail);
  const objPassword = element => element.name === 'password';
  const passwordIndex = state.errors.findIndex(objPassword);
  const objConfirmPassword = element => element.name === 'confirmPassword';
  const confirmPasswordIndex = state.errors.findIndex(objConfirmPassword);
  const objCompanyName = element => element.name === 'companyName';
  const companyNameIndex = state.errors.findIndex(objCompanyName);
  const objssmNumber = element => element.name === 'ssmNumber';
  const ssmNumberIndex = state.errors.findIndex(objssmNumber);

  /**
   * @function signupAPI
   * @description it will use to regiater the user after checking validations.
   */

  const signup = () => {
    const error = validateFields();
    if (error !== null) {
      setState({errors: error});
    } else {
      setState({errors: []});
      const data = {
        userName: state.username,
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
        phoneNumber: state.phoneNumber,
        icNumber: state.icNumber,
        companyName: state.companyName,
        ssmNumber: state.ssmNumber,
      };
      registerUser(data)
        .then(response => {
          if (response.data) {
            const {data} = response;
            const {token, user} = data;
            dispatch({
              type: authConstants.TOKEN,
              token: token,
            });
            navigation.navigate('Verify', {
              from: 'signup',
              phone: state.phoneNumber,
            });
          } else {
          }
        })
        .catch(error => {
          const {data} = error;
          const {errorMessage} = data;
          dispatch({
            type: authConstants.LOADING,
            loading: false,
          });
          dispatch({
            type: authConstants.TOAST,
            toast: {
              title: errorMessage,
              loading: true,
              status: 'error',
            },
          });
        });
      //navigation.navigate('Verify');
    }
  };

  return (
    <KeyboardAvoidingView
      style={TypographyStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Header title="Create your Account" style={styles.header} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <Box flexDirection="row">
          <TouchableOpacity
            onPress={() => setState({personal: true})}
            style={styles.accountType}>
            <Box
              alignItems="center"
              justifyContent="center"
              height={20}
              width={20}
              borderRadius={10}
              borderWidth={1}
              borderColor={state.personal ? 'primary1' : 'support10'}
              ml="l">
              <Box
                backgroundColor={state.personal ? 'primary1' : 'support10'}
                height={15}
                width={15}
                borderRadius={7.5}
              />
            </Box>
            <Text pl="s" variant="support815regular">
              Personal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setState({personal: false})}
            style={styles.accountType}>
            <Box
              alignItems="center"
              justifyContent="center"
              height={20}
              width={20}
              borderRadius={10}
              borderWidth={1}
              borderColor={!state.personal ? 'primary1' : 'support10'}
              ml="l">
              <Box
                backgroundColor={!state.personal ? 'primary1' : 'support10'}
                height={15}
                width={15}
                borderRadius={7.5}
              />
            </Box>
            <Text pl="s" variant="support815regular">
              Company
            </Text>
          </TouchableOpacity>
        </Box>
        <Box flex={2}>
          <Box mt="xxl">
            <Input
              returnKeyType={'next'}
              title={!state.personal ? 'Company Name' : 'Full Name'}
              value={!state.personal ? state.companyName : state.username}
              showErrorField={
                !state.personal
                  ? companyNameIndex !== -1 &&
                    !state.errors[companyNameIndex].valid
                  : usernameIndex !== -1 && !state.errors[usernameIndex].valid
              }
              errorText={
                !state.personal
                  ? companyNameIndex !== -1 &&
                    state.errors[companyNameIndex].message
                  : usernameIndex !== -1 && state.errors[usernameIndex].message
              }
              onChangeText={text => {
                onChangeText(
                  !state.personal ? 'companyName' : 'username',
                  text,
                );
              }}
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
            />
          </Box>
          <Box mt="l">
            <Input
              ref={PhoneNumberRef}
              returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
              title={!state.personal ? 'SSM Number' : 'IC Number'}
              value={!state.personal ? state.ssmNumber : state.icNumber}
              showErrorField={
                !state.personal
                  ? ssmNumberIndex !== -1 && !state.errors[ssmNumberIndex].valid
                  : icNumberIndex !== -1 && !state.errors[icNumberIndex].valid
              }
              errorText={
                !state.personal
                  ? ssmNumberIndex !== -1 &&
                    state.errors[ssmNumberIndex].message
                  : icNumberIndex !== -1 && state.errors[icNumberIndex].message
              }
              onChangeText={text => {
                onChangeText(!state.personal ? 'ssmNumber' : 'icNumber', text);
              }}
              keyboardType="numeric"
              onSumbitEditing={() => {
                PasswordRef.current?.focus();
              }}
            />
          </Box>
          <Box mt="l">
            <Input
              ref={emailRef}
              title="Email Address"
              value={state.email}
              showErrorField={
                emailIndex !== -1 && !state.errors[emailIndex].valid
              }
              errorText={emailIndex !== -1 && state.errors[emailIndex].message}
              left={() => {
                return (
                  <Image
                    style={styles.eye}
                    resizeMode="contain"
                    source={email}
                  />
                );
              }}
              onChangeText={text => {
                onChangeText('email', text);
              }}
              onSubmitEditing={() => {
                PhoneNumberRef.current.focus();
              }}
            />
          </Box>
          <Box mt="l">
            <Input
              ref={PhoneNumberRef}
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
                PasswordRef.current?.focus();
              }}
            />
          </Box>
          <Box mt="l">
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

          <Box flex={1} mt="xxl" alignItems="center">
            <Box height={48}>
              <Button label="Signup" onPress={() => signup()} />
            </Box>
            <Box mt="l" ml="l" mb="l" flexDirection="row" alignItems="center">
              <Text variant="support115Regular">Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text variant="support416regular">SignIn</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginHorizontal: 20,
  },
  text: {fontSize: 16, color: palette.tertiary2},
  eye: {height: 30, width: 30},
  header: {
    fontSize: 24,
    fontFamily: fonts.medium,
    color: palette.primary,
  },
  headerLeft: {
    marginLeft: 20,
  },
  accountType: {
    flexDirection: 'row',
  },
  scrollContainer: {flexGrow: 1},
});
