import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Button,
  Icon,
  Divider,
  StyleService,
  useStyleSheet,
  Text,
} from '@ui-kitten/components';
import Card from '../../card';
import Food from '../index';

import FOOD from '../../../defaults/food';

const FoodCardSmall = (props) => {
  const { containerStyle, food } = props;
  const styles = useStyleSheet(themedStyles);

  const EditIcon = (style) => <Icon {...style} name="edit-outline" />;

  const AddIcon = (style) => <Icon {...style} name="plus-outline" />;

  return (
    <Layout style={containerStyle}>
      <Card
        containerStyle={styles.card}
        hasTopLine
      >
        <Food food={food} />
      </Card>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  card: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  button: {
    flex: 1,
    borderRadius: 0,
  },
});

FoodCardSmall.propTypes = {
  containerStyle: PropTypes.object.isRequired,
  food: FOOD.propType,
};

FoodCardSmall.defaultProps = {
  food: FOOD.defaultProp,
};

export default FoodCardSmall;
