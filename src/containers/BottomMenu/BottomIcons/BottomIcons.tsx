import React from 'react';
import {View} from 'react-native';
import {BottomMenuStyle as styles} from './BottomIcons.style';
import {BottomIconsTypes} from './BottomIcons.types';
import Icons from './Icons/Icons';

const BottomIcons = (props: BottomIconsTypes) => {
  const {iconsData, activeTab = 'Main'} = props;

  return (
    <View style={styles.mainBottomMenuContainer}>
      {iconsData.map(icon => {
        const isActive = icon.screenName === activeTab;
        return <Icons key={icon.icon} {...icon} activeTab={isActive} />;
      })}
    </View>
  );
};

export default BottomIcons;
