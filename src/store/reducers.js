import { combineReducers } from 'redux';
import coinReducer from '../containers/Home/store/reducer';

const rootReducer = combineReducers({
  coins: coinReducer,
});

export default rootReducer;
