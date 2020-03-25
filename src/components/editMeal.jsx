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

const AddIcon = (style) => <Icon {...style} name="checkmark-outline" />;
const ExploreMealsIcon = (style) => <Icon {...style} name="globe-2-outline" />;

const EditMeal = (props) => {
  const { meal } = props;
  const styles = useStyleSheet(themedStyles);

  const [mealName, setMealName] = useState(meal.name);

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
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  inputWrapper: {
    flex: 1,
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

EditMeal.propTypes = {
  meal: MEAL.propType.isRequired,
};

EditMeal.defaultProps = {};

export default EditMeal;
