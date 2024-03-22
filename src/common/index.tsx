import {navigate} from 'navigation/navigationRef';
import {Dimensions, Platform, Share} from 'react-native';
import {toErrorWithMessage} from './exceptions';
import {htmlToComponents} from './renderUtils';

/**
 * Get the available screen height
 * @returns {number} available screen height
 */
const getScreenHeight = () => {
  return Dimensions.get('screen').height;
};

const share = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

/**
 * Get the available screen width
 * @returns {number} available screen width
 */
const getScreenWidth = () => {
  return Dimensions.get('screen').width;
};

/**
 * Get the available screen width without main container padding
 * @returns {number} available width
 */
const getContentWidth = () => {
  return Dimensions.get('screen').width - getMainContentPadding() * 2;
};

/**
 * Defines the apps main container padding
 * @returns {number} app main container padding
 */
const getMainContentPadding = () => {
  return 18.5;
};

/**
 * Generate a unique string id
 * @param prefix string
 * @returns random id
 */
const uuid = (prefix: string) => {
  return prefix + Math.random().toString(16).slice(-4);
};

/**
 * Helper function to create a short excerpt by text and text limit
 * @param {string} text the text you want to shorten
 * @param {number} count the number of charachters to return
 * @param {string} moreText the "read more" text
 * @returns {string} the shortened string generated
 */
const limitText = (
  text: string,
  count: number,
  moreText: string | null | undefined = '',
) => {
  return text.length > count ? `${text.slice(0, count)}${moreText}` : text;
};

/**
 * Get the height of the bottom menu
 * @returns {number}
 */
const getBottomMenuHeight = () => {
  return 78;
};

/**
 * Get the height of the header banner
 * @returns {number}
 */
const getTopBannerHeight = () => {
  return 192;
};

const log = (...args) => {
  console.log(...args);
};

const removeDuplicates = (array: any[], key: string) => {
  const uniqueValues = new Set();
  return array.filter(item => {
    const isDuplicate = uniqueValues.has(item[key]);
    if (!isDuplicate) {
      uniqueValues.add(item[key]);
      return true;
    }
    return false;
  });
};

/**
 * Logout user and navigate to login page
 */
const logoutUser = () => {
  navigate('Login');
};

/**
 * Replace html elements to display with react native components
 * @param html raw html content
 */
const formatHtml = (html: string) => {
  if (!html) return '';

  let newHtml: string = html;

  const regex = [
    {
      regex: /<br\s*[\/]?>/gi,
      replace: '\n',
    },
  ];

  regex.forEach(regexItem => {
    newHtml = newHtml.replace(
      new RegExp(regexItem.regex, 'gi'),
      regexItem.replace,
    );
  });

  return htmlToComponents(newHtml);
};

const isIos = () => {
  return Platform.OS === 'ios';
};

const uriToBlob = (uri: string) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      // On load, resolve the promise with the blob
      resolve(xhr.response);
    };
    xhr.onerror = reject;
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send();
  });
};

function determineImageType(uri: string) {
  const fileExtension = uri.split('.')?.pop()?.toLowerCase();
  switch (fileExtension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'bmp':
      return 'image/bmp';
    case 'tiff':
    case 'tif':
      return 'image/tiff';
    case 'webp':
      return 'image/webp';
    case 'heic':
      return 'image/heic';
    case 'heif':
      return 'image/heif';
    default:
      return 'application/octet-stream';
  }
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

export {
  isIos,
  emailRegex,
  getScreenHeight,
  getScreenWidth,
  getBottomMenuHeight,
  getTopBannerHeight,
  toErrorWithMessage,
  log,
  formatHtml,
  limitText,
  uuid,
  getContentWidth,
  logoutUser,
  getMainContentPadding,
  share,
  uriToBlob,
  removeDuplicates,
  determineImageType,
};
