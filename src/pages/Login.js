import React,{Component} from "react";
import Axios from 'axios'
import {Link} from 'react-router-dom'


class Login extends React.Component{
    state={
        username:'',
        password:'',
    }
    changeIpt=(ev)=>{
    this.state({
        [ev.target.name]:ev.target.value
    })
    }
    submit=async ()=>{
        let res=await axios({
            url:'mock/login',
            parmars:{
                username:this.state.username,
                password: this.state.password
            }
        });

        if(res.data.error==0){
            localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
            this.props.history.push('./User')
        }else {
            alert('失败')
        }
    }
    render(){
        <div>
            <div className="">
                <p className=""></p>
                <div className="">
                    <Link to="/Login">登录</Link>
                    <span></span>
                    <Link to="/Reg">注册</Link>
                </div>
                <p className=""></p>
            </div>

            <ul>
                <li>
                    <span>账号</span><input type='text' name='username' value={this.state.username} onChange={this.changeIpt}/>
                </li>
                <li>
                    <span>密码</span><input type='text' name='password' value={this.state.password} onChange={this.changeIpt}/>
                </li>
            </ul>
            <div>
                <input type='button' value='登录' onClick={this.submit}/>
                <a href='#'>忘记密码</a>
            </div>
        </div>
    }
}
export default Login;