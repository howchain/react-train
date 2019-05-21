import React from 'react'
import Reactdom from 'react-dom';

import querystring from 'query-string'
import axios from 'axios'
class Detail extends React.Component{
    state={
        data:{}
    }
    render(){
        let data = this.state.data;
        console.log(data)
        // console.log(data.detail.auth_icon)

        return(
      <div className="Detail">
      {
          data.title &&(<div>
                  <div><h2>
                      <img src={data.detail.auth_icon} alt=""/>
                  </h2><p>{data.detail.auth}</p></div>
                  <h3>{data.title}</h3>
                  <div className='time'><p>{data.time}<span>
                  </span></p></div>
                  <div className='text-box' dangerouslySetInnerHTML={{__html:data.detail.content}}></div>
          </div>)

    }
      </div>
        )
    }
    async componentDidMount(){
        let id=this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;

        // let dataName=querystring.parse(this.props.location.search).dataName;

        let res=await axios({url:`http://localhost:3333/${dataName}/${id}`});
        this.setState({data:res.data.page_data})
        // console.log(this.state.data.detail.auth_icon)
    }
}

export default Detail;
