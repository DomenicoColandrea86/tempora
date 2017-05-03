import { StackNavigator } from 'react-navigation';
import InsightsListView from '../screens/Insights/InsightsListView';
import InsightsDetailView from '../screens/Insights/InsightsDetailView';
import styles from './styles';

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
