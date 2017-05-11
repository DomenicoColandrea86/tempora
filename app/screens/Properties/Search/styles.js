import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../../ui';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: Colors.background,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
