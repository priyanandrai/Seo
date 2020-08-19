import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";

export class Confirmotp extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
render() {
    return(
        <div>
              <Dialog
               open={this.props.flag}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
      >
           
                hello world
            
            </Dialog>
        </div>
    );
}    
}
export default Confirmotp;