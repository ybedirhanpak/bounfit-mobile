import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

const MealTotalInfo = (props) => {
  const { values } = props;
  const { protein, carb, fat, calories } = values;
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.card}>
      <Layout style={styles.infoGroup}>
        <Layout style={styles.info}>
          <Text style={styles.title}>Protein</Text>
          <Text style={styles.amount}>{`${protein} gr`}</Text>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.title}>Carb</Text>
          <Text style={styles.amount}>{`${carb} gr`}</Text>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.title}>Fat</Text>
          <Text style={styles.amount}>{`${fat} gr`}</Text>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.title}>Calories</Text>
          <Text style={styles.amount}>{`${calories} kcal`}</Text>
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

MealTotalInfo.propTypes = {
  values: PropTypes.shape({
    protein: PropTypes.number,
    carb: PropTypes.number,
    fat: PropTypes.number,
    calories: PropTypes.number,
  }),
};

MealTotalInfo.defaultProps = {
  values: {
    protein: 0,
    carb: 0,
    fat: 0,
    calories: 0,
  },
};

export default MealTotalInfo;
