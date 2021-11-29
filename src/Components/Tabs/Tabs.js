import React, {useRef, useReducer, useEffect} from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import style from './style';
import {DashboardStack} from '../../Navigation/DashboardNavigation';
const Tab = createBottomTabNavigator();
const HomeSelected = require('../../assets/Tabs/HomeSelected.png');
const HomeUnselected = require('../../assets/Tabs/HomeUnselected.png');
import {createBox, createText} from '@shopify/restyle';
import {palette} from '../Theme/Index';
const Box = createBox();
const Text = createText();

const tabBarIcon = (focused, name, iconSelected) =>
  focused ? (
    <Box
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderTopColor: palette.secondary,
        borderTopWidth: 2,
        width: 30,
      }}>
      <Image
        source={iconSelected}
        style={{marginTop: 15, tintColor: palette.primary}}
      />
    </Box>
  ) : (
    <Box style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Image source={name} style={{marginTop: 15}} />
    </Box>
  );

const TabContainer = (props) => {
  const {route} = props;
  let param = '';
  if (route && route.params !== undefined) {
    param = route.params.space;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: param && param !== '' ? param.bottom : 0,
      }}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: palette.support,
          inactiveTintColor: palette.support1,
          labelStyle: style.tabBarItemLabel,
          tabStyle: style.tabBarStyle,
          style: style.height_55,
        }}>
        <Tab.Screen
          name="Home"
          component={DashboardStack}
          initialParams={{}}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={DashboardStack}
          initialParams={{}}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({focused}) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={DashboardStack}
          initialParams={{
            space: param,
          }}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({focused}) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={DashboardStack}
          initialParams={{
            space: param,
          }}
          options={{
            tabBarLabel: 'Rewards',
            tabBarIcon: ({focused}) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default TabContainer;
