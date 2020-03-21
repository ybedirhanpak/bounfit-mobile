import React from 'react';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

const MealTotalInfo = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.card}>
      <Layout style={styles.infoGroup}>
        <Layout style={styles.info}>
          <Text style={styles.title}>Protein</Text>
          <Text style={styles.amount}>100 gr</Text>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.title}>Carb</Text>
          <Text style={styles.amount}>100 gr</Text>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.title}>Fat</Text>
          <Text style={styles.amount}>100 gr</Text>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.title}>Calories</Text>
          <Text style={styles.amount}>100 kcal</Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  card: {
    height: 70,
    paddingTop: 15,
    paddingHorizontal: 30,
  },
  infoGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 13,
  },
});

export default MealTotalInfo;
