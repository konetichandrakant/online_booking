import { createStore } from 'redux';
import { enums } from '../enums';

const reducerFunc = (state = { page: enums.ORDER_SECTION }, action) => {
  if(action.payload!==undefined)
    return { page: action.payload };
  return state;
}

const store = createStore(reducerFunc);

export default store;