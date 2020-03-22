import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import FOOD from '../../defaults/food';

const Food = (props) => {
  const { food, isTotal } = props;
  const { name, total } = food;
  const { values } = total;
  const { protein, carb, fat, calories } = values;
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.food}>
      {isTotal && <Text style={styles.total}>Total</Text>}
      {!isTotal && <Text style={styles.name}>{name}</Text>}
      <Layout style={styles.infoGroup}>
        <Text style={{ ...styles.info, backgroundColor: '#eceff1' }}>
          {protein}
        </Text>
        <Text style={{ ...styles.info, backgroundColor: '#cfd8dc' }}>
          {carb}
        </Text>
        <Text style={{ ...styles.info, backgroundColor: '#eceff1' }}>
          {fat}
        </Text>
        <Text style={{ ...styles.info, backgroundColor: '#cfd8dc' }}>
          {calories}
        </Text>
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
  total: {
    flex: 1,
    fontWeight: 'bold',
  },
  infoGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
  },
});

Food.propTypes = {
  food: FOOD.propType,
  isTotal: PropTypes.bool,
};

Food.defaultProps = {
  food: FOOD.defaultProp,
  isTotal: false,
};

export default Food;
