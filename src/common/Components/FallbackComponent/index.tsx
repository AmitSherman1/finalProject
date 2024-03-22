// @flow
// import {BTNPrimary} from 'components/Button/BTNPrimary';

import React, {useCallback} from 'react';
import {Linking, View} from 'react-native';
//import {P, Title} from '../StyledComponents/StyledText';
import {FallbackComponentProps} from './FallbackComponent.types';
import useTheme from '../../Hooks/useTheme';
import MainContainer from '../../../containers/MainContainer';

const FallbackComponent = (props: FallbackComponentProps): JSX.Element => {
  const {error, resetError} = props;

  const supportPhoneNumber = '0545728878';

  // const HeartImg = SvgIcon('heart');

  const makeSupportCall = useCallback(() => {
    Linking.openURL(`tel:${supportPhoneNumber}`);
    resetError();
  }, [resetError]);

  const buttonWrapStyle = {
    width: 163,
    marginTop: 20,
  };

  const marginStyle = {
    marginTop: 20,
  };

  const iconStyle = {
    marginBottom: 20,
  };

  // const errorTitle = strings('generalErrorTitle');

  return (
    <MainContainer>
        <>
          {/* <HeartImg width={60} height={52} style={iconStyle} />
          <Title direction="center" size={18}>
            {errorTitle && errorTitle.replace('{error_number}', '#788')}
          </Title>
          <P direction="center" style={marginStyle}>
            {strings('generalErrorContent')}
          </P>
          <P direction="center">{error.toString()}</P> */}
          <View style={buttonWrapStyle}>
            {/* <BTNPrimary
              containerWidth="100%"
              textAlign="center"
              value={strings('generalErrorButtonText')}
              onPress={makeSupportCall}
            /> */}
          </View>
        </>
    </MainContainer>
  );
};

export default FallbackComponent;
