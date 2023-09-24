This application will work on both platform android and iOS and also i am adding video of working functionality can check on 'screenshot_videos' folder.

API'S NAME:

1. SCAN QR CODE API: https://skybuzz247.com/api/v5/qrcode?id=1
2. SCAN LIST API: https://skybuzz247.com/api/v5/scans?id=1


IF YOU FACING BELOW ISSUE THEN RESOLVE THROUGH STEPS AND TRY TO RUN THE APPLICATION:

1. if issue occure like: 'ViewPropTypes has been removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'

then do little change in library react-native-camera, inside this library src folder select this file:
RNCamera.js and add this line on top: 
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
and remove ViewPropTypes from react-native;

2. If facing issue of 'For IOS getting ERROR TypeError: null is not an object evaluating 'NativeModule.requestPermission'

run this script using command "npm run remove_PermissionError"

Also can follow below step:
a. Most importantly, remember to add "reactNativePermissionsIOS": ["Camera"] and "postinstall": "react-native setup-ios-permissions && pod-install" to your package.json.
b. Run npm install.
c. Delete node_modules/react-native-qrcode-scanner/node_modules/react-native-permissions because it installs the deprecated 2.0.2. (You'll need to do this each time you clear your node_modules).

ios: 
Bundle Identifier: org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)
org.reactjs.native.example.ComoTask

