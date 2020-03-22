const defaultState = {
  account: {
    isAuth: false,
  },
  rawFoods: [
    {
      name: 'Sample Raw Food 1',
      protein: 1,
      carb: 2,
      fat: 3,
      calories: 4,
    },
  ],
  foods: [
    {
      name: 'Sample Food 1',
      ingredients: [
        {
          rawFood: {
            name: 'Sample Raw Food 2',
            protein: 5,
            carb: 6,
            fat: 7,
            calories: 8,
          },
          quantity: 50,
        },
        {
          rawFood: {
            name: 'Sample Raw Food 3',
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
      name: 'Meal 1',
      foods: [
        {
          name: 'Sample Food 1',
          ingredients: [
            {
              rawFood: {
                name: 'Sample Raw Food 2',
                protein: 5,
                carb: 6,
                fat: 7,
                calories: 8,
              },
              quantity: 50,
            },
            {
              rawFood: {
                name: 'Sample Raw Food 3',
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
  dailyPlans: [
    {
      name: 'dailyPlan 1',
      meals: [
        {
          name: 'Meal 1',
          foods: [
            {
              name: 'Sample Food 1',
              ingredients: [
                {
                  rawFood: {
                    name: 'Sample Raw Food 2',
                    protein: 5,
                    carb: 6,
                    fat: 7,
                    calories: 8,
                  },
                  quantity: 50,
                },
                {
                  rawFood: {
                    name: 'Sample Raw Food 3',
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
      totalValues: {
        protein: 14,
        carb: 16,
        fat: 18,
        calories: 20,
      },
    },
  ],
  today: {
    meals: [
      {
        name: 'Meal 1',
        foods: [
          {
            name: 'Sample Food 1',
            ingredients: [
              {
                rawFood: {
                  name: 'Sample Raw Food 2',
                  protein: 5,
                  carb: 6,
                  fat: 7,
                  calories: 8,
                },
                quantity: 50,
              },
              {
                rawFood: {
                  name: 'Sample Raw Food 3',
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
    totalValues: {
      protein: 14,
      carb: 16,
      fat: 18,
      calories: 20,
    },
  },
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
