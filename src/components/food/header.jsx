import React from 'react';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

const FoodHeader = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.food}>
      <Layout style={styles.padding} />
      <Layout style={styles.infoGroup}>
        <Text style={styles.info}>P</Text>
        <Text style={styles.info}>C</Text>
        <Text style={styles.info}>F</Text>
        <Text style={styles.info}>Cal</Text>
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  food: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
  },
  padding: {
    flex: 1,
  },
  infoGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default FoodHeader;
