import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router';
import './styles/index.css';

import createStore from './store';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const initState = {
  userInfo: {
    isLogin: false,
    cityName: '北京'
  }
}
const store = createStore(initState);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RouteMap />
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root')
);
