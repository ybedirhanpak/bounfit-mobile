import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Button,
  Icon,
  Divider,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import Card from './card';
import Meal from './meal';

import MEAL from '../defaults/meal';

const MealCardSmall = (props) => {
  const { containerStyle, meal, onAddPress, onEditPress } = props;
  const styles = useStyleSheet(themedStyles);

  const EditIcon = (style) => <Icon {...style} name="edit-outline" />;

  const AddIcon = (style) => <Icon {...style} name="plus-outline" />;

  return (
    <Layout style={containerStyle}>
      <Card
        containerStyle={styles.card}
        hasTopLine
      >
        <Layout style={styles.body}>
          <Meal meal={meal} />
        </Layout>
        <Divider />
        <Layout>
          <Layout style={styles.footer}>
            <Button
              appearance="ghost"
              style={styles.button}
              icon={AddIcon}
              onPress={onAddPress}
            />
            <Button
              appearance="ghost"
              style={styles.button}
              icon={EditIcon}
              onPress={onEditPress}
            />
          </Layout>
        </Layout>
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

MealCardSmall.propTypes = {
  containerStyle: PropTypes.object.isRequired,
  meal: MEAL.propType,
  onAddPress: PropTypes.func.isRequired,
  onEditPress: PropTypes.func.isRequired,
};

MealCardSmall.defaultProps = {
  meal: MEAL.defaultProp,
};

export default MealCardSmall;
