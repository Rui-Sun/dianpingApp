import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

export default class CityList extends React.Component {
  render() {
    return (
    <div>
      <List>
        <ListItem
          primaryText="阿坝"
          leftAvatar={
            <Avatar>A</Avatar>
          }
          onClick={this.props.changeCity.bind(this, "阿坝")}
        />
        <ListItem
          primaryText="阿拉善"
          insetChildren={true}  
          onClick={this.props.changeCity.bind(this, "阿拉善")}
        />
        <ListItem
          primaryText="安庆"
          insetChildren={true}
          onClick={this.props.changeCity.bind(this, "安庆")}
        />
        <ListItem
          primaryText="鞍山"
          insetChildren={true}
          onClick={this.props.changeCity.bind(this, "鞍山")} 
        />
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          primaryText="保定"
          leftAvatar={
            <Avatar>B</Avatar>
          }
          onClick={this.props.changeCity.bind(this, "保定")} 
        />
        <ListItem
          primaryText="宝鸡"
          insetChildren={true}
          onClick={this.props.changeCity.bind(this, "宝鸡")} 
        />
        <ListItem
          primaryText="包头"
          insetChildren={true}
          onClick={this.props.changeCity.bind(this, "包头")} 
        />
        <ListItem
          primaryText="北海"
          insetChildren={true}
          onClick={this.props.changeCity.bind(this, "北海")} 
        />
      </List>
    </div>
    )
  }
}