import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../common/resources/theme';
import {WIDTH} from '../../constants';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color_primary,
    paddingVertical: 15
  },
  subContainer: {
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
