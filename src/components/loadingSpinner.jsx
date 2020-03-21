import React from 'react';
import { StyleSheet } from 'react-native';
import { Spinner, Layout } from '@ui-kitten/components';

const LoadingSpinner = () => (
  <Layout style={style.layout}>
    <Spinner />
  </Layout>
);

const style = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;
