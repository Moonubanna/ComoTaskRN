import React from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import {colors} from '../../../common/resources/theme';
const TextInputComponent = ({
  value = '',
  onTextChange = (value: string) => { },

}) => {
  return (
    <View style={styles.textInputParentContainer}>
      <Text style={styles.textHeading}>{'Your Name'}</Text>
      <TextInput
        key={'textName'}
        value={value}
        onChangeText={onTextChange}
        keyboardType={'default'}
        returnKeyType={'done'}
        style={styles.textInputTextInput}
        numberOfLines={1}
      />
    </View>
  );
};
export default TextInputComponent;

const styles = StyleSheet.create({
  textInputParentContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  textHeading: {
    color: colors.blue700,
    fontSize: 14,
    fontWeight: '600'
  },
  textInputTextInput: {
    flex: 1,
    height: 50,
    color: colors.black,
    fontSize: 14,
    backgroundColor: colors.white,
    borderColor: colors.blue700,
    borderWidth: 1,
    marginLeft: 15,
    paddingHorizontal: 15
  },
});
