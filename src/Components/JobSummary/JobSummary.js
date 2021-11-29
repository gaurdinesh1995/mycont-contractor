import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Button, Header, Search} from '../ReusableComponents';
import {TypographyStyles, fonts, palette} from '../Theme/Index';
const Box = createBox();
const Text = createText();
const Location = require('../../assets/location/location.png');
const ProfileImg = require('../../assets/profile/ProfilePicture.png');
export default ({navigation, route}) => {
  return (
    <KeyboardAvoidingView
      style={TypographyStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Header
          title="Job Summary"
          backgroundColor="support14"
          style={styles.header}
        />
        <Box
          flex={0.1}
          alignItems="center"
          justifyContent="center"
          backgroundColor="support14">
          <Image source={ProfileImg} resizeMode="contain" />
        </Box>
        <Box flex={0.5} backgroundColor="support14">
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              job Categroy
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              job Detail
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              Job Materials
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              Property Size
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>

          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              job Completion Target Date
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              Price
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              Location
            </Text>
            <Text p="s" variant="primary312regular">
              DUBAI, Valley Mall Near Shopping Complex
            </Text>
            <Image style={styles.location} source={Location} />
          </Box>

          <Button
            buttonStyle={styles.button}
            label="Create Job"
            onPress={() => navigation.navigate('PostJobDetail')}
          />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    fontFamily: fonts.medium,
  },
  backIcon: {
    resizeMode: 'contain',
    marginLeft: 20,
  },
  header: {
    fontSize: 24,
    fontFamily: fonts.bold,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  flalistConatiner: {
    marginHorizontal: 20,
  },
  location: {
    tintColor: palette.primary,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
