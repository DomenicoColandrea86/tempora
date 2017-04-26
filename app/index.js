import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import RootContainer from './containers/RootContainer';
import createStore from './redux';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
