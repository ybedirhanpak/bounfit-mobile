import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { CheckBox, Layout, Text } from '@ui-kitten/components';

const SchoolFood = (props) => {
  const { food } = props;
  const { name, calories } = food;

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <Layout style={styles.container}>
      <CheckBox
        checked={checked}
        onChange={onCheckedChange}
        style={styles.checkbox}
      />
      <Layout style={styles.food}>
        <Text style={styles.foodName}>{name}</Text>
        {calories && <Text style={styles.foodCalories}>{calories}</Text>}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  food: {
    flex: 1,
    justifyContent: 'center',
  },
  foodName: {
    fontSize: 16,
  },
  foodCalories: {
    fontSize: 10,
  },
});

SchoolFood.propTypes = {
  food: PropTypes.object.isRequired,
};

export default SchoolFood;
