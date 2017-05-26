import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Account from 'material-ui/svg-icons/social/person';
import NoAccount from 'material-ui/svg-icons/social/person-add';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Search from 'material-ui/svg-icons/action/search'
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import history from '../../history';

export default class HomeHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      searchOpen: false,
    }
  }

  handleTouchSearch() {
    this.setState({
      searchOpen: true,
      searchInfo: undefined
    });
  }

  handleTouchUser() {
    console.log('aaa');
  }

  handleClose() {
    this.setState({
      searchOpen: false,
      searchInfo: undefined
    });
  };

  handleSearch() {
    console.log(this.state.searchInfo);
  }

  handleChange(event) {
    this.setState({
      searchInfo: event.target.value,
    });
  };

  handleClickCity() {
    history.push('/city');
  }

  render() {
    return(
      <div>
      <AppBar
        showMenuIconButton={false}
        title={
            <FlatButton style={{color: '#fff'}} onTouchTap={this.handleClickCity}>
              <span>{this.props.cityName}</span>
              <ArrowDown style={{verticalAlign: 'middle', color: '#fff'}}/>
            </FlatButton>

        }
        iconElementRight={ 
          <div>     
            <IconButton iconStyle={{color: '#fff'}} onTouchTap={this.handleTouchSearch.bind(this)}>
              <Search />
            </IconButton>   
            {this.props.isLogin ? 
            <IconButton iconStyle={{color: '#fff'}} onTouchTap={this.handleTouchUser.bind(this)}>
              <Account />
            </IconButton>
            :
            <IconButton iconStyle={{color: '#fff'}} onTouchTap={this.handleTouchUser.bind(this)}>
              <NoAccount />
            </IconButton>
            }
          </div>
        }
      />
      <Dialog
          title="搜一搜"
          modal={false}
          open={this.state.searchOpen}
          onRequestClose={this.handleClose.bind(this)}
        >
          <div style={{display: 'flex'}}>
          <TextField hintText="输入想寻找的东西" fullWidth={true} id="search-info" onChange={this.handleChange.bind(this)}/>
          <IconButton iconStyle={{color: 'rgb(0,188,212)'}} onTouchTap={this.handleSearch.bind(this)}>
            <Search />
          </IconButton>  
          </div>
        </Dialog>
      </div>
    )
  }
}
