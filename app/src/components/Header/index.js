import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Back from 'material-ui/svg-icons/navigation/arrow-back';

export default class Header extends React.Component {
  handleClick() {
    window.history.back();
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementLeft={<IconButton onTouchTap={this.handleClick}><Back /></IconButton>}
      />
    )
  }
}
