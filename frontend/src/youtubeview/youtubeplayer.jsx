import React from "react";
import HOC from "../components/HOC";
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player";
import "./youtube.css";


class Youtubeplayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  

  render() {
    return (
        <div className="">
        <div className="animate__animated animate__backInRight  mr-5 marginleftpannel">
                <Card>
                  <ReactPlayer
                    playing={true}
                    width="100%"
                    height="100%"
                    url={this.state.url}
                    controls={true}
                  />
                  {/* <VncDisplay url="ws://localhost:8000/ws/vnc/9804520e010c8320bad59e7285815139" /> */}
                </Card>
              </div>
      </div>
    );
  }
}
export default HOC(Youtubeplayer);
