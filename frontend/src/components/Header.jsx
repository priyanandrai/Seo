import React, { Component, Fragment } from "react";
import '../style/quest.css';
import '../App.css'
import '../style/header.css'
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/auth";
import Logo from "./Logo";
import Account from "./Account";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import { getAuthData } from "../utils";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose ,faKey,faEnvelope,faUser, faTimes} from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_account_dropdown: false,
      modal_open: false,
      modal_type: "",
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      checkbox: false,
      button_status: "disabled",
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handelOnChange = this.handelOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handelOnClickDropDown = this.handelOnClickDropDown.bind(this);
    this.handelOnClickLogout = this.handelOnClickLogout.bind(this);
  }

  openModal(type) {
    this.closeModal();
    this.setState({
      modal_open: true,
      modal_type: type,
    });
  }

  closeModal() {
    this.setState({
      modal_open: false,
      modal_type: "",
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      checkbox: false,
      button_status: false,
    });
  }

  handelOnChange(event) {
    event.preventDefault();
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
    );
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const {
      how_account_dropdown,
      modal_open,
      modal_type,
      full_name,
      email,
      password,
      confirm_password,
      checkbox,
    } = this.state;
    if (modal_type === "signup") {
      const { doSignUp } = this.props.authActions;
     let temp =  doSignUp({
        full_name,
        email,
        password,
        confirm_password,
      });
    }
    if (modal_type === "signin") {
      const { doSignIn } = this.props.authActions;
      let temp =   doSignIn({
        email,
        password,
      });

      console.log("ca  ", temp)
    }
    if (modal_type === "forgotpassword") {
      const { doForgotPassword } = this.props.authActions;
      doForgotPassword({
        email,
      });
    }
  }

  handelOnClickDropDown() {
    console.log("I am comfsdfs");
    this.setState((prevState) => ({
      show_account_dropdown: !prevState.show_account_dropdown,
    }));
  }

  handelOnClickLogout(event) {
    console.log("coming here ");
    event.preventDefault();
    const { doSignout } = this.props.authActions;
    const { email, token } = getAuthData();
    doSignout({
      email,
      token,
    });
  }

  render() {
    const { isLoggedIn } = getAuthData();
    const {
      show_account_dropdown,
      modal_open,
      modal_type,
      full_name,
      email,
      password,
      confirm_password,
      checkbox,
      button_status,
    } = this.state;
    const navigation_links = [
      {
        title: "Home",
        to: "/quests",
      },
      {
        title: "Why UpCaliber",
        to: "why-caliber",
      },

    ];

    const navigation_links_list =
      navigation_links &&
      navigation_links.map(({ title, to }, index) => {
        return (
          <li >
      { ! isLoggedIn &&
            <Link className="homehed"  to={to}  title={title}>
              {title}
             </Link>}
      {  isLoggedIn &&
            <NavLink className="homeheding" to={to}  title={title}>
              {title}
            </NavLink>}
          </li>
        );
      });

    return (
      <div className="header">  
       
             {/* <header> */}
        <div className="headerin">
          <Logo/>
          <div className="account">
            {isLoggedIn && (
              <Fragment>
                <Account
                account_name="Amit rai"
                  isLoggedIn={isLoggedIn}
                  show_account_dropdown={show_account_dropdown}
                  onClick={this.handelOnClickDropDown}
                  logout={this.handelOnClickLogout}
                  profile_links ={ [
                    { title:"Profile Information", to:"/profile/basic-information", permissions:"No matter now" },
                    { title:"My Quests", to:"/questdetails", permissions:"No matter now" },
                    { title:"My Ratings & Reviews", to:"/ratings", permissions:"No matter now" },
                    { title:"My Team", to:"/teams", permissions:"No matter now" },
                    { title:"Sign Out ", to:"/logout", permissions:"No matter now" }
                   ] }                
                />
              </Fragment>
            )}
         </div>
          <div className="navigation">
            <ul>{navigation_links_list}
            {!isLoggedIn && (
                <li key="signUo" onClick={() => this.openModal("signin")}>
                  {/* <a>SignIn</a> */}
                 <div className="imageheader"><img src="login.png" className="logopng111"/></div>
                  </li>
            )}
            </ul>
          </div>
        </div>
         <Dialog
         onClose={() => {
           this.setState({
            modal_open:false
           })
         }}
         aria-labelledby="simple-dialog-title"
         open={this.state.modal_open}
       >
          <div id="auth-modal">
            <div className="auth-modal-in">
              {modal_type === "signup" && <div><h1>Si<label className="underscore">gn U</label>p <span  className="floatright" onClick={() => {
           this.setState({
            modal_open:false
           })
         }}><FontAwesomeIcon icon={faTimes}/> </span></h1></div>}
              {modal_type === "signin" && <div className="divsign"><h1>Si<label  className="underscore">gn I</label>n<span className="floatright" onClick={() => {
           this.setState({
            modal_open:false
           })
         }}><FontAwesomeIcon icon={faTimes} /> </span></h1></div>}
              {modal_type === "forgotpassword" && <h1>Forgot Password ?</h1>}
              <form onSubmit={this.handleOnSubmit}>
                {modal_type === "signup" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faUser} className="icons1111" />
                    <Input className="bodernull111"
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      autocomplete="off"
                      value={full_name}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}
                 {modal_type === "signup" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faEnvelope} className="icons1111"/>
                    <Input className="bodernull111"
                      type="text"
                      name="email"
                      placeholder="Email ID"
                      autocomplete="off"
                      value={email}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}
                 {modal_type === "signin" && (
                <fieldset className="inputHome">
                   <FontAwesomeIcon icon={faEnvelope} className="icons1111" />
                  <Input className="bodernull111"
                    type="text"
                    name="email"
                    placeholder="User Name"
                    autocomplete="off"
                    value={email}
                    onChange={this.handelOnChange}


                    
                  />
                 
                </fieldset>
                 )}
                {modal_type !== "forgotpassword" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faKey} className="icons1111"/>
                    <Input className="bodernull111"
                      type="password"
                      name="password"
                      placeholder="password"
                      autocomplete="off"
                      value={password}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}
                {modal_type === "signin" && (
                  <fieldset>
                    <span
                      onClick={() => this.openModal("forgotpassword")}
                      title="Forgot Password ?"
                      className="link"
                    >
                      Forgot Password ?
                    </span>
                  </fieldset>
                )}
                {modal_type === "signup" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faKey} className="icons1111" />
                    <Input className="bodernull111"
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      autocomplete="off"
                      value={confirm_password}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}
