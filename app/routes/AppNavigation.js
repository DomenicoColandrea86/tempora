/* eslint react/prop-types: 0 */
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InsightsListView from '../screens/Insights/InsightsListView';
import InsightsDetailView from '../screens/Insights/InsightsDetailView';
import PropertiesSearchView from '../screens/Properties/Search/SearchView';
import Logo from '../components/Logo';
import styles from './styles';

const InsightsTab = StackNavigator(
  {
    InsightsListView: {
      screen: InsightsListView,
      navigationOptions: {
        title: null,
        headerStyle: styles.header,
        headerLeft: <Logo />,
      },
    },
    InsightsDetailView: {
      screen: InsightsDetailView,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.insight.title.rendered}`,
        headerStyle: styles.header,
        tabBarVisible: false,
      }),
    },
  },
  // {
  //   // Default config for all screens
  //   initialRouteName: 'PropertiesSearchView',
  //   navigationOptions: {
  //     headerStyle: styles.header,
  //   },
  // },
);

const PropertiesSearchTab = StackNavigator({
  PropertiesSearchView: {
    screen: PropertiesSearchView,
    navigationOptions: {
      title: null,
      headerLeft: <Logo />,
      headerStyle: styles.header,
    },
  },
});

const StacksInTabs = TabNavigator(
  {
    InsightsTab: {
      screen: InsightsTab,
      path: '/insights',
      navigationOptions: {
        tabBarLabel: 'Insights',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            style={{ color: tintColor }}
            size={26}
            name={focused ? 'ios-list' : 'ios-list-outline'}
          />
        ),
      },
    },
    PropertiesSearchTab: {
      screen: PropertiesSearchTab,
      path: '/properties/search',
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            style={{ color: tintColor }}
            size={26}
            name={focused ? 'ios-pin' : 'ios-pin-outline'}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      style: styles.header,
    },
  },
);

export default StacksInTabs;
