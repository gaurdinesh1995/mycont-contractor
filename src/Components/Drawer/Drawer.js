import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import authConstants from '../../Redux/AuthConstants';
import {createBox, createText} from '@shopify/restyle';
const Box = createBox();
const Text = createText();
const Hamburger = require('../../assets/Hamburger/hamburger.png');
const AboutUs = require('../../assets/Drawer/aboutUs.png');
const EditProfile = require('../../assets/Drawer/editProfile.png');
const ChangePassword = require('../../assets/Drawer/password-icon.png');
const TermsIcon = require('../../assets/Drawer/terms.png');
const Logout = require('../../assets/Drawer/power-off-line.png');
export default ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <Box flex={1}>
      <Box
        mt="xl"
        marginHorizontal="l"
        width={'90%'}
        flexDirection="row"
        justifyContent="space-between">
        <Image style={styles.profileImg} />
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Image source={Hamburger} />
        </TouchableOpacity>
      </Box>
      <Box ml="l" mt="m">
        <Text variant="support823medium">Steaven Robert</Text>
        <Text variant="support814regular">steavenrobert@gmail.com</Text>
      </Box>
      <Box m="l" mt="xxl" flexDirection="row" alignItems="center">
        <Image source={EditProfile} />
        <Text pl="l" variant="supprort818regular">
          Edit Profile
        </Text>
      </Box>
      <Box m="l" flexDirection="row" alignItems="center">
        <Image source={ChangePassword} />
        <Text pl="l" variant="supprort818regular">
          Change Password
        </Text>
      </Box>
      <Box m="l" flexDirection="row" alignItems="center">
        <Image source={AboutUs} />
        <Text pl="l" variant="supprort818regular">
          About Us
        </Text>
      </Box>
      <Box m="l" flexDirection="row" alignItems="center">
        <Image source={TermsIcon} />
        <Text pl="l" variant="supprort818regular">
          Terms of Use
        </Text>
      </Box>
      <Box m="l" flexDirection="row" alignItems="center">
        <Image source={TermsIcon} />
        <Text pl="l" variant="supprort818regular">
          Terms of Service
        </Text>
      </Box>
      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          dispatch({
            type: authConstants.RESET_STATE,
            user: 'data',
          });
        }}>
        <Image source={Logout} />
        <Text pl="l" variant="primary20regular">
          Log Out
        </Text>
      </TouchableOpacity>
    </Box>
  );
};
const styles = StyleSheet.create({
  profileImg: {
    backgroundColor: 'grey',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    position: 'absolute',
    bottom: 0,
  },
});
