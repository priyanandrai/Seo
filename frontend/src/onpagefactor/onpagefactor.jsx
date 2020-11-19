import React from 'react';
import "./onpagefactor.css";
import HOC from "../components/HOC";
import Grid from "@material-ui/core/Grid";
import { Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class OnPageFactor extends React.Component{
    constructor(){
        super()
        this.state={
            placedomain: "Please enter your domain",
            attributesummary:false,
            url:"",
            snackbar:false,
            getrobotsdata:{
              status:"",
              content:""
            },
            getsitemap:{
              status:"",
              content:""
            }
        }
        this.websitecheck=this.websitecheck.bind(this);
    }

    websitecheck(){

        if (this.state.url === "") {
            this.setState({
              snackbar: true,
              error: "Please Fill the Your Domain",
            });
            return;
          }

        this.setState({
            attributesummary:true
        })

        let self = this;
         let link = getBaseUrl()+"/getrobotsdata?url="+this.state.url;
      axios.get(link).then((response) =>{
            this.setState({
               getrobotsdata:response.data
            })
         
         },(error) =>{
            
         }
         )

       
        let link1= getBaseUrl()+"/getsitemap?url="+this.state.url;
      axios.get(link1).then((response) =>{
       
            this.setState({
               getsitemap:response.data
            })
             
         
         },(error) =>{
            
         }
         )
    }

    closeSnackbar = () => {
        this.setState({ snackbar: false });
      };
    render(){
        return(
            <div >
                 <div className="ml-auto mr-auto onpageMain mb-5">
            <div >
              <p className=" ml-4 mt-3 onpageheadingcolor">
                On Page Factor
              </p>
              <Grid className=" mywebsite_container onpage_factor">
                <Grid item md={8}>
                  <div className="slidedomin">
                    <div className="ml-4 mr-4 mt-3">
                      <Form.Control
                        type="name"
                        placeholder={this.state.placedomain}
                        id="Name"
                        className="doamin_nameonpage"
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
                      className="onpage_btn ml-4 mr-4 mt-3"
                      onClick={this.websitecheck}
                    >
                      Check Your Website
                    </button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
       

          {this.state.attributesummary ? ( 
          <div className="ml-auto mr-auto onpageMain1 mb-5">
            <div >
              <p className=" ml-4 mt-3 onpageheadingcolor">
                Attributes
              </p>

               <Grid className=" d-flex onpage_factor ">
                <Grid item md={2} className="ontitleheadingcolor">
                     Title
                </Grid>
                
                <Grid item md={2} className="ontitleheadingcolor">
                    A
                </Grid>

                <Grid item md={2} className="ontitleheadingcolor">
                   B
                </Grid>
                
                <Grid item md={2} className="ontitleheadingcolor">
                  C
                </Grid>

                <Grid item md={4} className="ontitleheadingcolor">
                   Remarks
                </Grid>
                
               
              </Grid>


              <Grid className=" d-flex onpage_factor mt-3">
                <Grid item md={2} className="onpageheadingcolor">
                    Meta Title
                </Grid>
                
                <Grid item md={2}>
                    Found/Not Found
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                        <span className="wrong_icon"><i class="fa fa-times-circle"></i></span>
                        <span className="right_icon ml-2"><i class="fa fa-check-circle"></i></span>
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                </Grid>

                <Grid item md={4}>
                   <p className="onpageparagraph"> The meta title of your page has a length of 3 characters. Most search engines will truncate meta titles to 60 to 70 characters with target keywords.</p>
                </Grid>
                
               
              </Grid>

              <Grid className=" d-flex onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    Meta Description
                </Grid>
                
                <Grid item md={2}>
                    Found/Not Found
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                        <span className="wrong_icon"><i class="fa fa-times-circle"></i></span>
                        <span className="right_icon ml-2"><i class="fa fa-check-circle"></i></span>
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                </Grid>

                <Grid item md={4}>
                   <p className="onpageparagraph"> The meta Description of your page has a length of 39 characters. Most search engines will truncate meta titles to 60 to 70 characters with target keywords.</p>
                </Grid>
                
               
              </Grid>


              <Grid className=" d-flex onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    Robots.txt
                </Grid>
                
                <Grid item md={2}>
                   {this.state.getrobotsdata.status}
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                    {this.state.getrobotsdata.status == "Found" ? (<span className="right_icon"><i class="fa fa-check-circle"></i></span>):
                    (<span className="wrong_icon"><i class="fa fa-times-circle"></i></span>)}
                    </div>
                </Grid>
                
                <Grid item md={2}>
                 <Accordion>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="viewheading">View Robots.txt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {this.state.getrobotsdata.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
                  
                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph"> Need to optimize Robots.txt file.</p>
                </Grid>
                
               
              </Grid>


              <Grid className=" d-flex onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    Sitemap.xml(For Crawler)
                </Grid>
                
                <Grid item md={2}>
                    {this.state.getsitemap.status}
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                        <span className="wrong_icon"><i class="fa fa-times-circle"></i></span>
                        <span className="right_icon ml-2"><i class="fa fa-check-circle"></i></span>
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="viewheading">View Sitemap.xml</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {this.state.getsitemap.content}
          </Typography>
        </AccordionDetails>
      </Accordion>

                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph">  Need to add sitemap.xml file.</p>
                </Grid>
                
               
              </Grid>

              <Grid className=" d-flex onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                   Availability of Search Facility
                </Grid>
                
                <Grid item md={2}>
                    Found/Not Found
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                        <span className="wrong_icon"><i class="fa fa-times-circle"></i></span>
                        <span className="right_icon ml-2"><i class="fa fa-check-circle"></i></span>
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph">  Need serach facility create for your site.</p>
                </Grid>
                
               
              </Grid>

              <Grid className=" d-flex onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    Img Alt-Tag
                </Grid>
                
                <Grid item md={2}>
                    Found/Not Found
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                        <span className="wrong_icon"><i class="fa fa-times-circle"></i></span>
                        <span className="right_icon ml-2"><i class="fa fa-check-circle"></i></span>
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph">  Your Website has "img" tag and few of them are missing the required "alt" attribute.</p>
                </Grid>
                
               
              </Grid>

              <Grid className=" d-flex onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    HTML Validation
                </Grid>
                
                <Grid item md={2}>
                    Found/Not Found
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                        <span className="wrong_icon"><i class="fa fa-times-circle"></i></span>
                        <span className="right_icon ml-2"><i class="fa fa-check-circle"></i></span>
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph">  Need to fix all these Errors and Warnings to maintain the Quality of your website.</p>

                </Grid>
                
               
              </Grid>

              <Grid className=" d-flex onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                   Heading Tags
                </Grid>
                
                <Grid item md={2}>
                    Found/Not Found
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                        <span className="wrong_icon"><i class="fa fa-times-circle"></i></span>
                        <span className="right_icon ml-2"><i class="fa fa-check-circle"></i></span>
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph">  Need to optimize Heading Tags.</p>
                </Grid>
                
               
              </Grid> 
          </div>
            </div>
            ) : null}
           

<div>

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
export default HOC(OnPageFactor);