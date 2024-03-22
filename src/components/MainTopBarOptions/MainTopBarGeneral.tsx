import useTheme from 'common/Hooks/useTheme';
import RightMenuButton from 'components/RightMenuButton';
import React from 'react';
import { Image, View } from 'react-native';
import { MainTopBarStyle as styles } from './MainTopBarStyle';

const MainTopBarGeneral = () => {

  const {images} = useTheme();

  const SplashText = images.logo;

  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.rightContainer}>
         <RightMenuButton />
      </View>
      <Image source={SplashText} style={styles.logo} />
      <View style={styles.leftContainer}/>
    </View>
  );
};

export default MainTopBarGeneral;
