import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { createReducer, createActions } from 'reduxsauce';

// Types and Action Creators
const { Types, Creators } = createActions({
  insightsRequest: null,
  insightsSuccess: ['payload'],
  insightsFailure: ['error'],
  insightsAuthorsRequest: null,
  insightsAuthorsSuccess: ['payload'],
  insightsAuthorsFailure: ['error'],
});

const InsightsTypes = Types;
const InsightsActions = Creators;

// Initial State
const INITIAL_STATE = fromJS({
  loading: false,
  posts: [],
  authors: {},
  error: null,
});

// Reducers
// insights request
const insightsRequest = state => state.merge({ loading: true });

// insights success
const insightsSuccess = (state, action) =>
  state.merge({ loading: false, error: null, posts: action.payload });

// authors request
const authorsRequest = state => state;

// authors success
const authorsSuccess = (state, action) =>
  state.merge({ error: null, authors: action.payload.entities.authors });

// Something went wrong somewhere.
const failure = (state, { error }) => state.merge({ loading: false, error });

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
const selectInsightsDomain = state => state.get('insights');

// posts selector
const getPosts = () =>
  createSelector(selectInsightsDomain, subState =>
    subState.get('posts').toJS(),
  );

// authors selector
const getAuthors = () =>
  createSelector(selectInsightsDomain, subState =>
    subState.get('authors').toJS(),
  );

// loading selector
const getLoading = () =>
  createSelector(selectInsightsDomain, subState => subState.get('loading'));

export {
  InsightsTypes,
  InsightsActions,
  InsightsReducer,
  getPosts,
  getAuthors,
  getLoading,
};
