import React, {useState} from 'react';
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
import {Header} from '../ReusableComponents';
import {palette, TypographyStyles} from '../Theme/Index';
import MatchingJob from '../MatchingJobs/MatchingJob';
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
  return (
    <Box flex={1}>
      <Header title="Matching Jobs" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
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
  dash: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  hamburger: {marginLeft: 10},
  scrollContainer: {
    flexGrow: 1,
  },
  flalistConatiner: {
    marginHorizontal: 10,
  },
});
