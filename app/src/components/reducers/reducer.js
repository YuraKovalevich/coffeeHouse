import { ADD_CASH, REMOVE_CASH, RESET_CASH, SET_INITIAL_CASH } from "../../utils/consts";

const defaultState = {
    cash: 0
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INITIAL_CASH:
            return { ...state, cash: action.payload };
        case ADD_CASH:
            return { ...state, cash: state.cash + action.payload };
        case REMOVE_CASH:
            return { ...state, cash: state.cash - action.payload };
        case RESET_CASH:
            return { ...state, cash: state.cash};
        default:
            return state;
    }
};
