import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Chip from 'material-ui/Chip';
import HotCity from '../../components/HotCityList';
import CityList from '../../components/CityList';
import history from '../../history';
import { userInfoUpdate } from '../../actions';

import './style.css';

class City extends React.Component {
  changeCity(newCityName) {
    if(newCityName) {
      let newNserInfo = this.props.userInfo;
      newNserInfo.cityName = newCityName;
      this.props.userInfoUpdate(newNserInfo);

      localStorage.setItem('cityName', newCityName);

      history.push('/');
    }
  }


  render() {
    return (
      <div>
        <Header title={'选择城市'} />
        <h2 className="city-title">当前城市</h2>
        <Chip style={{marginLeft: '1.8rem'}}>
          <p className="current-city-name">{this.props.userInfo.cityName}</p>
        </Chip>
        <h2 className="city-title">热点城市</h2>
        <HotCity changeCity={this.changeCity.bind(this)}/>
        <h2 className="city-title">城市列表</h2>
        <CityList changeCity={this.changeCity.bind(this)}/>
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
  return {
    userInfoUpdate: (userInfo) => {
      dispatch(userInfoUpdate(userInfo));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);