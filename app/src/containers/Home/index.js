import React from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends React.Component {
  render() {
    return(
      <div>
        <HomeHeader {...this.props.userInfo} />
        <Category />
        <Ad />
        <List city={this.props.userInfo.cityName}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
