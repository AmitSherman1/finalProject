import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RightMenuBarStyle} from './RightMenuBar.style';
import {NavigationButtonTypes} from './MainRightMenuBar.types';

const NavigationButton = (props: NavigationButtonTypes) => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity style={RightMenuBarStyle.navItem} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({});
