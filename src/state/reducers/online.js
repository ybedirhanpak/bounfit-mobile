const defaultState = {
  groceryStores: [
    {
      name: 'Sample grocery store 1',
      rawFoods: [
        {
          name: 'Sample raw food 1',
          protein: 1,
          carb: 2,
          fat: 3,
          calories: 4,
        },
      ],
    },
  ],
  restaurants: [
    {
      name: 'Sample restaurant 1',
      foods: [
        {
          name: 'Sample food 1',
          ingredients: [
            {
              rawFood: {
                name: 'Sample raw food 2',
                protein: 5,
                carb: 6,
                fat: 7,
                calories: 8,
              },
              quantity: 50,
            },
            {
              rawFood: {
                name: 'Sample raw food 3',
                protein: 9,
                carb: 10,
                fat: 11,
                calories: 12,
              },
              quantity: 150,
            },
          ],
          total: {
            values: {
              protein: 14,
              carb: 16,
              fat: 18,
              calories: 20,
            },
            quantity: 200,
          },
        },
      ],
      meals: [
        {
          name: 'meal 1',
          foods: [
            {
              name: 'Sample food 1',
              ingredients: [
                {
                  rawFood: {
                    name: 'Sample raw food 2',
                    protein: 5,
                    carb: 6,
                    fat: 7,
                    calories: 8,
                  },
                  quantity: 50,
                },
                {
                  rawFood: {
                    name: 'Sample raw food 3',
                    protein: 9,
                    carb: 10,
                    fat: 11,
                    calories: 12,
                  },
                  quantity: 150,
                },
              ],
              total: {
                values: {
                  protein: 14,
                  carb: 16,
                  fat: 18,
                  calories: 20,
                },
                quantity: 200,
              },
            },
          ],
          totalValues: {
            protein: 14,
            carb: 16,
            fat: 18,
            calories: 20,
          },
        },
      ],
    },
  ],
};

const onlineReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default onlineReducer;
