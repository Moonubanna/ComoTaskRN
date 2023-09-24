import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Modal} from 'react-native';
import {DIMENS} from '../../constants';
import {colors} from './../resources/theme';

export default class Loader extends Component {
  render() {
    const {loader} = this.props;
    return (
      <Modal
        visible={loader}
        //animationType={'slide'}
        style={{borderWidth: 3, borderColor: 'red'}}
        transparent={true}>
        <View style={styles.container}>
          <ActivityIndicator
            color={colors.black}
            size="large"
            style={{alignSelf: 'center'}}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.transparent,
  },
});
