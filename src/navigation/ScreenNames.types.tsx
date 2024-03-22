export const ScreenNames = {
  Home: 'Home',
};

type Keys = keyof typeof ScreenNames;

export type ScreensParamList = {
  Home: undefined;
  [key: (typeof ScreenNames)[Keys]]: undefined;
};
