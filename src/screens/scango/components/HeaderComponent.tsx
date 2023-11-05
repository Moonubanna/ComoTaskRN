import React, {memo} from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {colors} from '../../../common/resources/theme';
const HeaderComponent = ({ heading = '' }) => {
  return (
    <View style={styles.parentComponent}>
      <Text style={[styles.txtHeading]}>{heading}</Text>
    </View>
  );
};
export default HeaderComponent;

const styles = StyleSheet.create({
  parentComponent: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  txtHeading: {
    color: colors.red500,
    fontSize: 22,
    fontWeight: '600',
  },
});
