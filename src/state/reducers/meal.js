import { actionTypes } from '../actions/meal';

const defaultState = {
    mealList: [],
    deneme: ""
};

const mealReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.DENEME:
            return {
                ...state,
                deneme: action.payload,
            }
        default:
            return state;
    }
}

export default mealReducer;