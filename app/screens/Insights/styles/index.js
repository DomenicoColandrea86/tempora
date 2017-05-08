import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../../ui';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: 0,
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
