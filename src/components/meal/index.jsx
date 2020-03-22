import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import MEAL from '../../defaults/meal';

const Meal = (props) => {
  const { meal } = props;
  const { name, totalValues } = meal;
  const { protein, carb, fat, calories } = totalValues;
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Layout style={styles.infoGroup}>
        <Layout style={styles.info}>
          <Text style={styles.infoHeader}>
            P
          </Text>
          <View style={{ ...styles.textWrapper, backgroundColor: '#eceff1' }}>
            <Text style={styles.infoText}>
              {protein}
            </Text>
          </View>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.infoHeader}>
            C
          </Text>
          <View style={{ ...styles.textWrapper, backgroundColor: '#cfd8dc' }}>
            <Text style={styles.infoText}>
              {carb}
            </Text>
          </View>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.infoHeader}>
            F
          </Text>
          <View style={{ ...styles.textWrapper, backgroundColor: '#eceff1' }}>
            <Text style={styles.infoText}>
              {fat}
            </Text>
          </View>
        </Layout>
        <Layout style={styles.info}>
          <Text style={styles.infoHeader}>
            Cal
          </Text>
          <View style={{ ...styles.textWrapper, backgroundColor: '#cfd8dc' }}>
            <Text style={styles.infoText}>
              {calories}
            </Text>
          </View>
        </Layout>
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    padding: 3,
    marginTop: 3,
  },
  infoHeader: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 12,
  },
});

Meal.propTypes = {
  meal: MEAL.propType,
};

Meal.defaultProps = {
  meal: MEAL.defaultProp,
};

export default Meal;
