import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { createReducer, createActions } from 'reduxsauce';

// Types and Action Creators
const { Types, Creators } = createActions({
  insightsRequest: ['data'],
  insightsSuccess: ['payload'],
  insightsFailure: null,
  insightsAuthorsRequest: ['data'],
  insightsAuthorsSuccess: ['payload'],
  insightsAuthorsFailure: null,
});

const InsightsTypes = Types;
const InsightsActions = Creators;

// Initial State
const INITIAL_STATE = fromJS({
  data: [],
  loading: false,
  posts: [],
  authors: {},
  error: null,
});

// Reducers
// insights request
const insightsRequest = (state, { data }) =>
  state.merge({ loading: true, data });

// insights success
const insightsSuccess = (state, action) =>
  state.merge({ loading: false, error: null, posts: action.payload });

// authors request
const authorsRequest = (state, { data }) => state.merge({ data });

// authors success
const authorsSuccess = (state, action) =>
  state.merge({ error: null, authors: action.payload });

// Something went wrong somewhere.
const failure = state => state.merge({ loading: false, error: true });

const InsightsReducer = createReducer(INITIAL_STATE, {
  [Types.INSIGHTS_REQUEST]: insightsRequest,
  [Types.INSIGHTS_SUCCESS]: insightsSuccess,
  [Types.INSIGHTS_FAILURE]: failure,
  [Types.INSIGHTS_AUTHORS_REQUEST]: authorsRequest,
  [Types.INSIGHTS_AUTHORS_SUCCESS]: authorsSuccess,
  [Types.INSIGHTS_AUTHORS_FAILURE]: failure,
});

// Selectors
// Insights domain selector
const selectInsightsDomain = state =>
  state && state.get('insights') && state.get('insights');

// posts selector
const getPosts = () =>
  createSelector(
    selectInsightsDomain,
    subState =>
      subState && subState.get('posts') && subState.get('posts').toJS(),
  );

// authors selector
const getAuthors = () =>
  createSelector(
    selectInsightsDomain,
    subState =>
      subState &&
      subState.get('authors') &&
      subState.get('authors').get('entities').get('authors').toJS(),
  );

const getLoading = () =>
  createSelector(
    selectInsightsDomain,
    subState => subState && subState.get('loading'),
  );

export {
  InsightsTypes,
  InsightsActions,
  InsightsReducer,
  getPosts,
  getAuthors,
  getLoading,
};
