

import React from 'react';
import TabNavigator from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store'
import { Provider } from 'react-redux'

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider >

  );
}


export default App;
