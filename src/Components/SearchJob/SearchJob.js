import React, {useReducer} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Header, Input, Button, Search} from '../ReusableComponents';
import {palette, TypographyStyles} from '../Theme/Index';
import JobListRender from '../JobList/JobListRender';
import MatchingJob from '../MatchingJobs/MatchingJob';
import Modal from 'react-native-modal';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
const SearchIcon = require('../../assets/Search/search.png');
const Cross = require('../../assets/Cross/Close-icon.png');
const FilterIcon = require('../../assets/filter/filter-icon.png');
const Box = createBox();
const Text = createText();

export default ({navigation, button}) => {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      modal: false,
      phoneNumber: '',
      data: [],
      code: '',
    },
  );

  return (
    <Box flex={1} backgroundColor="support14">
      {button === 'first' && (
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Box
            borderRadius={12}
            alignItems="center"
            backgroundColor="support7"
            flexDirection="row"
            height={40}
            marginVertical="m"
            width={'70%'}>
            <Image source={SearchIcon} style={styles.search} />
            <Text pl="l" variant="support1213regular">
              Search job
            </Text>
            <Image source={Cross} style={styles.cross} />
          </Box>
          <TouchableOpacity onPress={() => setState({modal: true})}>
            <Image source={FilterIcon} style={styles.filter} />
          </TouchableOpacity>
        </Box>
      )}
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
        ]}
        renderItem={({item, index}) => {
          return (
            <MatchingJob
              button={button}
              index={index}
              item={item}
              navigation={navigation}
              toogleModal={() => toggleModal()}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal
        style={styles.modalContainer}
        onSwipeComplete={() => setState({modal: false})}
        swipeDirection={['down']}
        animationType="slide"
        transparent={true}
        visible={state.modal}
        onRequestClose={() => {
          setState({modal: !state.modal});
        }}>
        <Box
          backgroundColor="support7"
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          height={'70%'}
          width={'100%'}>
          <Box
            borderRadius={5}
            mt="m"
            height={5}
            width={100}
            backgroundColor="support11"
            alignSelf="center"></Box>
          <Text pl="l" pt="l" variant="support1318meduim">
            Apply Filter
          </Text>
          <Text p="l" variant="support1317regular">
            Job Category
          </Text>
          <Box>
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
          </Box>
          <Text p="l" variant="support1317regular">
            Price
          </Text>
          <Box flexDirection="row" alignItems="center">
            <Box
              alignItems="center"
              ml="l"
              borderRadius={5}
              height={30}
              width={30}
              borderColor="support11"
              borderWidth={0.3}></Box>
            <Text pl="l" variant="support1314regular">
              Low to High
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center" mt="m">
            <Box
              alignItems="center"
              ml="l"
              borderRadius={5}
              height={30}
              width={30}
              borderColor="support11"
              borderWidth={0.3}></Box>
            <Text pl="l" variant="support1314regular">
              High to Low
            </Text>
          </Box>

          <Box height={31} marginVertical="l" flexDirection="row">
            <Button label="Show Result" buttonStyle={styles.button} />
            <Text pr="l" variant="support1716regular">
              Clear
            </Text>
          </Box>
        </Box>
      </Modal>
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
  createjob: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    right: 10,
    bottom: 10,
    position: 'absolute',
    width: 147,
    height: 48,
    backgroundColor: palette.primary,
  },
  search: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
    marginLeft: 10,
  },
  cross: {
    position: 'absolute',
    right: 10,
    resizeMode: 'contain',
    height: 15,
    width: 15,
    marginLeft: 10,
  },
  filter: {resizeMode: 'contain', marginHorizontal: 5},
  modalContainer: {
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  button: {width: 300},
});
