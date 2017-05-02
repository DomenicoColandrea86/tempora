import { StackNavigator } from 'react-navigation';
import InsightsListView from '../screens/Insights/InsightsListView';
import InsightsDetailView from '../screens/Insights/InsightsDetailView';
// import styles from './styles';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    InsightsListView: {
      screen: InsightsListView,
      navigationOptions: {
        title: 'RCA Insights',
      },
    },
    InsightsDetailView: {
      screen: InsightsDetailView,
      navigationOptions: {
        title: 'Detail',
      },
    },
  },
  {
    // Default config for all screens
    initialRouteName: 'InsightsListView',
    // headerMode: 'none',
    navigationOptions: {
      // headerStyle: styles.header,
    },
  },
);

export default PrimaryNav;
