
// exported to make available for tests
export const selectAvatar = (state) => state.github.avatar;

// process STARTUP actions
export function* startup(action) {
  if (__DEV__ && console.tron) { // eslint-disable-line no-undef
    // straight-up string logging
    console.tron.log('Welcome to RCA Mobile!', action);
  }
}
