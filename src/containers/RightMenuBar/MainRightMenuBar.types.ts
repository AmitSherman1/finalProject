export type MainRightMenuBarProps = {
  navigation?: {
    closeDrawer: () => void;
  };
};

export type RightMenuItem = {
  type: string;
  title?: string | JSX.Element;
  onPress?: () => void;
  bold?: boolean;
  subMenu?: JSX.Element[];
  hidden?: boolean;
};

export type NavigationButtonTypes = {
  onPress: () => void;
  text: string;
};
