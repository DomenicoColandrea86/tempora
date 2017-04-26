import { takeLatest } from 'redux-saga/effects';

import { StartupTypes } from '../redux/StartupRedux';
import { startup } from './StartupSagas';

export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
  ];
}
