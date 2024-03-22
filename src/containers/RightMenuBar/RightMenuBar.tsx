import useTheme from 'common/Hooks/useTheme';
import { navigate } from 'navigation/navigationRef';
import React from 'react';
import { View } from 'react-native';
import { RightMenuBarStyle as styles } from './RightMenuBar.style';

const RightMenuBarComponent = () => {
  const {images} = useTheme();

  const navigationButtons = [
    {
      onPress: () => navigate('Home', {}),
      text: 'בית',
    },
  ];

  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.mainMenuWindowContainer}>

      </View>
    </View>
  );
};

export default RightMenuBarComponent;
