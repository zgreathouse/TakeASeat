import { combineReducers } from 'redux';

//reducers
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
});

export default RootReducer;
