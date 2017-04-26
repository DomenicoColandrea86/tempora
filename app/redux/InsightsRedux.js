import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  insightsRequest: ['data'],
  insightsSuccess: ['payload'],
  insightsFailure: null,
});

export const InsightsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null });

// successful api lookup
export const success = (state, action) => {
  const { payload } = action;
  return state.merge({ fetching: false, error: null, payload });
};

// Something went wrong somewhere.
export const failure = (state) =>
  state.merge({ fetching: false, error: true, payload: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INSIGHTS_REQUEST]: request,
  [Types.INSIGHTS_SUCCESS]: success,
  [Types.INSIGHTS_FAILURE]: failure,
});
