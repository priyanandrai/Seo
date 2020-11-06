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
      searchquery:"",
      searchquery0:"",
      searchquery1:"",
      searchquery2:"",
      searchquery3:"",
      searchquery4:"",
      searchquery5:"",
      searchquery6:"",
      searchquery7:"",
      
    };
  }
  emailextractor(){
    if (this.state.searchquery === "") {
      this.setState({
        snackbar: true,
        error: "Fill the Query",
      });
      return;
    }
  }
  selectalloption(){
    // var totalelements= document.form[0].elements.length;
    console.log(this.state.searchquery0,"seacrh 0")
    console.log(this.state.searchquery1,"seacrh 1")
    console.log(this.state.searchquery2,"seacrh 2")
    console.log(this.state.searchquery3,"seacrh 3")
    console.log(this.state.searchquery4,"seacrh 4")
    console.log(this.state.searchquery5,"seacrh 5")
    console.log(this.state.searchquery6,"seacrh 6")
    console.log(this.state.searchquery7,"seacrh 7")
    var items = document.getElementsByName('val');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox')
                items[i].checked = true;
        }
    // for(var checkbox in checkboxes)
    //   checkbox.checked = source.checked;
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
                </div>
                <p className="select_engine mt-5">Select Search Engine</p>
                <form>
                <div className="first_checkbox ">
                  <span>
                    {/* <input type="checkbox" name="sel_all" onClick={this.selectalloption}/> */}
                    <Checkbox
                  onClick={this.selectalloption}
              
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </span>
                  <span>Select All</span>
                </div>
                <div>
                <Grid className=" mywebsite_container">
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_1"/> */}
                        <Checkbox
                        name="val"
                          style={{}}
                          value={this.state.searchquery0}
                          onChange={(e) =>
                            this.setState({ searchquery0: e.target.value })
                         }
                          // onChange={() => this.setState({ show: !this.state.show })}
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Google.Com</span>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_2"/> */}
                        <Checkbox
                   name="val"
                          style={{}}
                             value={this.state.searchquery1}
                  onChange={(e) =>
                    this.setState({ searchquery1: e.target.value })
                 }
                      
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Ask Me.Com</span>
                    </div>
                  </Grid>
                </Grid>
                <Grid className=" mywebsite_container">
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_3"/> */}
                        <Checkbox
                        name="val"
                          style={{}}
                             value={this.state.searchquery2}
                  onChange={(e) =>
                    this.setState({ searchquery2: e.target.value })
                 }
                      
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Yahoo.Com</span>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_4"/> */}
                        <Checkbox
                        name="val"
                          style={{}}
                             value={this.state.searchquery3}
                  onChange={(e) =>
                    this.setState({ searchquery3: e.target.value })
                 }
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Bing.Com</span>
                    </div>
                  </Grid>
                </Grid>
                <Grid className=" mywebsite_container">
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_5"/> */}
                        <Checkbox
                       name="val"
                          style={{}}
                             value={this.state.searchquery4}
                  onChange={(e) =>
                    this.setState({ searchquery4: e.target.value })
                 }
                         
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Baidu</span>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_6"/> */}
                        <Checkbox
                        name="val"
                          style={{}}
                             value={this.state.searchquery5}
                  onChange={(e) =>
                    this.setState({ searchquery5: e.target.value })
                 }
                      
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Yandex</span>
                    </div>
                  </Grid>
                </Grid>
                <Grid className=" mywebsite_container">
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_7"/> */}
                        <Checkbox
                         name="val"
                          style={{}}
                          value={this.state.searchquery6}
                          onChange={(e) =>
                            this.setState({ searchquery6: e.target.value })
                         }
                         
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Duck duckgo</span>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="left_first_check">
                      <span>
                      {/* <input type="checkbox" name="sel_8"/> */}
                        <Checkbox
                      name="val"
                          style={{}}
                          value={this.state.searchquery7}
                          onChange={(e) =>
                            this.setState({ searchquery7: e.target.value })
                         }
                        
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </span>
                      <span>Yippy Search</span>
                    </div>
                  </Grid>
                </Grid></div></form>
              <div className="check_button_start">
                <button className="start_check_color" onClick={this.emailextractor}>Start</button>
              </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="email_output mt-5 mb-5">
                <p className="extarct_mail">Output :</p>
                <textarea className="input_textarea"></textarea>
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
