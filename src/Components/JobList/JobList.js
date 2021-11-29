import React, {useReducer} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {Header, Input, Button} from '../ReusableComponents';
import {palette, TypographyStyles} from '../Theme/Index';
import JobListRender from './JobListRender';
import Modal from 'react-native-modal';
const Search = require('../../assets/Search/search.png');
const Cross = require('../../assets/Cross/Close-icon.png');
const Box = createBox();
const Text = createText();

export default ({navigation}) => {
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

  /**
   * @function toggleModal
   * @description it will use to open the modal.
   */
  const toggleModal = () => {
    setState({modal: !state.modal});
  };

  /**
   * @function onHandlePress
   * @description it will use to set the hardcoded contractor data in state.
   */

  const onHandlePress = () => {
    const data = [{phone: '1234567890', name: 'Alex Morrison'}];
    setState({data: data});
  };

  /**
   * @function customerCode
   * @description it will use to set the hardcoded customer code in state.
   */
  const customerCode = () => {
    setState({code: '1234'});
  };
  return (
    <Box flex={1} backgroundColor="support14">
      <Header
        title="Job"
        right={() => {
          return <Image source={Search} />;
        }}
      />
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
            <JobListRender
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
        style={styles.modalStyle}
        animationType="slide"
        transparent={true}
        visible={state.modal}
        onRequestClose={() => {
          setState({modal: !state.modal});
        }}>
        <Box
          borderRadius={12}
          backgroundColor="support7"
          width={'90%'}
          alignSelf="center">
          <Text textAlign="center" pt="l" variant="support820meduim">
            Assign Contractor
          </Text>
          <TouchableOpacity
            style={styles.imageView}
            onPress={() => setState({modal: false})}>
            <Image source={Cross} style={styles.cross} />
          </TouchableOpacity>
          <Box marginVertical="xxl" justifyContent="center">
            <Input
              title="Phone Number"
              value={state.phoneNumber}
              onChangeText={text => setState({phoneNumber: text})}
              style={styles.inputPhone}
            />
          </Box>
          {state.code !== '' && (
            <Input
              title="Customer Code"
              value={state.phoneNumber}
              onChangeText={text => setState({phoneNumber: text})}
              style={styles.inputCode}
            />
          )}
          {state.data && (
            <FlatList
              data={state.data}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                styles.flalistConatiner,
                {marginVertical: 20},
              ]}
              renderItem={({item, index}) => {
                return (
                  <Box
                    alignSelf="center"
                    justifyContent="center"
                    alignItems="center"
                    height={131}
                    width={'90%'}
                    borderColor="support11"
                    borderWidth={1}
                    flexDirection="row"
                    borderRadius={12}>
                    <Image style={styles.image} />
                    <Box>
                      <Text pl="xl" variant="support1516medium">
                        {item.name}
                      </Text>
                      <Text
                        pl="xl"
                        paddingVertical="m"
                        variant="support1512regular">
                        {item.phone}
                      </Text>
                      <Box height={40}>
                        <Button
                          onPress={() => customerCode()}
                          buttonStyle={styles.assignButton}
                          label="Assign"
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          {state.data.length === 0 && (
            <Box marginVertical="xxxl">
              <Button
                onPress={() => onHandlePress()}
                buttonStyle={styles.search}
                label="Search Contractor"
              />
            </Box>
          )}
        </Box>
      </Modal>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateJob')}
        style={styles.createjob}>
        <Text variant="support717regular">+ Create job</Text>
      </TouchableOpacity>
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
  modalStyle: {margin: 0, backgroundColor: 'rgba(0,0,0,0.5)'},
  imageView: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  cross: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
  inputPhone: {width: '90%'},
  inputCode: {width: '40%'},
  image: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: palette.primary2,
  },
  assignButton: {width: 150, height: 30},
  search: {width: 300},
});
