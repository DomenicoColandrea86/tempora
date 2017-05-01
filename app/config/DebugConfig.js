export default {
  yellowBox: process.env.NODE_ENV === 'development',
  reduxLogging: process.env.NODE_ENV === 'development',
  useReactotron: process.env.NODE_ENV === 'development',
};
