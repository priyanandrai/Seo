import React from 'react';
import "./activity.css";
import HOC from "../components/HOC1";
import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";
import axios from "axios";
import { getBaseUrl } from "../utils";
class Activity extends React.Component{
    constructor(props){
        super(props);
        this.state={
           activitylist:[]
        }
    }
    componentWillMount(){
        let self = this;
    let url =
      getBaseUrl() + "/activitylist";
    axios.get(url).then(
      (response) => {
        self.setState({
            activitylist:response.data
         
        });
      },
      (error) => {}
    );
    }
    componentDidMount(){

    }
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
                            {this.state.activitylist.map((value)=>(
                            <p className="text-center">{value.username}</p>
                            ))}
                       </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="div-width">
                    <p className="heading-activity text-center">User ID</p>
                    {this.state.activitylist.map((value)=>(
                            <p className="text-center">{value.user_id}</p>
                            ))}
                    </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="div-width">
                    <p className="heading-activity text-center">Time</p>
                    {this.state.activitylist.map((value)=>(
                            <p className="text-center">{value.time}</p>
                            ))}
                    </div>
                    </Grid>
                    <Grid item md={3}>
                    <div className="div-width" >
                    <p className="heading-activity text-center">Action</p>
                    {this.state.activitylist.map((value)=>(
                            <p className="text-center">{value.activity}</p>
                            ))}
                    </div>
                    </Grid>
          </Grid>
          </Card>
                </div>
        )
    }
}
export default HOC(Activity);