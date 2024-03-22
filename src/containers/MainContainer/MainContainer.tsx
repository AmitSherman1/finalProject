import {navigationRef} from 'navigation/navigationRef';
import React, {useContext, useEffect, useState} from 'react';
import {Animated, SafeAreaView, View} from 'react-native';
import {mainContainerStyles} from './MainContainer.style';
import {MainContainerProps} from './MainContainer.types';
import BottomMenu from 'containers/BottomMenu/BottomMenu';

const MainContainer = (props: MainContainerProps) => {
  const {
    children,
    noPad,
    style,
    isFooterShown = true,
    scrollEnabled = true,
  } = props;
  const footerShown = navigationRef?.getCurrentRoute()?.params?.footerShown;
  const name = navigationRef?.getCurrentRoute()?.name;

  const [showFooter, setShowFooter] = useState<boolean | undefined>(false);
  const [routeName, setRouteName] = useState<string | undefined>(undefined);

  useEffect(() => {
    navigationRef.addListener('state', () => {
      const footerShown = navigationRef?.getCurrentRoute()?.params?.footerShown;
      name !== routeName && setRouteName(name);
      footerShown !== showFooter && setShowFooter(footerShown);
    });
  }, [showFooter]);

  const mainViewStyle = [
    noPad
      ? {...mainContainerStyles.mainView, padding: 0}
      : mainContainerStyles.mainView,
  ];

  return (
    <View style={style}>
      {/* <LinearGradient useAngle angle={180} colors={['#c6d3f7', '#fff']}>
      </LinearGradient> */}
      <SafeAreaView style={[mainContainerStyles.bg]}>
        <Animated.ScrollView
          scrollEnabled={scrollEnabled}
          style={mainViewStyle}
          contentContainerStyle={{
            paddingBottom: footerShown ? 130 : 20,
          }}>
          {children}
        </Animated.ScrollView>
      </SafeAreaView>
      <BottomMenu />
    </View>
  );
};

export default MainContainer;
