import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Image,
} from 'react-native';
import {
  DIMENS,
  SCREEN,
} from './../constants';
import {Provider} from 'react-redux';
import Store from './../redux/store';
import {colors} from './../common/resources/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//screens
import Splash from '../common/components/AuthLoadingScreen';
import ScanGo from '../screens/scango';
//Libraries
import NetInfo from '@react-native-community/netinfo';
import NoInternetLoader from './../common/components/NoInternetLoader';

const store = Store();
let netInfoUnsubscribe: any = null;
const Routes = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.fetch().then(state => {});
    netInfoUnsubscribe = NetInfo.addEventListener(netInfoHandler);
    return () => {
      if (netInfoUnsubscribe) {
        netInfoHandler;
      }
    };
  }, []);

  const netInfoHandler = (info: any) => {
    if (!info?.isConnected) {
      setIsConnected(false);
    } else {
      setIsConnected(true);
    }
  };
  const RootStack = createStackNavigator();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Provider store={store}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.color_primary}
        />
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{animationEnabled: false, headerShown: false}}
            initialRouteName="Splash">
            <RootStack.Screen
              name={SCREEN.SCREEN_SPLASH}
              component={Splash}
            />
            <RootStack.Screen
              name={SCREEN.SCREEN_SCANGO}
              component={ScanGo}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
      {!isConnected && <NoInternetLoader loader={!isConnected} />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.color_primary,
  },
});
export default Routes;
