import React from 'react';
import { StackNavigator } from 'react-navigation';
import InsightsListView from '../screens/Insights/InsightsListView';
import InsightsDetailView from '../screens/Insights/InsightsDetailView';
import Logo from '../components/Logo';
import styles from './styles';

const PrimaryNav = StackNavigator(
  {
    InsightsListView: {
      screen: InsightsListView,
      navigationOptions: {
        title: null,
        headerLeft: <Logo />,
      },
    },
    InsightsDetailView: {
      screen: InsightsDetailView,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.insight.title.rendered}`,
      }),
    },
  },
  {
    // Default config for all screens
    initialRouteName: 'InsightsListView',
    // headerMode: 'screen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default PrimaryNav;
