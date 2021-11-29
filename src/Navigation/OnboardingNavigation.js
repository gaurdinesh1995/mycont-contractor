import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Login from '../Components/Authentication/Login/Login';
import Signup from '../Components/Authentication/Signup/Signup';
import PasswordRecovery from '../Components/Authentication/PasswordRecovery/PasswordRecovery';
import ResetPassword from '../Components/Authentication/ResetPassword/ResetPassword';
import Verify from '../Components/Authentication/VerifyPhoneNumber/VerifyPhoneNumber';
import AuthSuccess from '../Components/Authentication/AuthSuccess/AuthSuccess';
const Stack = createStackNavigator();

const opacityTransition = {
  gestureDirection: 'horizontal', // we will swipe right if we want to close the screen;
  transitionSpec: {
    open: {
      animation: 'timing',
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    }, // updates the opacity depending on the transition progress value of the current screen
  }),
};

export const ModalStack = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      headerMode="none"
      mode="modal"
      screenOptions={{...opacityTransition}}>
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{headerShown: false}}
        initialParams={{space: insets}}
      />
      <Stack.Screen
        name="AuthSuccess"
        component={AuthSuccess}
        options={{headerShown: false}}
        initialParams={{space: insets}}
      />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'Welcome'}>
      <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Signup"
          initialParams={{space: insets}}
          component={Signup}
        />
        <Stack.Screen
          name="Verify"
          initialParams={{space: insets}}
          component={Verify}
        />
        <Stack.Screen
          name="PasswordRecovery"
          initialParams={{space: insets}}
          component={PasswordRecovery}
        />
        <Stack.Screen
          name="ResetPassword"
          initialParams={{space: insets}}
          component={ResetPassword}
        />
      </>
    </Stack.Navigator>
  );
};

export default () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <ModalStack />
      </NavigationContainer>
    </>
  );
};
