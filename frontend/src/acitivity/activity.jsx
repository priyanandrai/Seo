import React from 'react';
import "./activity.css";
import HOC from "../components/HOC1";
import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";
import axios from "axios";
import { getBaseUrl } from "../utils";
import { parse } from '@fortawesome/fontawesome-svg-core';
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
          let temp = []
          response.data.map(item=>{
              item.time= new Date(parseInt(item.time)).toString();
              temp.push(item);
          })
        self.setState({
            activitylist:temp
            
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
                {this.state.activitylist.map((value)=>(
          <Card className="grid-width-format mt-3">
        <Grid container > 
                    
                    <Grid item md={3} >

                        <div className="div-width">
                            
                            <p className="heading-activity text-center pt-3">{value.username}</p>
                           
                       </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="div-width">
                    <p className="heading-activity text-center pt-3">{value.user_id}</p>
                   
                    </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="div-width">
                           <p className="heading-activity text-center pt-3">{value.time}</p>
                    
                    </div>
                    </Grid>
                    <Grid item md={3}>
                    <div className="div-width" >
                    <p className="heading-activity text-center pt-3">{value.activity}</p>
                    
                    </div>
                    </Grid>
          </Grid>
          </Card>
                ))}
                </div>
        )
    }
}
export default HOC(Activity);