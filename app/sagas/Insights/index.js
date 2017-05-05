import { call, put, takeLatest } from 'redux-saga/effects';
import { InsightsActions, InsightsTypes } from '../../store/Insights';
import { normalizeAuthors, normalizeTags } from '../../transforms/Insights';
import api from '../../api';

function* requestInsightsAsync() {
  const response = yield call(api.insights.listPosts);
  if (response.ok) {
    yield put(InsightsActions.insightsSuccess(response.data));
    yield put(InsightsActions.insightsAuthorsRequest());
  } else {
    yield put(InsightsActions.insightsFailure(response.data));
  }
}

function* requestInsightsAuthorsAsync() {
  const response = yield call(api.insights.listAuthors);
  if (response.ok) {
    yield put(
      InsightsActions.insightsAuthorsSuccess(normalizeAuthors(response.data)),
    );
    yield put(InsightsActions.insightsTagsRequest());
  } else {
    yield put(InsightsActions.insightsFailure(response.data));
  }
}

function* requestInsightsTagsAsync() {
  const response = yield call(api.insights.listTags);
  if (response.ok) {
    yield put(
      InsightsActions.insightsTagsSuccess(normalizeTags(response.data)),
    );
  } else {
    yield put(InsightsActions.insightsFailure(response.data));
  }
}

// root saga reducer
const asyncInsightsWatchers = [
  function* asyncInsightsWatcher() {
    yield [takeLatest(InsightsTypes.INSIGHTS_REQUEST, requestInsightsAsync)];
  },
  function* asyncInsightsAuthorsWatcher() {
    yield [
      takeLatest(
        InsightsTypes.INSIGHTS_AUTHORS_REQUEST,
        requestInsightsAuthorsAsync,
      ),
    ];
  },
  function* asyncInsightsTagsWatcher() {
    yield [
      takeLatest(InsightsTypes.INSIGHTS_REQUEST, requestInsightsTagsAsync),
    ];
  },
];

export default asyncInsightsWatchers;
