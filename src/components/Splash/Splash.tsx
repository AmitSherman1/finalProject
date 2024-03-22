import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {View, Image} from 'react-native';
import {SplashStyles as splashStyles} from './Splash.style';

const SplashComponent = () => {
  const {images} = useTheme();

  const SplashLogo = images.splash;

  return (
    <View style={splashStyles.mainView}>
      <Image source={SplashLogo} style={splashStyles.mainImage} />
    </View>
  );
};

export default SplashComponent;
