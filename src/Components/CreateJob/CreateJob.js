import React, {useEffect, useReducer} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Button, Header} from '../ReusableComponents';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import JobDetails from '../JobDetails/JobDetails';
import PropertySize from '../PropertySize/PropertySize';
import {fonts, palette} from '../Theme/Index';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
const Inwall = require('../../assets/WiringTypes/inwall.png');
const Exposed = require('../../assets/WiringTypes/exposed.png');
const Check = require('../../assets/check/selected-icon.png');
const Box = createBox();
const Text = createText();
const Location = require('../../assets/location/location.png');
export default ({navigation}) => {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      months: [],
      count: 0,
    },
  );

  /**
   * @function decreseSteps
   * @description it will decrese the count and update the count state .
   */

  const decreseSteps = () => {
    setState({count: state.count - 1});
  };

  /**
   * @function increseSteps
   * @description it will increase the count and update the count state .
   */
  const increseSteps = () => {
    setState({count: state.count + 1});
  };

  return (
    <Box flex={1} backgroundColor="support14">
      <Header backgroundColor="support14" title="Create Job" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <Box>
          <Text p="l" variant="support818medium">
            Job Category
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flalistConatiner}
            data={[
              {
                Key: 1,
                color: '#f7241d',
                text: 'Renovation',
                extension: 'Install new Light point',
                status: 'pending',
                background: 'rgba(247, 36, 29,0.2)',
              },
              {
                Key: 2,
                color: '#258b07',
                text: 'Lighting',
                extension: 'Lighting Extension',
                status: 'ongoing',
                background: 'rgba( 37, 139, 7,0.2)',
              },
              {
                Key: 3,
                color: '#e17d00',
                text: 'Lighting',
                extension: 'Lighting Extension',
                status: 'pending',
                background: 'rgba( 225, 125, 0,0.2)',
              },
              {
                Key: 4,
                color: '#f7241d',
                text: 'Lighting',
                extension: 'Lighting Extension',
                status: 'ongoing',
                background: 'rgba(247, 36, 29,0.2)',
              },
              {
                Key: 5,
                color: '#f7241d',
                text: 'Lighting',
                extension: 'Lighting Extension',
                status: 'ongoing',
                background: 'rgba(247, 36, 29,0.2)',
              },
            ]}
            numColumns={3}
            renderItem={({item, index}) => {
              return <JobCategoryList index={index} item={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text textAlign="right" pr="l" variant="primary114Regular">
            View More
          </Text>
        </Box>
        <Box>
          <Text p="l" variant="support818medium">
            Job Details
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flalistConatiner}
            data={[
              {
                Key: 1,
                color: '#f7241d',
                text: 'Install new light points',
                extension: 'Install new Light point',
                status: 'pending',
                background: 'rgba(247, 36, 29,0.2)',
              },
              {
                Key: 2,
                color: '#258b07',
                text: 'Lighting Extension',
                extension: 'Lighting Extension',
                status: 'ongoing',
                background: 'rgba( 37, 139, 7,0.2)',
              },
              {
                Key: 3,
                color: '#e17d00',
                text: 'Change light hardware',
                extension: 'Lighting Extension',
                status: 'pending',
                background: 'rgba( 225, 125, 0,0.2)',
              },
            ]}
            numColumns={2}
            renderItem={({item, index}) => {
              return <JobDetails index={index} item={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Text p="l" variant="support818medium">
            Lighting material
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Material')}>
            <Text p="l" variant="primary114Regular">
              Add
            </Text>
          </TouchableOpacity>
        </Box>
        <Box
          justifyContent="space-between"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          borderRadius={12}
          flexDirection="row"
          height={76}
          marginHorizontal="l">
          <Image source={Check} style={styles.image} />
          <Box mr="xxxxl">
            <Text variant="support1514medium">LED Ceiling light</Text>
            <Text pt="m" variant="primary14meduim">
              RM 150
            </Text>
          </Box>
          <Box
            borderRadius={10}
            flexDirection="row"
            mr="l"
            alignItems="center"
            justifyContent="center"
            height={30}
            backgroundColor="primary2">
            <TouchableOpacity
              onPress={() => {
                state.count > 0 && decreseSteps();
              }}>
              <Text paddingHorizontal="m" variant="primary20bold">
                {'-'}
              </Text>
            </TouchableOpacity>
            <Text paddingHorizontal="s" variant="primary14meduim">
              {state.count}
            </Text>
            <TouchableOpacity onPress={() => increseSteps()}>
              <Text paddingHorizontal="m" variant="primary20bold">
                {'+'}
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
        <Text p="l" variant="support818medium">
          Type of wiring
        </Text>
        <Box flexDirection="row">
          <Box
            height={35}
            p="s"
            paddingHorizontal="l"
            marginHorizontal="l"
            borderRadius={15}
            backgroundColor="primary2"
            flexDirection="row"
            alignItems="center">
            <Text paddingHorizontal="s" variant="support1514medium">
              Inwall
            </Text>
            <Image source={Inwall} />
          </Box>
          <Box
            height={35}
            borderRadius={15}
            paddingHorizontal="l"
            p="s"
            backgroundColor="primary2"
            flexDirection="row"
            alignItems="center">
            <Text paddingHorizontal="s" variant="support1514medium">
              Exposed
            </Text>
            <Image source={Exposed} />
          </Box>
        </Box>

        <Text p="l" variant="support818medium">
          Property Size
        </Text>
        <FlatList
          scrollEnabled={true}
          contentContainerStyle={styles.contentContainerStyle}
          data={[
            {Key: 1, text: '500 Sqft'},
            {Key: 2, text: '501-900 Sqft'},
            {Key: 3, text: '901-1400 Sqft'},
            {Key: 4, text: '1401-2100 Sqft'},
            {Key: 5, text: '2101-4000 Sqft'},
            {Key: 6, text: '4001 Sqft'},
          ]}
          numColumns={2}
          renderItem={({item, index}) => {
            return <PropertySize index={index} item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text textAlign="right" pr="l" variant="primary114Regular">
          More size
        </Text>
        <Text p="l" variant="support818medium">
          Target Date
        </Text>
        <Box>
          <CalendarStrip
            daySelectionAnimation={{
              type: 'border',
              duration: 200,
              borderWidth: 1,
              borderHighlightColor: 'white',
            }}
            scrollable={true}
            minDate={moment(new Date())}
            startingDate={moment(new Date())}
            style={styles.calendar}
            calendarHeaderStyle={styles.calendarHeader}
            dateNumberStyle={styles.dateNumber}
            dateNameStyle={styles.dateName}
            highlightDateNumberStyle={styles.highlight}
            highlightDateNameStyle={styles.highlight}
            disabledDateNameStyle={styles.disabled}
            disabledDateNumberStyle={styles.disabled}
            highlightDateContainerStyle={styles.highlightContainer}
            dayComponentHeight={90}
            iconContainer={{flex: 0.1}}
          />
        </Box>
        <Text p="l" variant="support818medium">
          Location
        </Text>
        <TouchableOpacity>
          <Box
            backgroundColor="secondary1"
            flexDirection="row"
            alignSelf="center"
            justifyContent="space-between"
            alignItems="center"
            borderRadius={12}
            height={50}
            borderColor="primary"
            borderWidth={0.3}
            width={'90%'}>
            <Text pl="l" variant="support114Regular">
              New York
            </Text>
            <Image style={styles.locationImg} source={Location} />
          </Box>
        </TouchableOpacity>
        <Button
          buttonStyle={styles.button}
          label="Submit"
          onPress={() => navigation.navigate('JobSummary')}
        />
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
  locationImg: {
    marginRight: 20,
    tintColor: palette.primary,
  },
  button: {
    marginVertical: 20,
    fontFamily: fonts.medium,
  },
  image: {marginLeft: 10},
  contentContainerStyle: {marginLeft: 15},
  calendar: {height: 100},
  calendarHeader: {
    color: palette.primary,
    fontSize: 16,
    height: 50,
  },
  dateNumber: {
    color: palette.support15,
    fontSize: 18,
    fontFamily: fonts.medium,
  },
  dateName: {
    color: palette.primary,
    fontSize: 13,
    fontFamily: fonts.regular,
  },
  highlight: {color: palette.support7},
  disabled: {color: 'grey'},
  highlightContainer: {
    height: 50,
    backgroundColor: palette.primary,
    width: 50,
  },
});
