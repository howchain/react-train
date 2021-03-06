import React,{Component} from "react";
import style from '../assets/css/Footer.module.css'
import {NavLink} from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className={style['foot-btn']}>
        <ul>
          <li className={style.home}>
            <NavLink to="/Home" />
          </li>
          <li className={style.write}>
            <NavLink to="/shopcart"/>
          </li>
          <li className={style.my}>
            <NavLink to="/User"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;