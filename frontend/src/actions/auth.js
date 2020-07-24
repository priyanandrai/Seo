import {
    AUTH_RESET_ALL,
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNIN_REQUEST,
    AUTH_FORGOT_PASSWORD_REQUEST,
    AUTH_CHECK_RESET_PASSWORD_REQUEST,
    AUTH_RESET_PASSWORD_REQUEST,
    AUTH_READ_PROFILE_REQUEST,
    AUTH_UPDATE_PROFILE_REQUEST,
    AUTH_CHANGE_PASSWORD_REQUEST,
    AUTH_CHECK_SESSION_REQUEST,
    AUTH_SIGNOUT_REQUEST,
  } from "../constants/action-types";
  
  const doResetAll = () => {
    return {
      type: AUTH_RESET_ALL,
    };
  };
  
  const doSignUp = (payload) => {
    return {
      type: AUTH_SIGNUP_REQUEST,
      payload,
    };
  };
  
  const doSignIn = (payload) => {
    return {
      type: AUTH_SIGNIN_REQUEST,
      payload,
    };
  };
  
  const doForgotPassword = (payload) => {
    return {
      type: AUTH_FORGOT_PASSWORD_REQUEST,
      payload,
    };
  };
  
  const doCheckResetPassword = (payload) => {
    return {
      type: AUTH_CHECK_RESET_PASSWORD_REQUEST,
      payload,
    };
  };
  
  const doResetPassword = (payload) => {
    return {
      type: AUTH_RESET_PASSWORD_REQUEST,
      payload,
    };
  };
  
  const doReadProfile = (payload) => {
    return {
      type: AUTH_READ_PROFILE_REQUEST,
      payload,
    };
  };
  
  const doUpdateProfile = (payload) => {
    return {
      type: AUTH_UPDATE_PROFILE_REQUEST,
      payload,
    };
  };
  
  const doChangePassword = (payload) => {
    return {
      type: AUTH_CHANGE_PASSWORD_REQUEST,
      payload,
    };
  };
  
  const doCheckSession = (payload) => {
    return {
      type: AUTH_CHECK_SESSION_REQUEST,
      payload,
    };
  };
  
  const doSignout = (payload) => {
    return {
      type: AUTH_SIGNOUT_REQUEST,
      payload,
    };
  };
  
  export {
    doResetAll,
    doSignUp,
    doSignIn,
    doForgotPassword,
    doCheckResetPassword,
    doResetPassword,
    doReadProfile,
    doUpdateProfile,
    doChangePassword,
    doCheckSession,
    doSignout,
  };
  