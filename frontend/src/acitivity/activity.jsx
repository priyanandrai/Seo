import React from 'react';
import "./activity.css";
import HOC from "../components/HOC1";
import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";
class Activity extends React.Component{
    render(){
        return(
            <div className="container">
                <div>
                    <p className="text-center heading-Website-activity">Website Activity</p>
                </div>
          <Card className="grid-width-format mt-3">
        <Grid container > 
                    
                    <Grid item md={3} >
                        <div className="div-width">
                       <p className="heading-activity text-center">UserName</p>
                       </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="div-width">
                    <p className="heading-activity text-center">User ID</p>
                    </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="div-width">
                    <p className="heading-activity text-center">Time</p>
                    </div>
                    </Grid>
                    <Grid item md={3}>
                    <div className="div-width" >
                    <p className="heading-activity text-center">Action</p>
                    </div>
                    </Grid>
          </Grid>
          </Card>
                </div>
        )
    }
}
export default HOC(Activity);