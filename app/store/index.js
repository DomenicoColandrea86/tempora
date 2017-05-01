import { combineReducers } from 'redux-immutable';
import configureStore from './init';
import rootSaga from '../sagas/';
import { InsightsReducer } from './Insights';

export default () => {
  // Assemble The Reducers
  const rootReducer = combineReducers({
    insights: InsightsReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
