import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import QRCodeScannerCamera from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Modal from 'react-native-modal';
import {cameraPermission} from '../../utils';
import {colors} from '../resources/theme';

const QRCodeScanner = ({
  isQRCodeVisible = false,
  closeOpenQRCodeScanner = () => {},
  qrScanDataReturn = (scanData: object) => {},
}) => {
  useEffect(() => {
    cameraPermission();
  }, []);
  const onSuccess = (e: object) => {
    qrScanDataReturn(e.data);
  };

  return (
    <Modal
      animationType={'none'}
      visible={isQRCodeVisible}
      transparent
      onRequestClose={closeOpenQRCodeScanner}
      supportedOrientations={[
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]}
      style={{margin: 0}}>
      <View style={qRCodeScannerStyles.qRCScannerContainer}>
        <View style={{flex: 1}}>
          <QRCodeScannerCamera
            vibrate={false}
            reactivate={true}
            onRead={e => onSuccess(e)}
            flashMode={RNCamera.Constants.FlashMode.off}
            cameraStyle={{height: '100%', width: '100%'}}
          />
          <TouchableOpacity
            style={qRCodeScannerStyles.qRCScannerClose}
            onPress={() => closeOpenQRCodeScanner()}>
            <Text style={qRCodeScannerStyles.textClose}>{'Close'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const qRCodeScannerStyles = StyleSheet.create({
  qRCScannerContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  qRCScannerClose: {
    position: 'absolute',
    top: 50,
    right: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  textClose: {
    color: colors.black,
    fontSize: 9,
    fontWeight: '700',
  },
});

export default QRCodeScanner;
