import React from 'react';
import { arrayOf, string, bool, func, number, object } from 'prop-types';
import RFB from 'novnc-core'
import omit from 'object.omit';

export default class VncDisplay extends React.PureComponent {
  static propTypes = {
    url: string.isRequired,
    style: object,
    width: number,
    height: number,
    encrypt: bool,
    wsProtocols: arrayOf(string),
    onClipboard: func,
    onUpdateState: func,
    onPasswordRequired: func,
    onBell: func,
    onDesktopName: func,
    connectTimeout: number,
    disconnectTimeout: number,
    shared: bool
  };

  static defaultProps = {
    style: {},
    encrypt: false,
    wsProtocols: ['binary'],
    trueColor: true,
    localCursor: true,
    debug: true,
    connectTimeout: 500,
    disconnectTimeout: 5000,
    width: 1280,
    height: 720,
  };

  componentDidMount() {
   
    this.connect();
  }

  componentWillUnmount() {
    this.disconnect();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.rfb) {
      return;
    }
    /*
    if (nextProps.scale !== this.props.scale) {
      this.rfb.get_display().set_scale(nextProps.scale || 1);
      this.get_mouse().set_scale(nextProps.scale || 1);
    }
    */
  }

  disconnect = () => {
    if (!this.rfb) {
      return;
    }

    this.rfb.disconnect();
    this.rfb = null;
  };

  connect = () => {
      alert("going ot make object")
    //this.disconnect();

    if (!this.canvas) {
      return;
    }

    const options = Object.assign(omit(this.props, [
      'name',
      'connectTimeout',
      'url',
      'width',
      'height',
      'debug'
    ]), {
      encrypt: this.props.url.startsWith('wss:') || this.props.encrypt,
      shared: true,
    });
    options["credentials"] = { password: "selenoid" }
   
try {
 
    this.rfb = new RFB(document.getElementById('canvas'),this.props.url, {...options});
 
} catch (error) {
    console.log("i am coming here", error)
}
    
    console.log("going to connect with ");
    console.log(this.props.url);
    console.log(this.canvas);
    console.log(this.props.url);
    console.log(options);
    console.log(this.rfb);
     
  };

  registerChild = (ref) =>{
     
       this.canvas = ref;
       console.log("I am coming here",this.canvas)
  }

  handleMouseEnter = () => {
    if (!this.rfb) {
      return;
    }

    document.activeElement && document.activeElement.blur();
    //this.rfb.get_keyboard().grab();
    //this.rfb.get_mouse().grab();
  };

  handleMouseLeave = () => {
    if (!this.rfb) {
      return;
    }

    //this.rfb.get_keyboard().ungrab();
    //this.rfb.get_mouse().ungrab();
  };

  render() {
    return (
      <canvas id ="canvas"
        style={this.props.style}
        ref={this.registerChild}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave} />
    )
  }
}