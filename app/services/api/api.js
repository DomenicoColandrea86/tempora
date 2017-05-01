import apisauce from 'apisauce';

const create = (baseURL = 'https://rcanalytics.com/wp-json/wp/v2/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });

  if (process.env.NODE_ENV === 'development' && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  return api;
};

export default create();
