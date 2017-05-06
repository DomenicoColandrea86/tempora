import React from 'react';
import { Animated, Image } from 'react-native';
import { Images } from '../../ui';
import styles from './styles';

const Logo = function Logo() {
  return (
    <Animated.View style={styles.container}>
      <Image style={styles.logo} source={Images.logo} />
    </Animated.View>
  );
};

export default Logo;
