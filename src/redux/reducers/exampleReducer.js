// exampleReducer.js
import { INCREMENT, DECREMENT } from '../actions/actionTypes';

const initialState = { value: 0 };

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default exampleReducer;