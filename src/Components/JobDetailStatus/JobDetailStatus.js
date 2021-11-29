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
  const {item} = params;
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
          right={() => {
            return <Text variant="primary118regular">Edit</Text>;
          }}
        />
        <Box flex={0.5} backgroundColor="support14">
          <Box
            alignItems="center"
            justifyContent="center"
            ml="m"
            borderRadius={15}
            height={25}
            width={70}
            style={{backgroundColor: item.background}}>
            <Text style={{color: item.color}} variant="support811regular">
              {item.status}
            </Text>
          </Box>
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
              Type of wiring
            </Text>
            <Text p="s" variant="tertiary212regular">
              Renovation
            </Text>
          </Box>

          <Box p="m" borderBottomWidth={1} borderColor="support9">
            <Text p="s" variant="support212Medium">
              Target Date
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
              Earning commision
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

          <Box p="m">
            {item.status === 'pending' ? (
              <>
                <Text p="s" variant="supprt1514meduim">
                  Customer
                </Text>
                <Button
                  label="Assign customer"
                  textStyle={styles.buttonText}
                  buttonStyle={styles.buttonStyle}
                />
              </>
            ) : (
              <>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Text p="s" variant="supprt1514meduim">
                    Customer
                  </Text>
                  <Text p="s" variant="primary113regular">
                    Change
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
              </>
            )}
          </Box>

          <Box p="m">
            {item.status === 'pending' ? (
              <>
                <Text p="s" variant="support212Medium">
                  Contractor
                </Text>
                <Button
                  label="Assign Contractor"
                  textStyle={styles.buttonText}
                  buttonStyle={styles.buttonStyle}
                />
              </>
            ) : (
              <>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Text p="s" variant="supprt1514meduim">
                    Contractor
                  </Text>
                  <Text p="s" variant="primary113regular">
                    Change
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
                      Alexa Rollins
                    </Text>
                    <Text paddingVertical="s" variant="support1512regular">
                      {'(+60) 1234567890'}
                    </Text>
                  </Box>
                </Box>
              </>
            )}
          </Box>
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
});
