import React from "react";
import HOC from "../components/HOC";
import Card from "@material-ui/core/Card";
import { Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import LinearProgress from "@material-ui/core/LinearProgress";
import "./email_extractor.css";

class Email_extractor extends React.Component {
  constructor(props) {
    super(props);
    this.emailextractor = this.emailextractor.bind(this);
    this.selectalloption = this.selectalloption.bind(this);
    this.copyall = this.copyall.bind(this);
    this.state = {
      query: "",
      userid: "",

      type: [],
      check: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
      check7: false,
      emailarr:[],
      emailoutput: "",
      buttontext: "Start Extracting",
      buttondisabled: "",
      emailprogessbar: false,
      // duration:10000,
    
    };
  }
  emailextractor() {
    let selectradio = document.getElementsByName("radio");
    if (this.state.query === "") {
      this.setState({
        snackbar: true,
        error: "Fill the Query",
      });
      return;
    }
    // if (this.state.checked === "") {
    //   this.setState({
    //     snackbar: true,
    //     error: "Choose Any One .",
    //   });
    //   return;
    // }
    let temp1 = "";

    if (selectradio[0].checked === true) {
      temp1 = "Google.Com";
    } else if (selectradio[1].checked === true) {
      temp1 = "Ask Me.Com";
    } else if (selectradio[2].checked === true) {
      temp1 = "Yahoo.Com";
    } else if (selectradio[3].checked === true) {
      temp1 = "Bing.Com";
    } else if (selectradio[4].checked === true) {
      temp1 = "Baidu";
    } else if (selectradio[5].checked === true) {
      temp1 = "Yandex";
    } else if (selectradio[6].checked === true) {
      temp1 = "Duck duckgo";
    } else if (selectradio[7].checked === true) {
      temp1 = "Yippy Search";
    } else {
      this.setState({
        snackbar: true,
        error: "Please Select Search Engine Type .",
      });
      return;
    }
  // let urlwindow= window.open( "https://www.Google.com/search?q=" + this.state.query + "&start=" +0)

  //   setTimeout(() => {
      
  //   }, 10000);


    // if (this.state.searchquery0 ==="") {
    //   this.setState({
    //     snackbar: true,
    //     error: "Please Select Search Engine Type",
    //   });
    //   return;
    // }
    let temp = {
      userid: window.localStorage.getItem("id"),
      query: this.state.query,
      type: temp1,
    };
    this.setState({
      buttontext: "Processing...",
      emailprogessbar: true,
    });
   
    let url = getBaseUrl() + "/startemailextractor";
    axios
      .post(url, temp)
      .then(
        (response) => {
         let urlData = "";
        //  console.log(response.data)
          if(response.data.Emails != undefined)
          {
            
            response.data.Emails.map((datas) =>{
              if(urlData ==""){
                urlData =datas
              }else {
                urlData =urlData +"\n"+datas;
              }
            }) 
          } 
          this.state.emailarr=urlData.split(",");
          //  console.log("urlData ", this.state.emailarr);
          //  console.log(this.state.emailarr.length);
          this.setState({
            emailoutput:urlData,
            buttontext: "Start Extracting",
            emailprogessbar: false,
            // snackbar: true,
            // error: response.data.message,
          });
        },
        (error) => {
          this.setState({
        
            buttontext: "Start Extracting",
            emailprogessbar: false,
            // snackbar: true,
            // error: response.data.message,
          });
        }
      )
      .catch((e) => {});

    // this.setState({
    //   emailoutput:response.data.Emails,
    // });
  }
  copyall() {
    var r = document.createRange();
    console.log(document.getElementById("myInput").value);
    r.selectNode(document.getElementById("myInput"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({
      snackbar: true,
      error: "Copy To Clipboard",
    });
    return;
  }
  selectalloption() {
    // this.setState({
    //   check:!this.state.check,
    //   check1:!this.state.check1,
    //   check2:!this.state.check2,
    //   check3:!this.state.check3,
    //   check4:!this.state.check4,
    //   check5:!this.state.check5,
    //   check6:!this.state.check6,
    //   check7:!this.state.check7
    // })
  }
//     divide() {
//     var txt;
//     txt = this.state.emailoutput().value;
//     var text = txt.split(",");
//     var str = text.join(',</br>');
//     document.write(str);
// } 
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };
  render() {
    return (
      <div>
        <div className="bulk_email_font">Bulk Email Extractor</div>
        <div>
          <Grid className=" mywebsite_container">
            <Grid item md={6}>
              <div className="ml-5 mt-5">
                <div className="mr-5">
                  <Form.Label>Search Query</Form.Label>

                  <Form.Control
                    type="name"
                    placeholder="Enter Query"
                    id="Name"
                    className=""
                    autoComplete="off"
                    value={this.state.query}
                    onChange={(e) => this.setState({ query: e.target.value })}
                  />
                </div>{" "}
              </div>
              <u className="select_engine mt-3">Select Search Engine</u>

              <div className="first_checkbox ">
                <span>
                  <Checkbox
                    onClick={this.selectalloption}
                    disabled={true}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </span>
                <span>Select All</span>
              </div>
              <div className="mt-3 ml-5">
                <Grid className=" mywebsite_container">
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                        <input
                          type="radio"
                          name="radio"
                          id="sel"
                          className="radio_font"
                          value=""
                          onChange={(e) => {
                            if (e.target.checked === true) {
                              this.state.type.push("Google.Com");
                              this.setState({
                                type: this.state.type,
                              });
                            }
                          }}
                          //  checked={this.state.check}
                        />
                      </span>
                      <label className="ml-3 input_label" for="sel">
                        Google.Com
                      </label>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                        <input
                          type="radio"
                          name="radio"
                          id="sel1"
                          value=""
                          onChange={(e) => {
                            if (e.target.checked === true) {
                              this.state.type.push("Ask Me.Com");
                              this.setState({
                                type: this.state.type,
                              });
                            }
                          }}
                          // checked={this.state.check1}
                        />
                      </span>
                      <label className="ml-3 input_label" for="sel1">
                        Ask Me.Com
                      </label>
                    </div>
                  </Grid>
                </Grid>
                <Grid className=" mywebsite_container">
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                        <input
                          type="radio"
                          name="radio"
                          id="sel2"
                          value=""
                          onChange={(e) => {
                            if (e.target.checked === true) {
                              this.state.type.push("Yahoo.Com");
                              this.setState({
                                type: this.state.type,
                              });
                            }
                          }}
                          //  checked={this.state.check2}
                        />
                      </span>
                      <label className="ml-3 input_label" for="sel2">
                        Yahoo.Com
                      </label>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                        <input
                          type="radio"
                          name="radio"
                          id="sel3"
                          value=""
                          onChange={(e) => {
                            if (e.target.checked === true) {
                              this.state.type.push("Bing.Com");
                              this.setState({
                                type: this.state.type,
                              });
                            }
                          }}
                          //  checked={this.state.check3}
                        />
                      </span>
                      <label className="ml-3 input_label" for="sel3">
                        Bing.Com
                      </label>
                    </div>
                  </Grid>
                </Grid>
                {/* <Grid className=" mywebsite_container">
                    <Grid item md={6}>
                      <div className="left_first_check">
                        <span>
                          <input type="radio" name="radio"
                           id="sel4"
                          value=""
                          onChange={(e)=>{
                             
                              if(e.target.checked === true){
                                  this.state.type.push("Baidu")
                              this.setState({
                                type:  this.state.type
                              })
                             }
                          }}
                           //  checked={this.state.check4}
             
                          />
                         
                        </span>
                        <label className="ml-3 input_label" for="sel4">Baidu</label>
                       
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="left_first_check">
                        <span>
                          <input type="radio" name="radio"
                           id="sel5"
                          value=""
                          onChange={(e)=>{
                             
                              if(e.target.checked === true){
                                  this.state.type.push("Yandex")
                              this.setState({
                                type:  this.state.type
                              })
                             }
                          }}
                             // checked={this.state.check5}
                
                          />
                         
                        </span>
                        <label className="ml-3 input_label" for="sel5">Yandex</label>
                       
                      </div>
                    </Grid>
                  </Grid> */}
                <Grid className=" mywebsite_container">
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                        <input
                          type="radio"
                          name="radio"
                          id="sel6"
                          value=""
                          onChange={(e) => {
                            if (e.target.checked === true) {
                              this.state.type.push("Duck duckgo");
                              this.setState({
                                type: this.state.type,
                              });
                            }
                          }}
                          // checked={this.state.check6}
                        />
                      </span>
                      <label className="ml-3 input_label" for="sel6">
                        Duck duckgo
                      </label>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                        <input
                          type="radio"
                          name="radio"
                          id="sel7"
                          value=""
                          onChange={(e) => {
                            if (e.target.checked === true) {
                              this.state.type.push("Yippy Search");
                              this.setState({
                                type: this.state.type,
                              });
                            }
                          }}
                          // checked={this.state.check7}
                        />
                      </span>
                      <label className="ml-3 input_label" for="sel7">
                        Yippy Search
                      </label>
                    </div>
                  </Grid>
                </Grid>
                <div className="check_button_start mt-4">
                  <button
                    className="start_check_color"
                    onClick={this.emailextractor}
                  >
                    {this.state.buttontext}
                  </button>
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="email_output mt-5 mb-5">
                {/* <div className="scopy_all">
                <button className="copy_button" onClick={this.copyall}>copy All</button>
              </div> */}
                <div className="content_item">
                  <p className="extarct_mail">Output</p>
                  <div className="d-flex">
                  <p  className="extarct_mail">Total Count:</p>
                  <p className="length-color">{this.state.emailarr.length}</p>
                  </div>
                  <u className="copy_all_content" onClick={this.copyall}>
                    Copy All
                  </u>
                  {/* <button className="copy_button" onClick={this.copyall}>copy All</button> */}
                </div>
                <textarea
                  className="input_textarea"
                  id="myInput"
                  name="txt"
                  value={this.state.emailarr.join("\n")}
                  disabled={true}
                >
                  {/* {this.state.emailoutput} */}
                </textarea>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Dialog
            onClose={() => {
              // this.setState({
              //   emailprogessbar: false,
              // });
            }}
            open={this.state.emailprogessbar}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="email_progess">
              <p className="email_testing_url">Testing Live URL</p>
              <div className="email_bar_center">
                {" "}
                <LinearProgress />
              </div>
              <p className="this_might_center">
                This might take a minute or two
              </p>
            </div>
          </Dialog>
        </div>
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
export default HOC(Email_extractor);
