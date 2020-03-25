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

const AddIcon = (style) => <Icon {...style} name="checkmark-outline" />;
const ExploreMealsIcon = (style) => <Icon {...style} name="globe-2-outline" />;

const CreateMeal = (props) => {
  const { createMeal, closeModal, navigateExplore, navigateEditMeal } = props;
  const styles = useStyleSheet(themedStyles);

  const [mealName, setMealName] = useState('');

  const onCheckPressed = () => {
    const meal = {
      name: mealName,
      foods: [],
      totalValues: {
        protein: 0,
        carb: 0,
        fat: 0,
        calories: 0,
      },
    };
    if (meal.name) {
      createMeal(meal);
      navigateEditMeal(meal);
    }
    closeModal();
  };

  return (
    <Layout style={styles.modalContainer}>
      <Layout style={styles.head}>
        <Text style={styles.header}>Create a meal</Text>
        <Divider />
      </Layout>
      <Layout style={styles.body}>
        <Layout style={styles.inputWrapper}>
          <Input
            onChangeText={(text) => setMealName(text)}
            placeholder="Meal name"
          />
        </Layout>
        <Layout>
          <Button
            appearance="ghost"
            icon={AddIcon}
            onPress={onCheckPressed}
          />
        </Layout>
      </Layout>
      <Layout style={styles.footer}>
        <Layout style={styles.buttonWrapper}>
          <Button
            appearance="ghost"
            icon={ExploreMealsIcon}
            onPress={() => {
              closeModal();
              navigateExplore();
            }}
          >
            Explore Meals
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'color-basic-400',
    borderWidth: 1,
    borderRadius: 4,
  },
  head: {
    paddingTop: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    paddingBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: 8,
  },
  inputWrapper: {
    flex: 1,
    paddingLeft: 16,
  },
  footer: {
    paddingBottom: 6,
  },
  buttonWrapper: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});

CreateMeal.propTypes = {
  createMeal: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
  navigateExplore: PropTypes.func.isRequired,
  navigateEditMeal: PropTypes.func.isRequired,
};

CreateMeal.defaultProps = {
  closeModal: undefined,
};

export default CreateMeal;
