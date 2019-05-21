import React,{Component} from "react";
import '../assets/css/Follow.css'
import Cell from "../components/Cell";

class Follow extends Component {
  state={
    cells:[]
  };
  render() {
    return (
      <div className="Follow">
        <Cell cells={this.state.cells} dataName="Follow"/>
      </div>
    );
  }
  // async componentDidMount(){
  //   let res = await axios({url:'/mock/follow',params:{_limit:8}});
  //   this.setState({cells:res.data.page_data})
  // }
}

export default Follow;