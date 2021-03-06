import { fromJS } from 'immutable';
import { AsyncStorage } from 'react-native';
import immutablePersistenceTransform
  from '../services/AsyncStorage/ImmutablePersistenceTransform';

const REDUX_PERSIST = fromJS({
  active: true,
  reducerVersion: '4',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: [], // reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
    transforms: [immutablePersistenceTransform],
  },
});

export default REDUX_PERSIST;
