import {StyleProp, ViewStyle} from 'react-native';

export type MainContainerProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  noPad?: boolean;
  isFooterShown?: boolean;
  scrollEnabled?: boolean;
};
