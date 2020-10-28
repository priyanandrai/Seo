import React from "react";
import HOC from "../components/HOC";
import Card from "@material-ui/core/Card";
import { Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Button from "@material-ui/core/Button";
import "./mywebsite.css";

class Mywebsite extends React.Component {
  constructor(props) {
    super(props);
    this.MywebsiteUrl = this.MywebsiteUrl.bind(this);
    this.state = {
     url:"",
     user_id:""
   
    };
  }
  componentWillMount(){
      this.setState({
        url:window.localStorage.getItem("url")
      })
  }
  MywebsiteUrl(){
    const regesxm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (this.state.url.trim() === "") {
      this.setState({
        snackbar: true,
        error: "Please Enter your Url",
      });
      
      return;
    } else if (!this.state.url.match(regesxm)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid Url .",
      });
     

      return;
    }
  
    let url = getBaseUrl() + "/mywebsite";
    let temp={
        "url":this.state.url,
        "user_id":window.localStorage.getItem("id")
    }
    axios
      .post(url, temp)
      .then(
        (response) => {
            this.setState({
                snackbar: true,
                error: response.data.message, 
            })
        window.localStorage.setItem("url",this.state.url)
        },
        (error) => {
          
        
        }
      )
      .catch((e) => {});

    //
  
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
    return (
      <div>
       
          <Grid container>
            <Grid item md={6}>
              <div className="mt-5 mb-5 ml-5">
                <Form.Label>Enter Url</Form.Label>
                 <Form.Control
                  type="name"
                  placeholder="Enter url"
                  id="Name"
                  className=""
                    value={this.state.url}
                    onChange={(e) =>
                      this.setState({ url: e.target.value })
                  }
                />
              </div>
              <div className="mywebsite_btn">
              <Button
            variant="contained"
            className="mywebsite_startbtn mb-3"
            onClick={this.MywebsiteUrl}
          >
            Analyse Your Website
          </Button>
              </div>
              <div className="trafiic_count">
          <Grid container className="mt-5 pt-3 ">
            <Grid item md={4} className="grid_content">
              <div className="count_hit" >
                <p className="total_count">No. of Url </p>
                <p className="hit_counting">
                    {/* {this.state.total_count} */}
                    </p>

               
              </div>
            </Grid>
            <Grid item md={4} className="grid_content">
              <div className="count_hit">
                <p className="total_count">Valid Url</p>
                <p className="hit_counting">
                    {/* {this.state.archieved_views}  */}
                    </p>
               
              </div>
            </Grid>
            <Grid item md={4} className="grid_content">
              <div className=" count_hit">
                <p className="total_count">Invalid Url</p>
                <p className="hit_counting">
                    {/* {this.state.remaining_balance_views} */}
                    </p>
              
              </div>
            </Grid>
          </Grid>
        </div>
            </Grid>
            

           
              <Grid item md={6}>
                  <div className="right_iframe">
                      
                <iframe className="iframe_width"
                  src={this.state.url}
                //   title="W3Schools Free Online Web Tutorials"
                ></iframe>
                </div>
              </Grid>
            </Grid>
          
            <div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={this.state.snackbar}
            onClose={this.closeSnackbar}
            message={
              this.state.error === null ? this.state.message : this.state.error
            }
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="warning"
                  onClick={this.closeSnackbar}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </div>
    );
  }
}
export default HOC(Mywebsite);
