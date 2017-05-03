import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../ui';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
  },
  section: {
    margin: Metrics.section,
    padding: Metrics.baseMargin,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  },
  thumbnail: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.silver,
  },
});
