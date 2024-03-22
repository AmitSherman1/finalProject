import useTheme from 'common/Hooks/useTheme';
import {ScreenNames} from 'navigation/ScreenNames.types';
import {View} from 'react-native';
import BottomIcons from './BottomIcons/BottomIcons';
import {BottomMenuStyle as styles} from './BottomMenu.style';
import {BottomMenuProps} from './BottomMenu.types';
import {navigationRef} from 'navigation/navigationRef';

const BottomMenu = () => {
  const {images} = useTheme();

  const currentRoute = navigationRef?.getCurrentRoute()?.name;

  // const chatsIcon = images.chats;
  // const homeIcon = images.home;
  // const plusIcon = images.plus;
  // const randomChatIcon = images.randomChat;
  // const liveIcon = images.live;

  const activeTab = currentRoute === 'mainDrawer' ? 'Main' : currentRoute;

  // const iconsData = [
  //   {
  //     icon: homeIcon,
  //     navigateTo: ScreenNames.Main,
  //     screenName: 'Main',
  //   },
  //   {
  //     icon: chatsIcon,
  //     navigateTo: ScreenNames.ChatScreen,
  //     screenName: 'ChatScreen',
  //   },
  //   {
  //     icon: plusIcon,
  //     navigateTo: ScreenNames.PostQuestion,
  //     screenName: 'AddPostScreen',
  //   },
  //   {
  //     icon: liveIcon,
  //     navigateTo: ScreenNames.OnBoarding,
  //     screenName: 'LessonsScreen',
  //   },
  //   {
  //     icon: randomChatIcon,
  //     navigateTo: ScreenNames.OnBoarding,
  //     screenName: 'OnBoarding',
  //   },
  // ];

  return (
    <View style={styles.mainBottomMenuContainer}>
      {/* <BottomIcons iconsData={iconsData} activeTab={activeTab} /> */}
    </View>
  );
};

export default BottomMenu;
