import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Layout, Text } from '@ui-kitten/components';
import Card from './card';

const AddMeal = (props) => {
  const { onPress } = props;
  return (
    <Card
      topLine
      active
      onPress={onPress}
    >
      <Layout style={styles.layout}>
        <Text style={styles.text}>
          Add Meal
        </Text>
      </Layout>
    </Card>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
});

AddMeal.propTypes = {
  onPress: PropTypes.func,
};

AddMeal.defaultProps = {
  onPress: undefined,
};

export default AddMeal;
