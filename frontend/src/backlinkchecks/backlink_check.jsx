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
import DataTable from "react-data-table-component";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./backlink_check.css";

class Backlink_check extends React.Component {
  constructor(props) {
    super(props);
    this.checkwebsiterank = this.checkwebsiterank.bind(this);

    this.state = {
      backlinksrank: false,
      linearprogressbar:false,
      mainForm: true,
      backlinkquery: "",
      message:"",
      selectdomain: "Google.com",
      data: [
        {
          id: 1,
          NumberRow: "1",
          backlinkurl: "fdgfdgdfg",
          details: "dsfsd",
        },
      ],
      columns: [
        {
          name: "#",
          selector: "NumberRow",
          sortable: true,
          center: true,
        },
        {
          name: "URL",
          selector: "backlinkurl",
          sortable: true,
          center: true,
        },
        {
          name: "Search Details",
          selector: "details",
          sortable: true,
          center: true,
        },
      ],
      placedomain: "Please enter your domain",
      google: "Google.com",
      askme: "Ask Me.com",
      yahoo: "Yahoo.com",
      bing: "Bing.com",
      duck: "Duck duckgo",
      yippy: "Yippy Search",
      siteranking: "N/A",
      websiterank: "N/A",
      domainname: "N/A",
      searchengine: "N/A",
      countbalance: "N/A",
    };
  }

  checkwebsiterank() {
    if (this.state.backlinkquery === "") {
      this.setState({
        snackbar: true,
        error: "Please Fill the Your Domain",
      });
      return;
    }
    if (this.state.selectdomain === "") {
      this.setState({
        snackbar: true,
        error: "Please Select the domain",
      });
      return;
    }

    let self = this;
    try {
      
   
   
    let url =
      // getBaseUrl() +
      `http://data.alexa.com/data?cli=10&dat=qwertyuioplkjhgfdsazxcvbnm&url=${this.state.backlinkquery}`;
      this.setState({
        linearprogressbar: true,
        message:"Please Wait Your working in Pending"
      })
    axios.get(url, 
       {headers: {
     "Access-Control-Allow-Origin" :"*",
    "Content-Type":"application/json"}}
     ).then(
      (response) => {
        try {
          var XMLParser = require("react-xml-parser");
          var xml = new XMLParser().parseFromString(response.data);
          // console.log("xml",xml.children[0].children[2].children[1].attributes.RANK)
          this.setState({
            siteranking:
              xml.children[0].children[2].children[0].attributes.TEXT,
            websiterank:
              xml.children[0].children[2].children[1].attributes.RANK,
              linearprogressbar: false,
          });
        } catch (error) {
          console.log("error",error)
          this.setState({
            linearprogressbar: false,
            snackbar: true,
            error: "Please Try Again",
          });
        }
      },
      (error) => {
        this.setState({
          linearprogressbar:false,
          snackbar:true,
          error:"Please try again after sometme ",
        })
      }
    );

  } catch (error1) {
      console.log("errrrr1",error1)
  }

    this.setState({
      backlinksrank: true,
      mainForm: true,
      domainname: this.state.backlinkquery,
      searchengine: this.state.selectdomain,
    });
  }

  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
    return (
      <div className="backllink_color pt-5">
        {this.state.mainForm ? (
          <div className="ml-auto mr-auto backlink_center ">
            <div className="">
              <p className="backlink_checkdomain ml-4 mt-3">
                Check Your Domain Search Engine Ranking
              </p>
              <Grid className=" mywebsite_container backlink_padding">
                <Grid item md={4}>
                  <div className="siding">
                    <div className="ml-4 mr-4 mt-3">
                      <Form.Control
                        type="name"
                        placeholder={this.state.placedomain}
                        id="Name"
                        className="doamin_backlinked"
                        autoComplete="off"
                        value={this.state.backlinkquery}
                        onChange={(e) =>
                          this.setState({ backlinkquery: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className="ml-4 mr-4 mt-3">
                    <Select
                      className="backlink_seclect"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.selectdomain}
                      onChange={(e) => {
                        this.setState({
                          selectdomain: e.target.value,
                        });
                      }}
                    >
                      <MenuItem value={this.state.google}>Google.com</MenuItem>
                      <MenuItem value={this.state.askme}> Ask Me.com</MenuItem>
                      <MenuItem value={this.state.yahoo}> Yahoo.com</MenuItem>
                      <MenuItem value={this.state.bing}> Bing.com</MenuItem>
                      <MenuItem value={this.state.duck}>Duck duckgo</MenuItem>
                      <MenuItem value={this.state.yippy}>
                        {" "}
                        Yippy Search
                      </MenuItem>
                    </Select>
                    {/* <Form.Control
                      type="name"
                      placeholder="Enter Query"
                      id="Name"
                      className=""
                      autoComplete="off"
                      //   value={this.state.query}
                      //   onChange={(e) => this.setState({ query: e.target.value })}
                    /> */}
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div>
                    <button
                      className="backlink_btn ml-4 mr-4 mt-3"
                      onClick={this.checkwebsiterank}
                    >
                      Check Your Website Rank
                    </button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        ) : null}

        {this.state.backlinksrank ? (
          <form>
            <div>
              <div className=" backlink_center mt-5 ml-auto mr-auto">
                <p className="backlink_checkdomain ml-4 pt-3">
                  Ranking Checkes
                </p>
                <div className="ml-5">
                  <Grid className="d-flex">
                    <Grid item md={3}>
                      <p className="backlink_doamin">Domain Name </p>
                      <p className="backlink_doamin">Search Engine</p>
                      <p className="backlink_doamin">Total Balance Count </p>
                      <p className="backlink_doamin">Your Site Ranking </p>
                      <p className="backlink_doamin">Total Reaches </p>
                    </Grid>
                    <Grid item md={3}>
                      <p className="padding_backlink">
                        {this.state.domainname}
                      </p>
                      <p className="padding_backlink">
                        {this.state.searchengine}
                      </p>
                      <p className="padding_backlink">
                        {this.state.countbalance}
                      </p>
                      <p className="padding_backlink">
                        {this.state.siteranking}
                      </p>
                      <p className="padding_backlink">
                        {this.state.websiterank}
                      </p>
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                  {/* <div className="d-flex">
                    <span className="backlink_doamin">Domain Name </span>
                    <span className="ml-5">: {this.state.domainname}</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">Search Engine</span>
                    <span className="ml-5">: {this.state.searchengine}</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">
                      Total Balance Count{" "}
                    </span>
                    <span className="ml-1">:</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">Your Site Ranking </span>
                    <span className="ml-4">: {this.state.siteranking}</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">Total Reaches </span>
                    <span className="ml-5">: {this.state.websiterank}</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div>
              <div className=" backlink_center1 mt-5 ml-auto mr-auto ">
                <p className="backlink_details">Backlink Details</p>
                <div>
                  <DataTable
                    // title="Current Session"
                    columns={this.state.columns}
                    data={this.state.data}
                    pagination={true}
                    paginationDefaultPage
                  />
                </div>
              </div>
            </div>
          </form>
        ) : null}

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
        <Dialog
          // onClose={() => {
          //   this.setState({
          //     drilldown: false,
          //   });
          // }}
          open={this.state.linearprogressbar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="linear-progress mb-4">
            <p className="ml-5 mr-5 change-profile">{this.state.message} </p>
            {this.state.linearprogressbar && (
              <LinearProgress  size={68} className="ml-5 mr-5 progress-hight" />
            )}
          </div>
        </Dialog>
      </div>
    );
  }
}
export default HOC(Backlink_check);
