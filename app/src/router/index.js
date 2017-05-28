import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from'../history';
import Home from '../containers/Home/index.js';
import City from '../containers/City';
import NotFound from '../containers/404';
import { userInfoUpdate } from '../actions';

class RouterMap extends React.Component {
  componentWillMount() {
    let cityName = localStorage.getItem('cityName');
    if(cityName == null) {
      cityName = '北京';
    }
    this.props.userInfoUpdate({
      cityName
    })
  }

  render() {
    return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/city" component={City} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    userInfoUpdate: (userInfo) => {
      dispatch(userInfoUpdate(userInfo));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterMap);