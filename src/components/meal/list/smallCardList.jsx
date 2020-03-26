import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';

import MEAL from '../../../defaults/meal';
import MealCardSmall from '../card/small';

const MealSmallCardList = (props) => {
  const { meals, onAddPress, onEditPress } = props;

  const data = meals.map((meal, index) => ({
    key: `${meal.name}-${index}`,
    meal,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MealCardSmall
            meal={item.meal}
            containerStyle={styles.meal}
            onAddPress={() => onAddPress(item.meal)}
            onEditPress={() => onEditPress(item.meal)}
          />
        )}
        // Performance settings
        removeClippedSubviews // Unmount components when outside of window
        initialNumToRender={4} // Reduce initial render amount
        maxToRenderPerBatch={4} // Reduce number in each render batch
        windowSize={7} // Reduce the window size
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  meal: {
    marginBottom: 15,
    marginHorizontal: 12,
  },
});

MealSmallCardList.propTypes = {
  meals: PropTypes.arrayOf(MEAL.propType),
  onAddPress: PropTypes.func.isRequired,
  onEditPress: PropTypes.func.isRequired,
};

MealSmallCardList.defaultProps = {
  meals: [],
};

export default MealSmallCardList;
