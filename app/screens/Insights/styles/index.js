import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../ui';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.background,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.brandOrange,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
  },
});
