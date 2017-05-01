import { fork } from 'redux-saga/effects';

import asyncInsightsWatchers from './Insights';

// saga must be a function like generator of other functions
const rootSaga = function* rootSaga() {
  yield [...asyncInsightsWatchers.map(watcher => fork(watcher))];
};

export default rootSaga;
