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
import { Dialog } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faTimes,
  faEye,

} from "@fortawesome/free-solid-svg-icons";
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
            },
     
            getmatatitlestatus:"",
            getmatatitlecontent:"",
            getmatadescriptionstatus:"",
            getmatadescriptioncontent:"",
            getimagecountstatus:"",
            getimagecount_total:"",
            getaltstatus:"",
            getaltcount:"",
            viewrobotstxt:false,
            viewsitmapxml:false
        }
        this.websitecheck=this.websitecheck.bind(this);
        this.robots=this.robots.bind(this);
        this.sitemap=this.sitemap.bind(this);
    }

    websitecheck(){

      const regesxm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      if (this.state.url.trim() === "") {
        this.setState({
          snackbar: true,
          error: "please enter the URL.",
        });
        return;
      }
      if (!this.state.url.match(regesxm)) {
        this.setState({
          snackbar: true,
          error: "please enter a valid  URL.",
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

         let link2= getBaseUrl()+"/getonpagefactordata?url="+this.state.url;
      axios.get(link2).then((response) =>{
      //   console.log("my response");
      //  console.log("HHHHHHh",response.data.MetaTile)
         
              try {
                this.setState({
                getmatatitlestatus:response.data.MetaTile.status,
                getmatatitlecontent:response.data.MetaTile.content,
                getmatadescriptionstatus:response.data.MetaDescription.status,
                getmatadescriptioncontent:response.data.MetaDescription.content,
                getimagecountstatus:response.data.Image_Count.status,
                getimagecount_total:response.data.Image_Count.Count,
                getaltstatus:response.data.Alt_Count.status,
                getaltcount:response.data.Alt_Count.Count,
                
                })
              } catch (error) {
                this.setState({
                getmatatitlestatus:"Not Found",
                getmatatitlecontent:"N/A",
                getmatadescriptionstatus:"Not Found",
                getmatadescriptioncontent:"N/A",
                getimagecountstatus:"Not Found",
                getimagecount_total:"N/A",
                getaltstatus:"Not Found",
                getaltcount:"N/A"
                })
              }
              console.log("ujjawal",this.state.getmatatitlecontent);
         },(error) =>{
            
         }
         )

    }

    closeSnackbar = () => {
        this.setState({ snackbar: false });
      };

      robots(){
        this.setState({
          viewrobotstxt:true
        })
      }

      sitemap(){
        this.setState({
          viewsitmapxml:true
        })
      }
    render(){
        return(
            <div >
                 <div className="ml-auto mr-auto onpageMain mb-5">
            <div >
              <p className=" ml-4 mt-3 onpageheadingcolor">
                On Page Factor
              </p>
              <Grid className=" mywebsite_container onpage_factor pb-5">
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

               <Grid className=" mywebsite_container onpage_factor ">
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


              <Grid className=" mywebsite_container onpage_factor mt-3">
                <Grid item md={2} className="onpageheadingcolor">
                    Meta Title
                </Grid>
                
                <Grid item md={2}>
                    {this.state.getmatatitlestatus}
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                    {this.state.getmatatitlestatus== "Found" ? (<span className="right_icon"><i class="fa fa-check-circle"></i></span>):
                    (<span className="wrong_icon"><i class="fa fa-times-circle"></i></span>)}
                    </div>
                </Grid>
                
                <Grid item md={2}>
                {this.state.getmatatitlecontent}
                </Grid>

                <Grid item md={4}>
                   <p className="onpageparagraph"> The meta title of your page has a length of 3 characters. Most search engines will truncate meta titles to 60 to 70 characters with target keywords.</p>
                </Grid>
                
               
              </Grid>

              <Grid className=" mywebsite_container onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    Meta Description
                </Grid>
                
                <Grid item md={2}>
                {this.state.getmatadescriptionstatus}
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                    {this.state.getmatadescriptionstatus== "Found" ? (<span className="right_icon"><i class="fa fa-check-circle"></i></span>):
                    (<span className="wrong_icon"><i class="fa fa-times-circle"></i></span>)}
                    </div>
                </Grid>
                
                <Grid item md={2}>
                {this.state.getmatadescriptioncontent}
                </Grid>

                <Grid item md={4}>
                   <p className="onpageparagraph"> The meta Description of your page has a length of 39 characters. Most search engines will truncate meta titles to 60 to 70 characters with target keywords.</p>
                </Grid>
                
               
              </Grid>


              <Grid className=" mywebsite_container onpage_factor mt-2">
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
          // expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
        >
        <Typography 
        onClick={this.robots} 
        className="viewheading">
                {this.state.getrobotsdata.status=="Found"?("View Robots.txt"):("No Robots.txt")}
        </Typography>

        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography className="robotsdatacontent">
            {this.state.getrobotsdata.content}
          </Typography>
        </AccordionDetails> */}
      </Accordion>
                  
                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph"> Need to optimize Robots.txt file.</p>
                </Grid>
                
               
              </Grid>


              <Grid className=" mywebsite_container onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    Sitemap.xml(For Crawler)
                </Grid>
                
                <Grid item md={2}>
                    {this.state.getsitemap.status}
                </Grid>

                <Grid item md={2}>
                    <div className="d-flex">
                    {this.state.getsitemap.status == "Found" ? (<span className="right_icon"><i class="fa fa-check-circle"></i></span>):
                    (<span className="wrong_icon"><i class="fa fa-times-circle"></i></span>)}
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  
                   <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
        >

        <Typography   
        onClick={this.sitemap}
        className="viewheading">
                {this.state.getsitemap.status=="Found"?("View Sitemap.xml"):("No Sitemap.xml")}
        </Typography>
          
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography className="robotsdatacontent">
            {this.state.getsitemap.content}
          </Typography>
        </AccordionDetails> */}
      </Accordion>

                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph">  Need to add sitemap.xml file.</p>
                </Grid>
                
               
              </Grid>

              <Grid className=" mywebsite_container onpage_factor mt-2">
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

              <Grid className=" mywebsite_container onpage_factor mt-2">
                <Grid item md={2} className="onpageheadingcolor">
                    Img Alt-Tag
                </Grid>
                
                <Grid item md={2}>
                   {this.state.getaltstatus}
                </Grid>

                <Grid item md={2}>
                <div className="d-flex">
                    {this.state.getaltstatus == "Found" ? (<span className="right_icon"><i class="fa fa-check-circle"></i></span>):
                    (<span className="wrong_icon"><i class="fa fa-times-circle"></i></span>)}
                    </div>
                </Grid>
                
                <Grid item md={2}>
                  {this.state.getaltcount}{this.state.getaltstatus == "Found" ?("/"):("")}{this.state.getimagecount_total}
                </Grid>

                <Grid item md={4}>
                <p className="onpageparagraph">  Your Website has "img" tag and few of them are missing the required "alt" attribute.</p>
                </Grid>
                
               
              </Grid>

              <Grid className=" mywebsite_container onpage_factor mt-2">
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

              <Grid className=" mywebsite_container onpage_factor mt-2">
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

                <Dialog
                        open={this.state.viewrobotstxt}
                        onClose={() =>{
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        className=""
                    > 
                    <div className="onpagrdialog">
                   
           
                    <span
                          className="floatright crossbtncolor mt-2"
                          onClick={() => {
                            this.setState({
                              viewrobotstxt: false,
                            });
                          }}
                        >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
                    <div>
                     <h5 className="title" >View Robots.txt</h5>
                     </div>
                     {this.state.getrobotsdata.content}
                  
                  </div>
          </Dialog> 

          <Dialog
                        open={this.state.viewsitmapxml}
                        onClose={() =>{
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        className=""
                    > 
                    <div className="onpagrdialog">
                   
           
                    <span
                          className="floatright crossbtncolor mt-2"
                          onClick={() => {
                            this.setState({
                              viewsitmapxml: false,
                            });
                          }}
                        >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
                    <div>
                     <h5 className="title" >View Sitemap.xml</h5>
                     </div>
                     {this.state.getsitemap.content}
                  
                  </div>
          </Dialog> 

          </div>
        )
    }
}
export default HOC(OnPageFactor);