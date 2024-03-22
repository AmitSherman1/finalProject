import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {useGetUserQuery} from 'store/UserSlice/UserApi/UserApi';
import SplashComponent from '../../components/Splash/Splash';
import {SplashProps, SplashRouteParamsList} from './Splash.types';
import {setUser} from 'store/UserSlice/UserData/UserData';
import {useDispatch} from 'react-redux';

const Splash = (props: SplashProps) => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const route: RouteProp<SplashRouteParamsList, 'params'> = useRoute();

  const params = route?.params;
  const initialComponent = params && params.initialComponent;

  const navigateToFirstScreen = useCallback(() => {
    initialComponent && navigation.replace(initialComponent as never);
  }, [initialComponent, navigation]);

  useEffect(() => {
    setTimeout(() => navigateToFirstScreen(), 1500);
  }, [navigateToFirstScreen]);

  return <SplashComponent />;
};
export default Splash;
