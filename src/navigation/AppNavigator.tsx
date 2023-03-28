import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import HomeScreen from '../views/Home';
import {RootStackParamList} from './types';
import InfoScreen from '../views/Info';
import Screen from '../components/Screen';
import colors from '../styles/colors';
import {fontFamily, fontSizes} from '../styles/fonts';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Screen>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.HOME}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.INFO}
            component={InfoScreen}
            options={{
              title: 'User Info',
              headerTintColor: colors.background,
              headerStyle: {backgroundColor: colors.headerBg},
              headerTitleStyle: {
                fontFamily: fontFamily.semiBold,
                fontSize: fontSizes.fontSize_14,
              },
            }}
          />
        </Stack.Navigator>
      </Screen>
    </NavigationContainer>
  );
};

export default AppNavigator;
