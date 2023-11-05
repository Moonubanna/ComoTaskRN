import React, {useState, useContext, useEffect} from 'react';
import {Animated, View, Alert, Linking, Platform} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import Communications from 'react-native-communications';
import {BookContext} from '../../contexts';
import * as Handlers from './handlers';
import styles from './styles';
import Loader from '../../common/components/Loader';
import {
  postScanGoRequestDataAction,
  postClearScanGoRequestDataAction,
} from '../../redux/actions';

// Components
import HeaderComponent from './components/HeaderComponent';
//import TextInputComponent from './components/TextInputComponent';
import ButtonComponent from './components/ButtonComponent';
import QRCodeScanner from '../../common/components/QRCodeScanner';
const ScanGo = ({}) => {
  const {navigation, route} = useContext(BookContext);
  const dispatch = useDispatch();
  const {response, loading} = useSelector(
    state => ({
      response: state.postScanGoRequestCasesReducer.response,
      loading: state.postScanGoRequestCasesReducer.loading,
    }),
    shallowEqual,
  );
  const [name, setName] = useState('');
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(false);
  // componentDidMount
  useEffect(() => {
    initilizeData();
  }, []);

  /* Handle scan response  */
  useEffect(() => {
    if (response) {
      console.warn('response__', response)
      sendSMS(response.phoneNumber, `${response.message}${name}`)
    } else if (response && response.error === true) {
      Alert.alert('fail');
    }
  }, [response]);

  const initilizeData = () => {
    dispatch(postClearScanGoRequestDataAction(undefined));
  };

  const nameTextChange = (value: string) => {
    setName(value);
  };
  function callScanGoApi(value: string) {
    let requestObj = {
      scanCode: value,
    };
    Handlers.callScanGoApi(requestObj, dispatch, postScanGoRequestDataAction);
  }
  const presScanButton = () => {
    if (name) closeOpenQRCodeScanner();
    else Alert.alert('Please enter your name.');
  };
  const closeOpenQRCodeScanner = () => setIsQRCodeVisible(!isQRCodeVisible);
  const qrScanDataReturn = async (scanData: string) => {
    console.log('qrScanDataReturn', scanData);
    if (scanData) {
      //Close QR code scanner
      await closeOpenQRCodeScanner();
      callScanGoApi(scanData);
    }
  };
  //This method used for sending sms(Android & iOS)
  const sendSMS = async (phoneNumber: string, message: string) => {
    try {
      if (Platform.OS === 'ios') {
        Communications.text(phoneNumber, message);
      } else {
        const url = `sms:${phoneNumber}?body=${message}`;
        await Linking.openURL(url);
      }
    } catch (err) {
      console.log('Error while sending SMS message: ', err);
    }
  };
  return (
    <Animated.View style={styles.container}>
      <HeaderComponent heading={'Scan & Go'} />
      {/* <View style={styles.subContainer}>
        <TextInputComponent value={name} onTextChange={nameTextChange} />
      </View> */}
      <ButtonComponent name={'Scan QR'} onPressButton={presScanButton} />
      {isQRCodeVisible && (
        <QRCodeScanner
          isQRCodeVisible={isQRCodeVisible}
          closeOpenQRCodeScanner={closeOpenQRCodeScanner}
          qrScanDataReturn={qrScanDataReturn}
        />
      )}
      {loading != undefined && loading && <Loader />}
    </Animated.View>
  );
};

export default ScanGo;
