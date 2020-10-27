import React from "react";
import HOC from "../components/HOC";
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player";
import axios from "axios";
import { getBaseUrl } from "../utils";
import "./youtube.css";


class Youtubeplayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      list:[],
    };
  }
  componentWillMount(){

    let url = getBaseUrl() + "/getyoutubelist";
    axios.get(url).then(
      (response) => {
        this.setState({
          list: response.data,
        });
      },
      (error) => {}
    );
    // this.setState({
    //   url: window.localStorage.getItem("ClientUrl")
    // })
    
  }
  

  render() {
    return (
        <div className="">
        <div className="react_player">
                <Card style={{
                    marginTop: "1%",
                    marginBottom:"1%",
                    width: "100%",
                    height: "80vh",
                  }}>
                    {this.state.list.map((value)=>(
                  <ReactPlayer
                    playing={true}
                    width="100%"
                    height="80vh"
                    url={value.url}
                    controls={true}
                  />))}
                  {/* <VncDisplay url="ws://localhost:8000/ws/vnc/9804520e010c8320bad59e7285815139" /> */}
                </Card>
              </div>
      </div>
    );
  }
}
export default HOC(Youtubeplayer);
