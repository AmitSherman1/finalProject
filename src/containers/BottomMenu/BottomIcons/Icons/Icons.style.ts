import {Colors} from 'common/Theme/Variables';
import {StyleSheet} from 'react-native';

export const IconsStyle = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colors.switchIndicatorSecondary,
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
