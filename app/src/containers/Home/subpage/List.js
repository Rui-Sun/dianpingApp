import React from 'react';
import Divider from 'material-ui/Divider';
import ListComponent from '../../../components/List/index';
import LoadMore from '../../../components/LoadMore'

import './style.css'

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      hasMore: false,
      isLoadingMore: false,
      pageNext: 1
    }
  }

  componentWillUnMount(){
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const city = this.props.city;
    this.getListData(city, 0);
  }

  getListData(city, page) {
    const fetchOption = {
      method: 'GET'
    };
    fetch('/api/list/' + encodeURIComponent(city) + '/' + page, fetchOption)
    .then(res => res.json())
    .then(json => {
      if(json && this.mounted) {
        this.setState({
          listData: this.state.listData.concat(json.data),
          hasMore: json.hasMore
        })
      }
    })
    .catch(e => {
      console.error('首页列表加载数据出错！', e)
    })
  }

  loadMoreData() {
    this.setState({
      isLoadingMore: true
    });
    this.getListData(this.props.city, this.state.pageNext);
    this.setState({
      isLoadingMore: false,
      pageNext: this.state.pageNext + 1
    });
  }

  render() {
    return(
      <div>
        <Divider />
        <p className="home-list-head">随便看看</p>
        {
          this.state.listData.length ?
          <ListComponent data={this.state.listData} />
          :
          <p>Loading...</p>
        }
        {
          this.state.hasMore ?
          <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreData={this.loadMoreData.bind(this)}/>
          :
          ''
        }
      </div>
    )
  }
}