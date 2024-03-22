import {
  getBottomMenuHeight,
  getMainContentPadding,
  getScreenHeight,
  getTopBannerHeight,
} from 'common';
import {Colors} from 'common/Theme/Variables';

import {StyleSheet} from 'react-native';

export const mainContainerStyles = StyleSheet.create({
  topMenu: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
    width: '100%',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: getBottomMenuHeight(),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  scrollView: {
    height: getScreenHeight() - getTopBannerHeight(),
  },
  contentView: {
    paddingBottom: getBottomMenuHeight() * 2,
    flexDirection: 'column',
    direction: 'rtl',
  },
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.nativeBackgroundColor,
  },
  mainView: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: getMainContentPadding(),
    overflow: 'visible',
    backgroundColor: Colors.nativeBackgroundColor,
  },
  banner: {
    height: 190,
  },
  bgRed: {
    marginTop: 50,
  },
});
