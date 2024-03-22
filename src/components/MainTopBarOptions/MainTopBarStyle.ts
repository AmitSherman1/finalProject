import { getContentWidth, getScreenWidth } from 'common';
import {Colors} from 'common/Theme/Variables';

import {StyleSheet} from 'react-native';
// import {notifications} from '../../../Stubs/MockData/notifications';

const width = getContentWidth();

export const MainTopBarStyle = StyleSheet.create({
  mainViewContainer: {
    height: 68,
    width: getScreenWidth(),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.mainTopBar,
    flexDirection: 'row-reverse',
  },
  rightContainer: {
    left: 20,
    flex: 1,
    alignItems: 'flex-end',
  },
  leftContainer: {
    right: 20,
    flex: 1,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    flex: 1,
  },
  back: {
    resizeMode: 'contain',
    width: 15,
    height: 40,
    tintColor: Colors.hamburgerMenu,
  },
});
