import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
  render() {
    return(
      <div>
      {
        this.props.data.map((item, index) => {
          return <ListItem key={index} data={item}/>
        })
      }
      </div>
    )
  }
}