<div>
    <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /><p className="terms3">I accept terms & condition </p>
      </div>
                <fieldset>
                  {modal_type === "signup" && (
                    <Button
                    className="questtwoheadingpspan"
                      type="submit"
                      value="Sign Up"
                      disabled={this.state.email == "" || this.state.password =="" ||this.state.full_name == "" || this.state.confirm_password ==""}
                    />
                  )}
                  {modal_type === "signin" && (
                    <Button
                      type="submit"
                      value="Sign In"
                      disabled={this.state.email == "" || this.state.password ==""}
                    />
                  )}
                  {modal_type === "forgotpassword" && (
                    <Button
                      type="submit"
                      value="Send Reset Instructions"
                      disabled={this.state.email == ""}
                    />
                  )}
                </fieldset>
              </form>
              {modal_type === "signup" && (
                <p>
                  Already have an account ?{" "}
                  <span
                    onClick={() => this.openModal("signin")}
                    title="Sign In"
                  >
                    Sign In
                  </span>
                </p>
              )}
              {modal_type === "signin" && (
                <p>
                  Don't have an account yet ?{" "}
                  <span
                    onClick={() => this.openModal("signup")}
                    title="Sign Up" className="signupcolor"
                  >
                    Sign Up
                  </span>
                </p>
              )}
              {modal_type === "forgotpassword" && (
                <p>
                  <span
                    onClick={() => this.openModal("signin")}
                    title="Sign In"
                  >
                    &larr; Back to Sign In
                  </span>
                </p>
              )}
            </div>
          </div>
       </Dialog>
       {/* </header> */}
      </div>

    );
  }
}

// const mapStateToProps = (store) => {


//   return {
//     auth: store.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {

//     authActions: bindActionCreators(authActions, dispatch),

//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;