import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas/';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    search: require('./InsightsRedux').reducer, // eslint-disable-line global-require
  });

  return configureStore(rootReducer, rootSaga);
};
