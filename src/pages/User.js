import React from 'react'
// import React,{Component} from "react";

import Reactdom from 'react-dom';

class User extends React.Component{
    render(){
        return(
            <div
                style={{
                    marginTop:'60px',
                    fontSize:'16px',
                    border:'2px solid #000'
                }}
            >
               <p>在吗</p>
            </div>
        )
            }
}
export default User;