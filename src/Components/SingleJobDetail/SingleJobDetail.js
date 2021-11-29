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
export default ({navigation, route}) => {
  console.log({route});
  const {params} = route;
  const {button} = params;
  return (
    <KeyboardAvoidingView
      style={TypographyStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Header
          title="Job Detail"
          backgroundColor="support14"
          style={styles.header}
        />
        <Box flex={0.5} backgroundColor="support14">
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              Categroy
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
              Target Completion Date
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>
          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              Total Price
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>

          <Box p="m">
            <Text p="s" variant="support212Medium">
              Location
            </Text>
            <Text p="s" variant="primary312regular">
              DUBAI, Valley Mall Near Shopping Complex
            </Text>
            <Image style={styles.location} source={Location} />
          </Box>

          {button === 'third' && (
            <Box p="m">
              <Box>
                <Text p="s" variant="supprt1514meduim">
                  Assigned from
                </Text>
              </Box>
              <Box
                flexDirection="row"
                alignItems="center"
                mt="l"
                alignSelf="center"
                height={80}
                width={'95%'}
                backgroundColor="support7"
                borderRadius={15}>
                <Image style={styles.image} />
                <Box ml="l">
                  <Text paddingVertical="s" variant="support1516medium">
                    Leo Fritz
                  </Text>
                  <Text paddingVertical="s" variant="support1512regular">
                    {'(+60) 1234567890'}
                  </Text>
                </Box>
              </Box>
            </Box>
          )}
          {button !== 'second' && (
            <Box p="m">
              <Text p="s" variant="support212Medium">
                Enter your target Completion date
              </Text>
              <Box
                justifyContent="center"
                height={40}
                width={'95%'}
                backgroundColor="support7">
                <Text p="s" variant="primary312regular">
                  16-08-21
                </Text>
              </Box>
            </Box>
          )}
          {button === 'third' ? (
            <Box flexDirection="row" alignItems="center" marginVertical="l">
              <Button buttonStyle={styles.acceptButton} label={'Accept Job'} />
              <Button
                buttonStyle={styles.rejectButton}
                textStyle={styles.text}
                label={'reject Job'}
              />
            </Box>
          ) : (
            <Box marginVertical="l">
              <Button
                label={button === 'second' ? 'Cancel Application' : 'Apply Job'}
              />
            </Box>
          )}
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
  buttonStyle: {
    backgroundColor: palette.support14,
    borderColor: palette.primary,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {color: palette.primary},
  image: {
    marginLeft: 20,
    backgroundColor: palette.primary2,
    height: 54,
    width: 54,
    borderRadius: 27,
  },
  acceptButton: {height: 45, width: 200},
  text: {color: palette.primary1},
  rejectButton: {
    backgroundColor: palette.support7,
    borderColor: palette.primary1,
    borderWidth: 1,
    height: 45,
    width: 200,
  },
});
