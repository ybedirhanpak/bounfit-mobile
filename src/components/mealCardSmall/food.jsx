import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

const Food = (props) => {
  const { food, total } = props;
  const { name, protein, carb, fat, calories } = food;
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.food}>
      {total && <Text style={styles.total}>Total</Text>}
      {!total && <Text style={styles.name}>{name}</Text>}
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
  food: PropTypes.object.isRequired,
  total: PropTypes.bool,
};

Food.defaultProps = {
  total: false,
};

export default Food;
