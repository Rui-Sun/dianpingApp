import React from 'react';
import './style.css';

export default class HomeAd extends React.Component {
  render() {
    let arr = [];
    let arr2 = [];
    this.props.data.map((ad, index) => {
      arr.push(
        <div key={index}  className="home-ad-item">
          <a href={ad.link}>
            <img src={ad.img} alt={ad.title} />
          </a>
        </div>
      );
      return 0;
    })
    arr.map((item, i) => {
      if(((i+1)%3) === 0) {
        arr2.push(
          <div key={i} className="home-ad-row">
            {arr[i-2]}
            {arr[i-1]}
            {arr[i]}
          </div>
        )
      }
      if(i === arr.length) {
        switch((i+1)%3) {
          case 0:
            break;
          case 1:
            arr2.push(
              <div key={i} className="home-ad-row">
                {arr[i]}
              </div>
            )
            break;
          case 2:
            arr2.push(
              <div key={i} className="home-ad-row">
                {arr[i-1]}
                {arr[i]}
              </div>
            )
            break;
          default:
            break;
        }
      }
      return 0;
    })
    return(
      <div className="home-ad-container">
        <p className="home-ad-head">今日推荐</p>
        <div>
          {arr2.map((item, index) => item)}
        </div>
      </div>
    )
  }
}