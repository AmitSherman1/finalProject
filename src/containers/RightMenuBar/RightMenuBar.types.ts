import {DrawerScreenProps} from '@react-navigation/drawer';
import {ScreensParamList} from 'navigation/ScreenNames.types';

type ProfileScreenNavigationProp = DrawerScreenProps<
  ScreensParamList,
  'LoginWithFaceid'
>;
export type RightMenuBarProps = {
  value: string | undefined | JSX.Element;
  image?: any;
  onPress?: () => void;
  bold?: boolean;
  size?: number;
  navigation?: ProfileScreenNavigationProp;
};
