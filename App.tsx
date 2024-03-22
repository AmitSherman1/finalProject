import React from 'react';
import ErrorBoundary from './src/common/Components/ErrorBoundary';
import AppNavigation from './src/navigation/AppNavigation';
import {KeyboardAvoidingView} from 'react-native';
import {Provider} from 'react-redux';
import {globalStore} from './src/store/globalStore';
import FallbackComponent from 'common/Components/FallbackComponent';

const App = () => {
  const errorHandler = (
    current: ErrorBoundary,
    error: null | Error,
    stack: string,
  ) => {
    console.log(stack);
  };

  return (
    <Provider store={globalStore}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <ErrorBoundary
            FallbackComponent={FallbackComponent}
            onError={errorHandler}>
            <AppNavigation />
          </ErrorBoundary>
        </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
