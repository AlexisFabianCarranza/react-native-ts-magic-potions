import 'react-native-gesture-handler';
import React from 'react';
import PotionProvider from './src/contexts/PotionContext';
import Router from './src/components/Router';
import Loading from './src/components/Loading';
import {LoadingProvider} from './src/contexts/LoadingContext';

const App = () => {
  return (
    <PotionProvider>
      <LoadingProvider>
        <Loading />
        <Router />
      </LoadingProvider>
    </PotionProvider>
  );
};

export default App;
