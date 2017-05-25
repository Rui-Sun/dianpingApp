import React from 'react';
import Slider from 'react-slick';
import {Card} from 'material-ui/Card';
import FlatButton  from 'material-ui/FlatButton';

import Meishi from 'material-ui/svg-icons/maps/restaurant';
import KTV from 'material-ui/svg-icons/av/mic';
import Dianying from 'material-ui/svg-icons/maps/local-movies';
import Jiudian from 'material-ui/svg-icons/maps/local-hotel';
import Lvxing from 'material-ui/svg-icons/maps/terrain';
import Xuexi from 'material-ui/svg-icons/av/library-books';
import Waimai from 'material-ui/svg-icons/action/motorcycle';
import Chongwu from 'material-ui/svg-icons/action/pets';
import Jiehun from 'material-ui/svg-icons/notification/wc';
import Jianshen from 'material-ui/svg-icons/places/fitness-center';

import Shuiguo from 'material-ui/svg-icons/image/filter-vintage';
import Liren from 'material-ui/svg-icons/action/face';
import Yangshen from 'material-ui/svg-icons/places/hot-tub';
import Tiandian from 'material-ui/svg-icons/social/cake';
import Xiyi from 'material-ui/svg-icons/toggle/radio-button-checked';
import Jiazhuang from 'material-ui/svg-icons/editor/format-paint';
import SPA from 'material-ui/svg-icons/places/spa';
import Chaoshi from 'material-ui/svg-icons/maps/local-grocery-store';
import Sheying from 'material-ui/svg-icons/image/camera-alt';
import Qita from 'material-ui/svg-icons/navigation/apps';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export default class Category extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true
    };
    const buttonStyle = {
      //width: '100%',
      minHeight: '70px',
      minWidth: 'auto',
      borderRadius: '40%'
    }
    const iconStyle = {
      width: '36px',
      height: '36px',
      color: 'rgb(0,188,212)'
    }

    return(
      <Card>
        <Slider {...settings}>
          <div className="category-card">
            <div className="category-row">
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Meishi style={iconStyle} />
                  <p>美食</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <KTV style={iconStyle} />
                  <p>KTV</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Dianying style={iconStyle} />
                  <p>电影</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Jiudian style={iconStyle} />
                  <p>酒店</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Lvxing style={iconStyle} />
                  <p>旅行</p>
                </FlatButton>
              </div>
            </div>
            <div className="category-row">
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Xuexi style={iconStyle} />
                  <p>学习</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Waimai style={iconStyle} />
                  <p>外卖</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Chongwu style={iconStyle} />
                  <p>宠物</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Jiehun style={iconStyle} />
                  <p>结婚</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Jianshen style={iconStyle} />
                  <p>健身</p>
                </FlatButton>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-row">
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Shuiguo style={iconStyle} />
                  <p>水果</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Liren style={iconStyle} />
                  <p>丽人</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Yangshen style={iconStyle} />
                  <p>养生</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Tiandian style={iconStyle} />
                  <p>甜点</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Xiyi style={iconStyle} />
                  <p>洗衣</p>
                </FlatButton>
              </div>
            </div>
            <div className="category-row">
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Jiazhuang style={iconStyle} />
                  <p>家装</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <SPA style={iconStyle} />
                  <p>SPA</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Chaoshi style={iconStyle} />
                  <p>超市</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Sheying style={iconStyle} />
                  <p>摄影</p>
                </FlatButton>
              </div>
              <div className="category-item">
                <FlatButton style={buttonStyle}>
                  <Qita style={iconStyle} />
                  <p>其他</p>
                </FlatButton>
              </div>
            </div>
          </div>
        </Slider>
      </Card>
    )
  }
}