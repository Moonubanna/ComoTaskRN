import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
} from 'react-native';
import {colors} from './../resources/theme';
import {DIMENS, WIDTH} from './../../constants';

const NoInternetLoader = ({loader}) => {
  return (
    <Modal
      visible={loader}
      //animationType={'slide'}
      style={{borderWidth: 3, borderColor: 'red'}}
      transparent={true}>
      <View style={styles.container}>
        <View
          style={{
            width: DIMENS.px_100,
            height: DIMENS.px_100,
            backgroundColor: colors.grey600,
          }}
        />
        <Text
          style={{
            fontSize: DIMENS.txt_size_medium_14,
            color: colors.black,
            marginTop: DIMENS.px_20,
          }}
          numberOfLines={2}>
          {'No internet (Please check)'}
        </Text>
      </View>
    </Modal>
  );
};
export default NoInternetLoader;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.color_primary,
  },
});
