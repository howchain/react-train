import React,{Component} from "react";
import '../assets/css/Error.css'
class Error extends Component {
  render() {
    return (
      <div className="Error">
        <div>404你访问的页面不存在</div>
      </div>
    );
  }
}

export default Error;