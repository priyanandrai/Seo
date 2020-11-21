import React from "react";
import "./pagespeedtest.css";
import HOC from "../components/HOC";
import Grid from "@material-ui/core/Grid";
import { Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
class PageSpeedTest extends React.Component{
    constructor(){
        super();
        this.state={
            placeholderurl:"Enter Page URL...",
            url:"",
            iframeshow:"",
            currentDateTime: Date().toLocaleString(),
            server:"TomCat",
            browser:"Chrome"
        }
        this.webtester=this.webtester.bind(this);
    }
    webtester(){
        if (this.state.url.trim() === "") {
            this.setState({
              snackbar: true,
              error: "please enter the URL.",
            });
            return;
          }
          this.setState({
            iframeshow:this.state.url
          })
    }

    closeSnackbar = () => {
        this.setState({ snackbar: false });
      };
    render(){
     
              return(
            <div>
                         <div className="ml-auto mr-auto pagespeedMain mb-5">
            <div >
              <p className=" ml-4 mt-3 pagespeedcolor">
                Page Speed Tester
              </p>
              <Grid className=" mywebsite_container pagespeed_factor pb-5">
                <Grid item md={8}>
                  <div className="contentslide">
                    <div className="ml-4 mr-4 mt-3">
                      <Form.Control
                        type="name"
                        placeholder={this.state.placeholderurl}
                        id="Name"
                        className="url_speddtester"
                        autoComplete="off"
                       value={this.state.url}
                       onChange={(e)=>{
                           this.setState({
                               url:e.target.value
                           })
                       }}
                      />
                    </div>
                  </div>
                </Grid>
                
                <Grid item md={4}>
                  <div>
                    <button
                      className="pagetestre_btn ml-4 mr-4 mt-3"
                      onClick={this.webtester}
                    >
                     Start Test
                    </button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        

          <div className="ml-auto mr-auto pagespeedMain1 mb-5">
            <div >
          <Grid className=" mywebsite_container pagespeed_factor">
          <Grid item md={6} className="">
            <div className="right_iframe ml-3 mr-3">
              <iframe
                className="iframe_width_adjust"
                src={this.state.iframeshow}
                
              ></iframe>
            </div>
            </Grid>

              <Grid item md={6}>
                <div className=" pagespeedpara">
                    <div className="d-flex">
                    <p className="heading1">Report Generated:</p><p className="content1">{this.state.currentDateTime}</p>
                    </div>
                    <div className="d-flex">
                    <p className="heading2">Test Server Location:</p><p className="content2">{this.state.server}</p>
                    </div>
                    <div className="d-flex">
                    <p className="heading3">Browser Using:</p><p className="content3"> {this.state.browser}</p>
                    </div>
                  
                    
                  
                </div>
              </Grid>

              </Grid>          
            </div>
            </div>
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
        )
    }
}
export default HOC(PageSpeedTest);