import { Alert, Platform } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
/**
 * Navigate to route
 * @param {NavigationNavigateActionPayload} params
 */
export const navigate = (navigation: any, screen: any) => {
  navigation.navigate(screen);
};

/**
 * Navigate to route
 * @param {NavigationNavigateActionPayload} params
 */
export const navigateWithParams = (
  navigation: any,
  screen: any,
  params: any,
) => {
  navigation.navigate(screen, params);
};

/**
 * Navigate back to previous route in history
 */
export const back = (navigation: any) => {
  navigation.goBack();
};

/* Clear Stack */
export const clearStack = (navigation: any, screenName: any) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: screenName}],
  });
  navigation.dispatch(resetAction);
};


export const cameraPermission = () => {
  const permission: 'android.permission.CAMERA' | 'ios.permission.CAMERA' =
    Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    })!;
  // check(PERMISSIONS.IOS.CAMERA)
  check(permission)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
        case RESULTS.DENIED:
        case RESULTS.LIMITED:
        case RESULTS.BLOCKED:
          //request(PERMISSIONS.IOS.CAMERA).then((result) => {
          request(permission).then(result => {
            if (result === 'granted') return true;
            else
              Alert.alert(
                'Camera access needed',
                'Go to Settings > RN Architecture > Allow to access camera ',
                [
                  {
                    text: 'Ok',
                    style: 'default',
                    onPress: () => openSettings(),
                  },
                  {
                    text: 'Cancel',
                    style: 'destructive',
                  },
                ],
              );
          });
          break;
        case RESULTS.GRANTED:
          if (RESULTS.GRANTED) {
            return true;
          }
          break;
      }
    })
    .catch(error => {
      throw Error('@checkCameraPermission error => ', error);
    });
};