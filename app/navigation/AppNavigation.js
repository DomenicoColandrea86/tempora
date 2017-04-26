import { StackNavigator } from 'react-navigation';
import InsightsListView from '../containers/InsightsListView';
import styles from './styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  InsightsListView: {
    screen: InsightsListView,
    headerTitle: 'RCA Insights',
  },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'InsightsListView',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
