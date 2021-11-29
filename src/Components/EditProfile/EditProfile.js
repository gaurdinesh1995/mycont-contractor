import React, {useEffect, useReducer, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
  FlatList,
  ScrollView,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Button, Header, Input} from '../ReusableComponents';
import {fonts, palette, TypographyStyles} from '../Theme/Index';
import ServiceType from '../ServiceType/ServiceType';
const CameraIcon = require('../../assets/CameraIcon/cameraIcon.png');
const phone = require('../../assets/InputIcons/phone.png');
const password = require('../../assets/InputIcons/password.png');
const eye = require('../../assets/eye/eye-icon.png');
const eyeHide = require('../../assets/eye/password-hide.png');
const email = require('../../assets/InputIcons/email.png');
const Box = createBox();
const Text = createText();

export default ({navigation, route}) => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const PhoneNumberRef = useRef(null);
  const PasswordRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);

  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      username: '',
      email: '',
      phoneNumber: '',
      secondaryPhoneNumber: '',
      errors: [],
      secure: true,
      confirmSecure: true,
      personal: true,
      icNumber: '',
      companyName: '',
      ssmRegistrationNumber: '',
    },
  );
  /**
   * @function toggleSwitch
   * @description it will change the status of text fileds either its company text fields or personal text fields.
   */

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  /**
   * @function validateFields
   * @returns array of errors.
   * @description it will validate phonenumber and password.
   */
  const validateFields = () => {
    const emptyFields = [];
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (isEnabled) {
      if (state.companyName.trim().length === 0) {
        const obj = {
          name: 'companyName',
          valid: false,
          message: 'Company Name is required.',
        };
        emptyFields.push(obj);
      }
    } else {
      if (state.username.trim().length === 0) {
        const obj = {
          name: 'username',
          valid: false,
          message: 'User Name is required.',
        };
        emptyFields.push(obj);
      }
    }
    if (isEnabled) {
      if (state.ssmRegistrationNumber.trim().length === 0) {
        const obj = {
          name: 'ssmNumber',
          valid: false,
          message: 'SSM Registration Number is required.',
        };
        emptyFields.push(obj);
      }
    } else {
      if (state.icNumber.trim().length === 0) {
        const obj = {
          name: 'icNumber',
          valid: false,
          message: 'IC Number is required.',
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

    if (state.secondaryPhoneNumber.trim().length === 0) {
      const obj = {
        name: 'secondaryPhoneNumber',
        valid: false,
        message: 'Secondary Phone Number is required.',
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.username,
    state.email,
    state.phoneNumber,
    state.ssmRegistrationNumber,
    state.icNumber,
    state.secondaryPhoneNumber,
    state.companyName,
  ]);

  /**
   * @function signup
   * @description it will signup into app and check validations.
   */
  const signup = () => {
    navigation.navigate('Verify');
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

  const objUserName = element => element.name === 'username';
  const usernameIndex = state.errors.findIndex(objUserName);
  const objCompanyName = element => element.name === 'companyName';
  const companyNameIndex = state.errors.findIndex(objCompanyName);
  const objName = element => element.name === 'phoneNumber';
  const icNumber = element => element.name === 'icNumber';
  const icNumberIndex = state.errors.findIndex(icNumber);
  const phoneNumberIndex = state.errors.findIndex(objName);
  const objEmail = element => element.name === 'email';
  const emailIndex = state.errors.findIndex(objEmail);
  const objSecondaryPhone = element => element.name === 'secondaryPhoneNumber';
  const secondaryPhoneNumber = state.errors.findIndex(objSecondaryPhone);
  const objSSM = element => element.name === 'ssmNumber';
  const ssmNumber = state.errors.findIndex(objSSM);

  return (
    <Box flex={1}>
      <Header
        style={styles.header}
        backgroundColor="support14"
        title="Profile"
        right={() => {
          return (
            <Box flexDirection="row" alignItems="center">
              <Text variant="primary118regular">Save</Text>
            </Box>
          );
        }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Box
          backgroundColor="support14"
          height={100}
          width={'100%'}
          alignItems="center"
          justifyContent="center">
          <Image style={styles.profileImg} />
          <Image style={styles.camera} source={CameraIcon} />
        </Box>
        <Box
          backgroundColor="support7"
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          flex={1}>
          <Box
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            p="l">
            <Text variant="supprort818regular">Company</Text>
            <Switch
              trackColor={{false: '#767577', true: palette.secondary}}
              thumbColor={isEnabled ? palette.primary : palette.primary2}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Box>
          <Box mt="xxl">
            <Input
              returnKeyType={'next'}
              title={isEnabled ? 'Company Name' : 'Full Name'}
              value={isEnabled ? state.companyName : state.username}
              showErrorField={
                isEnabled
                  ? companyNameIndex !== -1 &&
                    !state.errors[companyNameIndex].valid
                  : usernameIndex !== -1 && !state.errors[usernameIndex].valid
              }
              errorText={
                isEnabled
                  ? companyNameIndex !== -1 &&
                    state.errors[companyNameIndex].message
                  : usernameIndex !== -1 && state.errors[usernameIndex].message
              }
              onChangeText={text => {
                onChangeText(isEnabled ? 'companyName' : 'username', text);
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
              title={isEnabled ? 'SSM Number' : 'IC Number'}
              value={isEnabled ? state.ssmRegistrationNumber : state.icNumber}
              showErrorField={
                isEnabled
                  ? ssmNumber !== -1 && !state.errors[ssmNumber].valid
                  : icNumberIndex !== -1 && !state.errors[icNumberIndex].valid
              }
              errorText={
                isEnabled
                  ? ssmNumber !== -1 && state.errors[ssmNumber].message
                  : icNumberIndex !== -1 && state.errors[icNumberIndex].message
              }
              onChangeText={text => {
                onChangeText(isEnabled ? 'ssmNumbera' : 'icNumber', text);
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
              ref={PhoneNumberRef}
              returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
              title="Secondary Phone Number"
              value={state.phoneNumber}
              showErrorField={
                secondaryPhoneNumber !== -1 &&
                !state.errors[secondaryPhoneNumber].valid
              }
              errorText={
                secondaryPhoneNumber !== -1 &&
                state.errors[secondaryPhoneNumber].message
              }
              left={() => {
                return <Image style={styles.eye} source={phone} />;
              }}
              onChangeText={text => {
                onChangeText('secondaryPhoneNumber', text);
              }}
              keyboardType="numeric"
              onSumbitEditing={() => {
                PasswordRef.current?.focus();
              }}
            />
          </Box>
          <Box m="l">
            <Text variant="support814regular">Service Type</Text>
          </Box>
          <FlatList
            scrollEnabled={true}
            contentContainerStyle={styles.flalistConatiner}
            data={[
              {
                Key: 1,
                text: 'Lighting',
              },
              {
                Key: 2,
                text: 'Renovation',
              },
              {
                Key: 3,
                text: 'Electric',
              },
              {
                Key: 4,
                text: 'Aircond',
              },
            ]}
            numColumns={3}
            renderItem={({item, index}) => {
              return <ServiceType index={index} item={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          <Box m="l">
            <Text variant="supprort818regular">Gallery</Text>
          </Box>
          <Button
            label="Add Max 5 images"
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonStyle}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  dash: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  hamburger: {marginLeft: 10},
  scrollContainer: {
    flexGrow: 1,
  },
  flalistConatiner: {
    marginHorizontal: 10,
  },
  header: {fontSize: 24, fontFamily: fonts.medium},
  profileImg: {
    backgroundColor: 'grey',
    height: 85,
    width: 85,
    borderRadius: 42.5,
  },
  camera: {
    marginTop: -25,
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 45,
  },
  eye: {height: 30, width: 30},
  buttonStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: palette.primary,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {color: palette.primary},
});
