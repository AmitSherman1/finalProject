import {StyleSheet} from 'react-native';
import {Colors} from 'common/Theme/Variables';
import { getScreenHeight } from 'common';

export const RightMenuBarStyle = StyleSheet.create({
  mainViewContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  mainMenuWindowContainer: {
    backgroundColor: Colors.mainRightBar,
    width: 227,
    height: getScreenHeight() - 60,
    paddingHorizontal: 20,
    paddingVertical: 33,
    borderTopStartRadius: 32,
    borderBottomStartRadius: 32,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 5,
  },
  avatarSection: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  navItem: {
    paddingVertical: 10,
  },
  hr: {
    width: 187,
    height: 1,
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logoText: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
