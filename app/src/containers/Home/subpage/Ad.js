import React from 'react';
import HomeAd from '../../../components/HomeAd';

export default class Ad extends React.Component {
  constructor() {
    super();
    this.state = {
      adData: []
    }
  }

  componentDidMount() {
    const fetchOption = {
      method: 'GET'
    };
    fetch('/api/homead', fetchOption)
    .then(res => res.json())
    .then(json => {
      if(json.length) {

        this.setState({
          adData: json
        })
      }
    })
    .catch(e => {
      console.error('首页广告加载数据出错！', e.message)
    })
  }

  render() {
    return(
      <div>
        {
          this.state.adData.length ?
          <HomeAd data={this.state.adData} />
          :
          <div>Loading...</div>
        }
      </div>
    )
  }
}