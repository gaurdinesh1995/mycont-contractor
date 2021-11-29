import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
  FlatList,
  ScrollView,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Header} from '../ReusableComponents';
import {palette, TypographyStyles} from '../Theme/Index';
import JobCategory from '../../Components/JobCategory/jobCategory';
import MatchingJob from '../MatchingJobs/MatchingJob';
const Hamburger = require('../../assets/Hamburger/hamburger.png');
const JobIcon = require('../../assets/JobCategory/Add-job.png');
const ManageJobIcon = require('../../assets/JobCategory/manage-icon.png');
const SearchJobIcon = require('../../assets/JobCategory/search-job-icon.png');
const PanelIcon = require('../../assets/JobCategory/supplier-icon.png');
const TutorialIcon = require('../../assets/JobCategory/tutorial-icon.png');
const WalletIcon = require('../../assets/JobCategory/wallet-icon.png');

const Box = createBox();
const Text = createText();

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const {user} = useSelector(state => ({
    ...state.auth.user.user,
  }));

  /**
   * @function toggleSwitch
   * @description it will use to enable and disable location button.
   */
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    requestLocationPermission();
  };

  /**
   * @function requestLocationPermission
   * @description it will use to access the location permission.
   */

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert('You can use the location');
      } else {
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  return (
    <Box flex={1}>
      <Header
        left={() => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={styles.hamburger} source={Hamburger} />
            </TouchableOpacity>
          );
        }}
        right={() => {
          return (
            <Box flexDirection="row" alignItems="center">
              <Text variant="support1218regular">Location</Text>
              <Switch
                trackColor={{false: '#767577', true: palette.secondary}}
                thumbColor={isEnabled ? palette.primary : palette.primary2}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </Box>
          );
        }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Box
          height={150}
          width={'100%'}
          flexDirection="row"
          backgroundColor="support7"
          borderBottomRightRadius={15}
          borderBottomLeftRadius={15}
          pl="m">
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.imgContainer}>
            <Image style={styles.image} />
          </TouchableOpacity>
          <Box flex={0.75}>
            <Text variant="support1115medium">Welcome back</Text>
            <Text variant="support825medium">{user?.userName}</Text>
          </Box>
        </Box>

        <Box
          style={(TypographyStyles.cardShadow, {marginTop: -60})}
          height={100}
          flexDirection="row"
          alignItems="center"
          backgroundColor="support7"
          borderRadius={12}
          m="l">
          <Box flex={0.5} ml="l">
            <Text variant="support815medium">Wallet balance</Text>
            <Text pt="s" variant="support1213regular">
              Available
            </Text>
          </Box>
          <Box flex={0.5}>
            <Text variant="support825medium">RM 120.50</Text>
          </Box>
        </Box>
        <FlatList
          scrollEnabled={true}
          contentContainerStyle={styles.flalistConatiner}
          data={[
            {
              Key: 1,
              color: palette.primary1,
              text: 'Job',
              Image: JobIcon,
              screenName: 'JobList',
            },
            {
              Key: 2,
              color: palette.primary,
              text: 'Manage Job',
              Image: ManageJobIcon,
              screenName: '',
            },
            {
              Key: 3,
              color: '#ff2959',
              text: 'Search Job',
              Image: SearchJobIcon,
              screenName: 'JobTabBar',
            },
            {
              Key: 4,
              color: '#ff6c00',
              text: 'Panel Supplier',
              Image: PanelIcon,
              screenName: '',
            },
            {
              Key: 5,
              color: '#00a3c7',
              text: 'Tutorial',
              Image: TutorialIcon,
              screenName: '',
            },
            {
              Key: 6,
              color: '#17c831',
              text: 'Wallet',
              Image: WalletIcon,
              screenName: '',
            },
          ]}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <JobCategory index={index} item={item} navigation={navigation} />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Text p="l" pl="xl" variant="supprort818regular">
            Matching Job
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MatchingList')}>
            <Text p="l" pl="xl" variant="primary114Regular">
              View More
            </Text>
          </TouchableOpacity>
        </Box>
        <FlatList
          scrollEnabled={true}
          contentContainerStyle={styles.flalistConatiner}
          data={[
            {Key: 1, color: palette.primary1, text: 'Job', Image: JobIcon},
            {
              Key: 2,
              color: palette.primary,
              text: 'Manage Job',
              Image: ManageJobIcon,
            },
            {
              Key: 3,
              color: '#ff2959',
              text: 'Search Job',
              Image: SearchJobIcon,
            },
            {
              Key: 4,
              color: '#ff6c00',
              text: 'Panel Supplier',
              Image: PanelIcon,
            },
            {Key: 5, color: '#00a3c7', text: 'Tutorial', Image: TutorialIcon},
            {Key: 6, color: '#17c831', text: 'Wallet', Image: WalletIcon},
          ]}
          renderItem={({item, index}) => {
            return <MatchingJob index={index} item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  dash: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  hamburger: {
    marginLeft: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  flalistConatiner: {
    marginHorizontal: 10,
  },
  imgContainer: {
    flex: 0.25,
  },
  image: {
    backgroundColor: 'grey',
    height: 68,
    width: 68,
    borderRadius: 34,
  },
});
