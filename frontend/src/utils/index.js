const isLoggedIn = () => {
    const isLoggedIn = window.localStorage.isLoggedIn
      ? JSON.parse(window.localStorage.isLoggedIn)
      : false;
  
    return isLoggedIn;
  };

  const getBaseUrl = () => {
    return "http://localhost:8070";
  };
  
  const getAuthData = () => {
    let temp  = {
      isLoggedIn: window.localStorage.getItem("isLoggedIn"),
      full_name: window.localStorage.getItem("full_name"),
      email: window.localStorage.getItem("email"),
      token: window.localStorage.getItem("token"),
    }
  
    console.log("here ",temp);
    return temp;
  }
  
  const getWindowSize = () => {
    const w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHei;
  
    return {
      width: x,
      height: y,
    };
  };
  
  export { isLoggedIn, getAuthData, getWindowSize,getBaseUrl };
  