import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {colors} from './../resources/theme';

import {KEY, SCREEN, DIMENS, WIDTH} from '../../constants';
import * as Utils from '../../utils';

const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    _redirectUsers();
  }, []);

  const _redirectUsers = () => {
    setTimeout(() => {
      Utils.clearStack(navigation, SCREEN.SCREEN_SCANGO);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: DIMENS.px_100,
          height: DIMENS.px_100,
          backgroundColor: colors.grey600,
        }}
      />
      <ActivityIndicator
        color={colors.black}
        size="large"
        style={{bottom: DIMENS.px_20, alignSelf: 'center', position: 'absolute'}}
      />
      <Text style={styles.textName} numberOfLines={1}>
        {'Splash screen'}
      </Text>
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.color_primary,
  },
  textName: {
    color: colors.black,
    fontSize: DIMENS.txt_size_large_extra,
    marginTop: DIMENS.px_15,
  },
});
