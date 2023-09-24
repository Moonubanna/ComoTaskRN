//Error boundaries

import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import {colors} from './../resources/theme';
import Routes from './../../routes';
import {DIMENS} from './../../constants';
class ErrorBoundary extends Component {
  errorname = null;
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // static getDerivedStateFromError(error) {
  //   console.warn('enter_Error', error)
  //   return {
  //     hasError: true,
  //   };
  // }

  componentDidCatch(error, errorInfo) {
    console.log('Error: ' + error);
    console.log('Error Info: ' + JSON.stringify(errorInfo));
    this.errorname = error.toString();
    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true
    },);
  }

  render() {
    if (this.state.hasError) {
      console.log('error', this.errorname);
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{'Oops'}</Text>
          <Text style={styles.subtitle}>{'There an error'}</Text>
          <Text style={styles.error}>{this.errorname}</Text>
        </View>
      );
    }
    return <Routes />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color_primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: DIMENS.txt_size_large_extra_26,
    fontWeight: 'bold',
    color: colors.black,
  },
  subtitle: {
    fontSize: DIMENS.txt_size_large,
    fontWeight: '800',
    color: colors.grey800,
    marginTop: DIMENS.px_10,
  },
  error: {
    marginTop: DIMENS.px_10,
  },
});
export default ErrorBoundary;
