/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import MapViewDirections from 'react-native-maps-directions';

import {COLORS, FONTS, icons, SIZES} from '../constants';

const OrderDelivery = () => {
  // function renderMap() {
  //   return (
  //     <View style={{...StyleSheet.absoluteFillObject}}>
  //       <MapView style={{flex: 1}} />
  //     </View>
  //   );
  // }

  // return <View style={{flex: 1}}>{renderMap()}</View>;
  return (
    <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{...StyleSheet.absoluteFillObject}}
      region={{
        latitude: -22.9005661,
        longitude: -43.1781185,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}></MapView>
  );
  // <MapView
  //   initialRegion={{
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   }}
  // />
  //);

  //  import React, {useState, useRef, useEffect} from 'react';
  // import {Animated, ScrollView, View} from 'react-native';
  // const OrderDelivery = () => {
  //   const [headerShown, setHeaderShown] = useState(false);
  //   const scrolling = useRef(new Animated.Value(0)).current;
  //   const translation = scrolling.interpolate({
  //     inputRange: [100, 130],
  //     outputRange: [-100, 0],
  //     extrapolate: 'clamp',
  //   });

  //   useEffect(() => {
  //     Animated.timing(translation, {
  //       toValue: headerShown ? 0 : -100,
  //       duration: 250,
  //       useNativeDriver: true,
  //     }).start();
  //   }, [headerShown]);
  //   return (
  //     <>
  //       <View
  //         style={{
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           right: 0,
  //           height: 80,
  //           backgroundColor: 'tomato',
  //           transform: [{translateX: headerShown ? 0 : -100}],
  //         }}
  //       />

  //       <ScrollView
  //         onScroll={Animated.event(
  //           [
  //             {
  //               nativeEvent: {
  //                 contentOffset: {
  //                   y: scrolling,
  //                 },
  //               },
  //             },
  //           ],
  //           {useNativeDriver: true},
  //         )}
  //         // onScroll will be fired every 16ms
  //         scrollEventThrottle={16}
  //         style={{flex: 1}}>
  //         <View style={{flex: 1, height: 1000}} />
  //       </ScrollView>
  //     </>
  //   );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default OrderDelivery;
