import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Navigation from '../../routes/AppNavigation';

// Styles
import styles from './styles';

class RootContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </View>
    );
  }
}

export default connect(null, null)(RootContainer);