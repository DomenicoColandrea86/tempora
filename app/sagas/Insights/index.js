import { call, put, takeLatest } from 'redux-saga/effects';
import { InsightsActions, InsightsTypes } from '../../store/Insights';
import { normalizeAuthors } from '../../transforms/Insights';
import api from '../../api';

function* requestInsightsAsync() {
  const response = yield call(api.insights.listPosts);
  if (response.ok) {
    yield put(InsightsActions.insightsSuccess(response.data));
    yield put(InsightsActions.insightsAuthorsRequest());
  } else {
    yield put(InsightsActions.insightsFailure());
  }
}

function* requestInsightsAuthorsAsync() {
  const response = yield call(api.insights.listAuthors);
  if (response.ok) {
    yield put(
      InsightsActions.insightsAuthorsSuccess(normalizeAuthors(response.data)),
    );
  } else {
    yield put(InsightsActions.insightsAuthorsFailure());
  }
}

// root saga reducer
const asyncInsightsWatchers = [
  // like case return, this is take => call
  // inner function we use yield*
  // from direct watcher we just yield value
  function* asyncInsightsWatcher() {
    yield [takeLatest(InsightsTypes.INSIGHTS_REQUEST, requestInsightsAsync)];
  },
  function* asyncInsightsAuthorsWatcher() {
    yield [
      takeLatest(InsightsTypes.INSIGHTS_REQUEST, requestInsightsAuthorsAsync),
    ];
  },
];

export default asyncInsightsWatchers;
