import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';

import FOOD from '../../../defaults/food';
import FoodCardSmall from '../card/small';

const FoodSmallCardList = (props) => {
  const { foods } = props;

  const data = foods.map((food, index) => ({
    key: `${food.name}-${index}`,
    food,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FoodCardSmall
            food={item.food}
            containerStyle={styles.food}
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
  food: {
    marginBottom: 16,
    marginHorizontal: 12,
  },
});

FoodSmallCardList.propTypes = {
  foods: PropTypes.arrayOf(FOOD.propType),
};

FoodSmallCardList.defaultProps = {
  foods: [],
};

export default FoodSmallCardList;
