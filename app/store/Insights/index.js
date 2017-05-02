import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { createReducer, createActions } from 'reduxsauce';

// Types and Action Creators
const { Types, Creators } = createActions({
  insightsRequest: ['data'],
  insightsSuccess: ['payload'],
  insightsFailure: null,
});

const InsightsTypes = Types;
const InsightsActions = Creators;

// Initial State
const INITIAL_STATE = fromJS({
  data: [],
  loading: false,
  payload: [],
  error: null,
});

// Reducers
// request the data from an api
const request = (state, { data }) => state.merge({ loading: true, data });

// successful api lookup
const success = (state, action) => {
  const { payload } = action;
  return state.merge({ loading: false, error: null, payload });
};

// Something went wrong somewhere.
const failure = state => state.merge({ loading: false, error: true });

const InsightsReducer = createReducer(INITIAL_STATE, {
  [Types.INSIGHTS_REQUEST]: request,
  [Types.INSIGHTS_SUCCESS]: success,
  [Types.INSIGHTS_FAILURE]: failure,
});

// Selectors
// Insights domain selector
const selectInsightsDomain = state =>
  state && state.get('insights') && state.get('insights');

// Insights selector
const getInsights = () =>
  createSelector(
    selectInsightsDomain,
    subState =>
      subState && subState.get('payload') && subState.get('payload').toJS(),
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
  getInsights,
  getLoading,
};
