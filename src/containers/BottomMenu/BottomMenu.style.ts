import {Colors} from 'common/Theme/Variables';
import {StyleSheet} from 'react-native';

export const BottomMenuStyle = StyleSheet.create({
  mainBottomMenuContainer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: Colors.mainBottomBar,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
