import React from 'react';
import Chip from 'material-ui/Chip';

import './style.css';

export default class HotCityList extends React.Component {
  render() {
    const chipStyle = {
      margin: '0.5rem'
    }
    return (
      <div className="hotcitylist-container">
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('北京')}}>
          <p className="hotcitylist-city-name">北京</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('上海')}}>
          <p className="hotcitylist-city-name">上海</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('广州')}}>
          <p className="hotcitylist-city-name">广州</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('深圳')}}>
          <p className="hotcitylist-city-name">深圳</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('杭州')}}>
          <p className="hotcitylist-city-name">杭州</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('南京')}}>
          <p className="hotcitylist-city-name">南京</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('苏州')}}>
          <p className="hotcitylist-city-name">苏州</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('重庆')}}>
          <p className="hotcitylist-city-name">重庆</p>
        </Chip>
        <Chip style={chipStyle} onTouchTap={() => {this.props.changeCity('石家庄')}}>
          <p className="hotcitylist-city-name">石家庄</p>
        </Chip>
      </div>
    )
  }
}
