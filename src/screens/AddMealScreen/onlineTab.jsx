import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const OnlineTab = (props) => (
  <Layout style={styles.container}>
    <Text> Online Tab</Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default OnlineTab;
