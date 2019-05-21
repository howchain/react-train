import React,{Component} from "react";
import { Carousel } from 'antd';

import '../assets/css/Swiper.css'
import $ from 'jquery';
import Swipe from '../library/swipe';

class Slider extends Component {
  render() {
    let {banners} = this.props;
    return (
      <div className="banner">
        <hr/>
        <Carousel autoplay>
          <div>
            <img src={require('../assets/img/img1.jpg')} />
          </div>
          <div>
            <img src={require('../assets/img/img2.jpg')} />

          </div>
          <div>
            <img src={require('../assets/img/img3.jpg')} />

          </div>
          <div>
            <img src={require('../assets/img/img2.jpg')} />

          </div>
        </Carousel>

      </div>
    );
  }

  toDetail(id){
    //编程式跳转
    this.props.history.push({pathname:'/detail/'+id, search:'?dataName='+this.props.dataName})
  }

  componentDidUpdate(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}

export default Slider;