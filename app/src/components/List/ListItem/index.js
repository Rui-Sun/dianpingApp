import React from 'react';
import Divider from 'material-ui/Divider';

import './style.css';

export default class ListItem extends React.Component {
  render() {
    return(
      <div>
      <div className="list-item-container">
        <div className="list-item-left-container">
          <img src={this.props.data.img} alt={this.props.data.title}/>
        </div>
        <div className="list-item-right-container">         
          <div className="list-item-title-distance">
            <p className="list-item-title">{this.props.data.title}</p>
            <p className="list-item-distance">{this.props.data.distance}</p>
          </div>
          <p className="list-item-subtitle">{this.props.data.subTitle}</p>
          <div className="list-item-price-sell">
            <p className="list-item-price">￥{this.props.data.price}</p>
            <p className="list-item-sell">已售{this.props.data.mumber}</p>
          </div>          
        </div>      
      </div>
      <Divider style={{backgroundColor: 'rgb(240,240,240)'}}/>
      </div>
    )
  }
}