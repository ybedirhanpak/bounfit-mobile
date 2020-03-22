import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddMeal = (props) => {
  const { onPress } = props;

  const [active, setActive] = useState(false);

  if (active) {
    themedStyles.container = {
      ...themedStyles.container,
      backgroundColor: 'color-primary-500',
    };
    themedStyles.text = {
      ...themedStyles.text,
      color: 'color-basic-100',
    };
  } else {
    themedStyles.container = {
      ...themedStyles.container,
      backgroundColor: 'color-basic-100',
    };
    themedStyles.text = {
      ...themedStyles.text,
      color: 'color-primary-500',
    };
  }

  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      onPress={() => {
        onPress();
        setActive(false);
      }}
    >
      <Layout style={styles.container}>
        <Text style={styles.text}>Add Meal</Text>
      </Layout>
    </TouchableOpacity>
  );
};

const themedStyles = StyleService.create({
  container: {
    borderColor: 'color-basic-400',
    borderWidth: 1,
    borderRadius: 4,
    borderTopWidth: 2,
    borderTopColor: 'color-primary-500',
    padding: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'color-primary-900',
  },
});

AddMeal.propTypes = {
  onPress: PropTypes.func,
};

AddMeal.defaultProps = {
  onPress: undefined,
};

export default AddMeal;
