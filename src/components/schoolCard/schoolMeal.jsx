import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';
import SchoolFood from './schoolFood';

const renderFoodList = (foodList) => {
  const renderedList = foodList.map((food) => (
    <SchoolFood key={`${food.name} - ${Math.random() * 10}`} food={food} />
  ));
  return renderedList;
};

const SchoolMeal = (props) => {
  const { meal } = props;
  const { soup, maincourse, vegetarien, complementary, selective } = meal;
  return (
    <Layout style={styles.container}>
      <Layout style={styles.foodGroup}>
        <SchoolFood food={soup} />
        <Divider style={styles.divider} />
      </Layout>
      <Layout style={styles.foodGroup}>
        <SchoolFood food={maincourse} />
        <SchoolFood food={vegetarien} />
        <Divider style={styles.divider} />
      </Layout>
      {complementary && (
        <Layout style={styles.foodGroup}>
          {renderFoodList(complementary)}
          <Divider style={styles.divider} />
        </Layout>
      )}
      {selective && (
        <Layout style={styles.foodGroup}>{renderFoodList(selective)}</Layout>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foodGroup: {
    flex: 1,
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
  divider: {
    marginTop: 5,
  },
});

SchoolMeal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default SchoolMeal;
