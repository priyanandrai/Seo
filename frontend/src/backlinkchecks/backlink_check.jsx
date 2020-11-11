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
      mainForm: true,
      backlinkquery:"",
      selectdomain:"1",
      data: [
        {
        id: 1,
        NumberRow:"1",
        backlinkurl:"fdgfdgdfg",
        details:"dsfsd"
      }
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
      placedomain:"Please enter your domain"
    };
    
  }
  checkwebsiterank() {
    if (this.state.backlinkquery === "") {
      this.setState({
        snackbar: true,
        error: "Please Fill the Your Domain",
        // backlinksrank: true,
        // mainForm: false 
      });
      return;
   
    }
    if (this.state.selectdomain === "") {
      this.setState({
        snackbar: true,
        error: "Please Select the domain",
        // backlinksrank: true,
        // mainForm: false 
      });
      return;
   
    }
     this.setState({
       backlinksrank: true,
        mainForm: false 
      });
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };
  render() {
    return (
      <div className="backllink_color pt-5">
        {this.state.mainForm ? (
          <div className="ml-auto mr-auto backlink_center">
            <div className="">
              <p className="backlink_checkdomain ml-4 mt-3">
                Check Your Domain Search Engine Ranking
              </p>
              <Grid className=" mywebsite_container backlink_padding">
                <Grid item md={4}>
                  <div className="ml-4 mr-4 mt-3">
                    <Form.Control
                      type="name"
                      placeholder={this.state.placedomain}
                      id="Name"
                      className="doamin_backlinked"
                      autoComplete="off"
                        value={this.state.backlinkquery}
                        onChange={(e) => this.setState({ backlinkquery: e.target.value })}
                    />
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className="ml-4 mr-4 mt-3">
                  <Select className="backlink_seclect"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.selectdomain}
              onChange={(e) => {
                this.setState({
                  selectdomain: e.target.value,
                });
              }}
            >
              <MenuItem value={1}>Google.com</MenuItem>
              <MenuItem value={2}>  Ask Me.com</MenuItem>
              <MenuItem value={3}> Yahoo.com</MenuItem>
              <MenuItem value={4}>  Bing.com</MenuItem>
              <MenuItem value={5}>Duck duckgo</MenuItem>
              <MenuItem value={6}> Yippy Search</MenuItem>
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
              <div className="backlink_first">
                <p className="backlink_checkdomain ml-4 pt-3">
                  Check Your Domain Search Engine Ranking
                </p>
                <div className="back_first_card">
                  <Grid className=" mywebsite_container">
                    <Grid item md={4}>
                      <div className="p-3">
                        <Form.Control
                          type="name"
                          placeholder="Please Enter Your Domain"
                          id="Name"
                          className=""
                          autoComplete="off"
                          value={this.state.backlinkquery}
                          onChange={(e) => this.setState({ backlinkquery: e.target.value })}
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="p-3">
                      <Select className="backlink_seclect"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.selectdomain}
              onChange={(e) => {
                this.setState({
                  selectdomain: e.target.value,
                });
              }}
            >
              <MenuItem value={1}>Google.com</MenuItem>
              <MenuItem value={2}>  Ask Me.com</MenuItem>
              <MenuItem value={3}> Yahoo.com</MenuItem>
              <MenuItem value={4}>  Bing.com</MenuItem>
              <MenuItem value={5}>Duck duckgo</MenuItem>
              <MenuItem value={6}> Yippy Search</MenuItem>
            </Select>
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="p-3">
                        <button className="backlink_btn"
                        onClick={this.checkwebsiterank}>
                          Check Your Website Rank
                        </button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div>
              <div className="backlink_first mt-5">
                <p className="backlink_checkdomain ml-4 pt-3">
                  Ranking Checkes
                </p>
                <div className="ml-5">
                  <div className="d-flex">
                    <span className="backlink_doamin">Domain Name </span>
            <span className="ml-5">:{this.state.backlinkquery}</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">Search Engine</span>
            <span className="ml-5">:{this.state.selectdomain}</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">
                      Total Balance Count{" "}
                    </span>
                    <span className="ml-1">:</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">Your Site Ranking </span>
                    <span className="ml-4">:</span>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="backlink_doamin">Total Reaches </span>
                    <span className="ml-5">:</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="backlink_first2 mt-5">
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
      </div>
    );
  }
}
export default HOC(Backlink_check);
