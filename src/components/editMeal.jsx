import React, { useState } from 'react';
import {
  Layout,
  Input,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import MEAL from '../defaults/meal';

import FoodSmallCardList from './food/list/smallCardList';

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
    paddingTop: 16,
  },
  inputWrapper: {
    paddingHorizontal: 12,
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
