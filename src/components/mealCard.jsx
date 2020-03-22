import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  Button,
  Icon,
  Divider,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import Card from './card';

import Food from './food';
import Total from './food/total';

import MEAL from '../defaults/meal';
import FoodHeader from './food/header';

const EditIcon = (style) => <Icon {...style} name="edit-outline" />;
const DeleteIcon = (style) => <Icon {...style} name="trash-2-outline" />;

const MealCard = (props) => {
  const { containerStyle, meal } = props;
  const styles = useStyleSheet(themedStyles);

  const renderFoods = () => {
    const foods = meal.foods.map((food, index) => (
      <Food key={`${food.name}-${index}`} food={food} />
    ));
    return foods;
  };

  return (
    <Layout style={containerStyle}>
      <Card hasTopLine>
        <Layout style={styles.header}>
          <Text style={styles.title}>{meal.name}</Text>
        </Layout>
        <Divider />
        <Layout style={styles.body}>
          <FoodHeader />
          {renderFoods()}
          <Total values={meal.totalValues} />
        </Layout>
        <Layout style={styles.footer}>
          <Button appearance="ghost" style={styles.button} icon={EditIcon} />
          <Button appearance="ghost" style={styles.button} icon={DeleteIcon} />
        </Layout>
      </Card>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  header: {
    flex: 3,
    paddingLeft: 20,
    marginVertical: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  button: {
    flex: 1,
    borderRadius: 0,
  },
});

MealCard.propTypes = {
  containerStyle: PropTypes.object.isRequired,
  meal: MEAL.propType,
};

MealCard.defaultProps = {
  meal: MEAL.defaultProp,
};

export default MealCard;
