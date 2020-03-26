import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';

import MEAL from '../../../defaults/meal';
import MealCard from '../card';

const MealCardList = (props) => {
  const { meals } = props;

  const data = meals.map((meal, index) => ({
    key: `${meal.name}-${index}`,
    meal,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MealCard meal={item.meal} containerStyle={styles.meal} />}
        // Performance settings
        removeClippedSubviews // Unmount components when outside of window
        initialNumToRender={3} // Reduce initial render amount
        maxToRenderPerBatch={3} // Reduce number in each render batch
        updateCellsBatchingPeriod={1000} // Increase time between renders
        windowSize={7} // Reduce the window size
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meal: {
    marginBottom: 16,
    marginHorizontal: 12,
  },
});

MealCardList.propTypes = {
  meals: PropTypes.arrayOf(MEAL.propType),
};

MealCardList.defaultProps = {
  meals: [],
};

export default MealCardList;
