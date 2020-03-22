import React, { useState } from 'react';
import { connect } from 'react-redux';
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

import { createUserMeal } from '../../state/actions/user';

const AddIcon = (style) => <Icon {...style} name="checkmark-outline" />;

const CreateMeal = (props) => {
  const { createMeal, closeModal } = props;
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
    if (meal.name) { createMeal(meal); }
    closeModal();
  };

  return (
    <Layout style={styles.modalContainer}>
      <Layout style={styles.head}>
        <Text style={styles.header}>Create A Meal</Text>
        <Divider />
      </Layout>
      <Layout style={styles.body}>
        <Layout style={styles.inputWrapper}>
          <Input onChangeText={(text) => setMealName(text)} />
        </Layout>
        <Layout>
          <Button
            appearance="ghost"
            icon={AddIcon}
            onPress={onCheckPressed}
          />
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
    paddingBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
  },
  inputWrapper: {
    flex: 1,
    paddingLeft: 16,
  },
});

CreateMeal.propTypes = {
  createMeal: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
};

CreateMeal.defaultProps = {
  closeModal: undefined,
};

const mapDispatchToProps = (dispatch) => ({
  createMeal: (meal) => dispatch(createUserMeal(meal)),
});

export default connect(null, mapDispatchToProps)(CreateMeal);
