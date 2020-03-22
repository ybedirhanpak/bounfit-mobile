import React from 'react';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import VALUES from '../../defaults/values';

const Total = (props) => {
  const { values } = props;
  const { protein, carb, fat, calories } = values;
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.food}>
      <Text style={styles.total}>Total</Text>
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

Total.propTypes = {
  values: VALUES.propType,
};

Total.defaultProps = {
  values: VALUES.defaultProp,
};

export default Total;
