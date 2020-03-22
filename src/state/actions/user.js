const CREATE_MEAL = 'CREATE_MEAL';

export const actionTypes = {
  CREATE_MEAL,
};

export const createUserMeal = (meal) => ({
  type: CREATE_MEAL,
  payload: meal,
});
