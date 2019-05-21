import React,{Component} from "react";
import '../assets/css/App.css'
import Header from "./Header";
import Footer from "./Footer";

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
// import AuthRoute from "../guard/Auth";

class App extends Component {
  render() {
    return (
      <div className="App" style={{
          marginTop:'60px',
          fontSize:'16px',

      }}>
        <Header/>
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Follow" component={Follow}/>
          <Route path="/Column" component={Column}/>
          {/*<AuthRoute path="/User" component={User}/>*/}
          <Route path="/Login" component={Login}/>
          <Route path="/Reg" component={Reg}/>
          <Route path="/Detail/:id" component={Detail}/>
          {/*<Redirect exact from="/" to="/Home"/>*/}
          <Route path="/User" component={User}/>

          <Route component={Error}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default App;