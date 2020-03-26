import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Icon,
  Text,
  Button,
  Divider,
  Input,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import MEAL from '../defaults/meal';

import FoodSmallCardList from './food/list/smallCardList';

const AddIcon = (style) => <Icon {...style} name="checkmark-outline" />;
const ExploreMealsIcon = (style) => <Icon {...style} name="globe-2-outline" />;

const EditMeal = (props) => {
  const { meal } = props;
  const { name, foods } = meal;
  const styles = useStyleSheet(themedStyles);

  const [mealName, setMealName] = useState(name);
  return (
    <Layout style={styles.container}>
      <Layout style={styles.inputWrapper}>
        <Input
          value={mealName}
          onChangeText={(text) => setMealName(text)}
          placeholder="Meal Name"
          textStyle={styles.inputText}
        />
      </Layout>
      <Layout style={styles.foodList}>
        <FoodSmallCardList foods={foods} />
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  inputWrapper: {

  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  food: {
    marginBottom: 12,
  },
  foodList: {
    flex: 1,
  },
});

EditMeal.propTypes = {
  meal: MEAL.propType.isRequired,
};

EditMeal.defaultProps = {};

export default EditMeal;
