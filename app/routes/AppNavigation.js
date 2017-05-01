import { StackNavigator } from 'react-navigation';
import InsightsListView from '../screens/Insights/InsightsListView';
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
