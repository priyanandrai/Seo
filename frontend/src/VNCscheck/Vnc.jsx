import React from 'react';
import { render } from 'react-dom';

import ReactPlayer from "react-player";

 
//  function Vnc(){
//     return(
//          <div>hiiihiii
//              hiii
//              hiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiii<br/><br/><br/><br/><br/><br/><br/>hiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiiihiii
//    <VncDisplay url="ws://192.168.0.108:8080/ws/vnc/4d263614534e4a40539783a8ae5cfafd" /> 
//   </div>);
// }
const VncDisplay = require('react-vnc-display');
class Vnc extends React.Component{
    

    render(){
        return(
            <div class="mt-5">
                hii
                <VncDisplay url="https://www.youtube.com/watch?v=FMflHJCmwEk"/> 
                {/* <ReactPlayer
                    playing={true}
                    width="100%"
                    height="100%"
                    url={"https://www.youtube.com/watch?v=FMflHJCmwEk"}
                    controls={true}
                  /> */}
            </div>
        )
    }
}
export default Vnc;