import {ADD_TO_BASKET, SET_INITIAL_CASH, UPDATE_BASKET} from "../../utils/consts";

const defaultState = {
    cash: 0,
    basket:[]
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INITIAL_CASH:
            return { ...state, cash: action.payload };
        case UPDATE_BASKET:
            return {
                ...state,
                basket: action.payload,
            };

        case ADD_TO_BASKET:
            return {...state, basket: [...state.basket, action.payload]}
        default:
            return state;
    }
};
