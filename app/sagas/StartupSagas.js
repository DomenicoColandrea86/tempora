// process STARTUP actions
export function* startup(action) {
  if (process.env.NODE_ENV && console.tron) {
    // straight-up string logging
    console.tron.log('Welcome to RCA Mobile!', action);
  }
}
