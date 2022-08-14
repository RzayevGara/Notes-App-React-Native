import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
//screens
import HomeScreen from './screens/Home';
import NotesScreen from './screens/Notes';

let persistor = persistStore(store);

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'My Notes',
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Notes"
              component={NotesScreen}
              options={{
                title: 'Type Notes',
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
