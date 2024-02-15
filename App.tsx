

import React from 'react';
import TabNavigator from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  );
}


export default App;
