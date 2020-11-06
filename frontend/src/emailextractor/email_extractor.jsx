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
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./email_extractor.css";

class Email_extractor extends React.Component {
  constructor(props) {
    super(props);
    this.emailextractor = this.emailextractor.bind(this);
    this.selectalloption = this.selectalloption.bind(this);
    this.state = {
      searchquery: "",
      searchquery0: "false",
      check: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
      check7: false,
      emailoutput: "",
      searchquery1: "",
      searchquery2: "",
      searchquery3: "",
      searchquery4: "",
      searchquery5: "",
      searchquery6: "",
      searchquery7: "",
    };
  }
  emailextractor() {
    if (this.state.searchquery === "") {
      this.setState({
        snackbar: true,
        error: "Fill the Query",
      });
      return;
    }
    this.setState({
      emailoutput: this.state.searchquery,
    });
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
    console.log(this.state.searchquery0, "seacrh 0");
    console.log(this.state.searchquery1, "seacrh 1");
    console.log(this.state.searchquery2, "seacrh 2");
    console.log(this.state.searchquery3, "seacrh 3");
    console.log(this.state.searchquery4, "seacrh 4");
    console.log(this.state.searchquery5, "seacrh 5");
    console.log(this.state.searchquery6, "seacrh 6");
    console.log(this.state.searchquery7, "seacrh 7");
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };
  render() {
    return (
      <div>
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
                    value={this.state.searchquery}
                    onChange={(e) =>
                      this.setState({ searchquery: e.target.value })
                    }
                  />
                </div> </div>
                <p className="select_engine mt-5">Select Search Engine</p>

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
                <div className="mt-3">
                  <Grid className=" mywebsite_container ml-4">
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input
                            type="radio"
                            name="radio"
                            className="radio_font"
                          />
                          {/* <Checkbox
                       
                      //  checked={this.state.check}
                          value={this.state.searchquery0}
                          onChange={(e) =>
                            this.setState({ searchquery0: e.target.value })
                         }
                          
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Google.Com</span>
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input type="radio" name="radio" />
                          {/* <Checkbox
                  // checked={this.state.check1}
                          style={{}}
                             value={this.state.searchquery1}
                  onChange={(e) =>
                    this.setState({ searchquery1: e.target.value })
                 }
                      
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Ask Me.Com</span>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid className=" mywebsite_container ml-4">
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input type="radio" name="radio" />
                          {/* <Checkbox
                      //  checked={this.state.check2}
                          style={{}}
                             value={this.state.searchquery2}
                  onChange={(e) =>
                    this.setState({ searchquery2: e.target.value })
                 }
                      
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Yahoo.Com</span>
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input type="radio" name="radio" />
                          {/* <Checkbox
                      //  checked={this.state.check3}
                          style={{}}
                             value={this.state.searchquery3}
                  onChange={(e) =>
                    this.setState({ searchquery3: e.target.value })
                 }
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Bing.Com</span>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid className=" mywebsite_container ml-4">
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input type="radio" name="radio" />
                          {/* <Checkbox
                    //  checked={this.state.check4}
                          style={{}}
                             value={this.state.searchquery4}
                  onChange={(e) =>
                    this.setState({ searchquery4: e.target.value })
                 }
                         
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Baidu</span>
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input type="radio" name="radio" />
                          {/* <Checkbox
                        // checked={this.state.check5}
                          style={{}}
                             value={this.state.searchquery5}
                  onChange={(e) =>
                    this.setState({ searchquery5: e.target.value })
                 }
                      
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Yandex</span>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid className=" mywebsite_container ml-4">
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input type="radio" name="radio" />
                          {/* <Checkbox
                        // checked={this.state.check6}
                          style={{}}
                          value={this.state.searchquery6}
                          onChange={(e) =>
                            this.setState({ searchquery6: e.target.value })
                         }
                         
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Duck duckgo</span>
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="left_first_check ml-4">
                        <span>
                          <input type="radio" name="radio" />
                          {/* <Checkbox
                      // checked={this.state.check7}
                          style={{}}
                          value={this.state.searchquery7}
                          onChange={(e) =>
                            this.setState({ searchquery7: e.target.value })
                         }
                        
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        /> */}
                        </span>
                        <span className="ml-3">Yippy Search</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="check_button_start mt-4">
                  <button
                    className="start_check_color"
                    onClick={this.emailextractor}
                  >
                    Start
                  </button>
                </div>
             
            </Grid>
            <Grid item md={6}>
              <div className="email_output mt-5 mb-5">
                <p className="extarct_mail">Output :</p>
                <textarea className="input_textarea">
                  {this.state.emailoutput}
                </textarea>
              </div>
            </Grid>
          </Grid>
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
