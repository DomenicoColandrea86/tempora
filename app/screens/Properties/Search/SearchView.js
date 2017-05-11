import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import MapView from 'react-native-maps';
import styles from './styles';

class SearchView extends React.PureComponent {
  componentDidMount() {
    console.log('SearchView component mounted!');
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled
          showsBuildings
          initialRegion={{
            latitude: 40.737667,
            longitude: -73.992920,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 40.737667, longitude: -73.992920 }}
          />
        </MapView>
      </View>
    );
  }
}

SearchView.propTypes = {};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({}, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
