import React from 'react'
import Reactdom from 'react-dom';
import Cell from '../components/Cell'
import axios from 'axios'

class Column extends React.Component{
    state={
        cells:[]
    }
    render(){
        return(
            <div className="Column">
               <Cell cells={this.state.cells} dataName="column"/>
            </div>
            )

    }
    async componentDidMount() {
        let res=await axios({url:"http://localhost:3333/mock/column",parmars:{_limit:7}});
        this.setState({cells:res.data.page_data})
    }
}
export default Column;