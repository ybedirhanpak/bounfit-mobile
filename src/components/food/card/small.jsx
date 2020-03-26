import React from 'react';
import PropTypes from 'prop-types';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import Card from '../../card';
import Food from '../index';

import FOOD from '../../../defaults/food';

const FoodCardSmall = (props) => {
  const { containerStyle, food } = props;
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={containerStyle}>
      <Card containerStyle={styles.card} hasTopLine>
        <Layout style={styles.body}>
          <Food food={food} />
        </Layout>
      </Card>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  card: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
});

FoodCardSmall.propTypes = {
  containerStyle: PropTypes.object.isRequired,
  food: FOOD.propType,
};

FoodCardSmall.defaultProps = {
  food: FOOD.defaultProp,
};

export default FoodCardSmall;
