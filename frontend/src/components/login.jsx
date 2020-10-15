// import React, { Component } from 'react';
// // import '../style/quest.css';
// // import '../App.css'
// // import '../style/header.css'
// import { NavLink } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as authActions from "../actions/auth";
// import Logo from "./Logo";
// import Account from "./Account";
// import Input from "./Input";
// import Label from "./Label";
// import Button from "./Button";
// import { getAuthData } from "../utils";
// import Dialog from "@material-ui/core/Dialog";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWindowClose ,faKey,faEnvelope,faUser, faTimes} from "@fortawesome/free-solid-svg-icons";
// import Checkbox from '@material-ui/core/Checkbox';
// import { Card } from '@material-ui/core';
// class Login extends Component {
//   constructor(props){
//       super(props)
//       this.handelOnChange= this.handelOnChange.bind(this)
//       this.submit = this.submit.bind(this)
//  this.state ={
//           email: "",
//           password: ""
//       }
//   }
//   handelOnChange(event){
//     this.setState({
//         [event.target.name]: event.target.value,    })
//   }
//   submit = ()=>{

//   }
  
//   render() {
//         return (
//             <div>
//                   {/* <fieldset className="inputHome">
//                     <FontAwesomeIcon icon={faEnvelope} className="icons1111"/>
//                     <Input className="bodernull111"
//                       type="text"
//                       name="email"
//                       placeholder="Email ID"
//                       autocomplete="off"
//                       value="email"
//                       onChange={this.handelOnChange}
//                     />
//                   </fieldset> */}
            
//                  {/* {modal_type === "signin" && ( */}
             
//              <Card>
//                 <fieldset className="inputHome">
//                    <FontAwesomeIcon icon={faEnvelope} className="icons1111" />
//                   <Input className="bodernull111"
//                     type="text"
//                     name="email"
//                     placeholder="User Name"
//                     autocomplete="off"
//                     value="email"
//                     onChange={this.handelOnChange}
//      />
                 
//                 </fieldset>
//                  {/* )} */}
//                 {/* {modal_type !== "forgotpassword" && ( */}
//                   <fieldset className="inputHome">
//                     <FontAwesomeIcon icon={faKey} className="icons1111"/>
//                     <Input className="bodernull111"
//                       type="password"
//                       name="password"
//                       placeholder="password"
//                       autocomplete="off"
//                       value="password"
//                       onChange={this.handelOnChange}
//                     />
//                   </fieldset>
//                   <Button
//                       type="submit"
//                       value="Sign In"
//                       disabled={this.state.email == "" || this.state.password ==""}
//                     />
//                     </Card>
//             {/* <h1>hello</h1> */}
//             </div>
//         );
//     }
// }

// export default Login;