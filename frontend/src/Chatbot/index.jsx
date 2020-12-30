import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import HOC from "../components/HOC";

export class Chatbot extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
render() {
    return(
        <div>

        </div>
    );
}    
}
export default HOC(Chatbot);