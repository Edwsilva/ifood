/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
//import { isIphoneX } from 'react-native-iphone-x-helper'

import {icons, COLORS, SIZES, FONTS} from '../constants';

const Restaurant = () => {
  return (
    <View>
      <Text>Restaurant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default Restaurant;
