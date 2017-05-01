import { call, put, takeLatest } from 'redux-saga/effects';
import { InsightsActions, InsightsTypes } from '../../store/Insights';
import api from '../../api';

function* requestInsightsAsync() {
  // make the call to the api
  const response = yield call(api.insights.list);
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(InsightsActions.insightsSuccess(response.data));
  } else {
    yield put(InsightsActions.insightsFailure());
  }
}

// root saga reducer
const asyncInsightsWatchers = [
  // like case return, this is take => call
  // inner function we use yield*
  // from direct watcher we just yield value
  function* asyncInsightsWatcher() {
    yield [
      yield takeLatest(InsightsTypes.INSIGHTS_REQUEST, requestInsightsAsync),
    ];
  },
];

export default asyncInsightsWatchers;
