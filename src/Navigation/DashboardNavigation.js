import React from 'react';
import {Platform, BackHandler, useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawerr from '../Components/Drawer/Drawer';
import {navigationRef} from './RootNavigation';
import Dashboard from '../Components/Dashboard/Dashboard';
import MatchingJobsList from '../Components/MatchingJobsList/MatchingJobsList';
import EditProfile from '../Components/EditProfile/EditProfile';
import JobCategory from '../Components/JobCategory/jobCategory';
import JobList from '../Components/JobList/JobList';
import CreateJob from '../Components/CreateJob/CreateJob';
import Material from '../Components/Material/Material';
import JobSummary from '../Components/JobSummary/JobSummary';
import JobDetailStatus from '../Components/JobDetailStatus/JobDetailStatus';
import JobTabBar from '../Components/JobTabBar/JobTabBar';
import SingleJobDetail from '../Components/SingleJobDetail/SingleJobDetail';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function backButtonHandler() {
  return true;
}
BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

export const DashboardStack = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode={'none'}
      screenOptions={
        Platform.OS === 'ios'
          ? {headerShown: false, gestureEnabled: false}
          : {headerShown: false}
      }>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
        initialParams={{space: insets}}
      />
      <Stack.Screen
        name="MatchingList"
        initialParams={{space: insets}}
        component={MatchingJobsList}
      />
      <Stack.Screen
        name="EditProfile"
        initialParams={{space: insets}}
        component={EditProfile}
      />
      <Stack.Screen
        name="JobCategory"
        initialParams={{space: insets}}
        component={JobCategory}
      />
      <Stack.Screen
        name="JobList"
        initialParams={{space: insets}}
        component={JobList}
      />
      <Stack.Screen
        name="CreateJob"
        initialParams={{space: insets}}
        component={CreateJob}
      />
      <Stack.Screen
        name="Material"
        initialParams={{space: insets}}
        component={Material}
      />
      <Stack.Screen
        name="JobSummary"
        initialParams={{space: insets}}
        component={JobSummary}
      />
      <Stack.Screen
        name="JobDetailStatus"
        initialParams={{space: insets}}
        component={JobDetailStatus}
      />
      <Stack.Screen
        name="JobTabBar"
        initialParams={{space: insets}}
        component={JobTabBar}
      />
      <Stack.Screen
        name="SingleJobDetail"
        initialParams={{space: insets}}
        component={SingleJobDetail}
      />
    </Stack.Navigator>
  );
};

export default () => {
  const dimensions = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          drawerStyle={{width: '70%'}}
          drawerContent={props => <Drawerr {...props} />}>
          <Drawer.Screen name="Feed" component={DashboardStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
