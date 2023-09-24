import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {colors} from '../../../common/resources/theme';
const ButtonComponent = ({name = '', onPressButton = () =>{}}) => {
  return (
    <Pressable
      onPress={() => onPressButton()}
      style={({ pressed }) => [
      styles.buttonComponent,
                  {
                     opacity: pressed ? 0.5 : 1,
          width: '50%',
          backgroundColor: colors.green500,
                  },
                ]}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
};
export default ButtonComponent;

const styles = StyleSheet.create({
  buttonComponent: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.black
  },
  buttonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
});
