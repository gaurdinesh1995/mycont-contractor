import React, {useReducer, useState} from 'react';
import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Header} from '../ReusableComponents';
import {createBox, createText} from '@shopify/restyle';
import {palette, TypographyStyles} from '../Theme/Index';
import SearchJob from '../SearchJob/SearchJob';

const Box = createBox();
const Text = createText();

export default ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Search Job'},
    {key: 'second', title: 'Applied Job'},
    {key: 'third', title: 'Job Request'},
  ]);

  const FirstRoute = () => (
    <SearchJob navigation={navigation} button={'first'} />
  );

  const SecondRoute = () => (
    <SearchJob navigation={navigation} button={'second'} />
  );

  const ThirdRoute = () => (
    <SearchJob navigation={navigation} button={'third'} />
  );

  const initialLayout = {width: Dimensions.get('window').width};

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      tabStyle={styles.tab}
      inactiveColor={palette.support12}
      activeColor={palette.support16}
      renderLabel={({route, focused, color}) => (
        <Box
          flex={1}
          width={100}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={12}>
          <Text
            style={{color: focused && color}}
            variant="support1615regular"
            semibold={focused}>
            {route.title}
          </Text>
        </Box>
      )}
    />
  );

  return (
    <Box flex={1}>
      <Header title="Job" />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  indicator: {backgroundColor: palette.support16},
  tabBar: {backgroundColor: palette.support7},
  tab: {width: 120, flex: 1},
});
