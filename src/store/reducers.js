import { combineReducers } from 'redux';
import coinReducer from '../containers/Home/store';

const rootReducer = combineReducers({
  coins: coinReducer,
});

export default rootReducer;
