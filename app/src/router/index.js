import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/index.js';
import City from '../containers/City';
import NotFound from '../containers/404';

export default class RouterMap extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/city" component={City} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}