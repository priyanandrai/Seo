import React, { Component } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faDownload,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import DataTable, { createTheme } from "react-data-table-component";
import { PieChart } from "react-minimal-pie-chart";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskTitle: "none",
            pieChartData: [
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
              { title: "four", value: 5, color: "#fc8256" },
              { title: "five", value: 30, color: "red" },
            ],
            datadialog: [
                {
                  id: 1,
                  website: "abc",
                  status1: "Done",
                },
                {
                  id: 2,
                  website: "def",
                  status1: "Inprogrss",
                },
                {
                  id: 3,
                  website: "ghe",
                  status1: "Failed",
                },
                {
                  id: 4,
                  website: "mhe",
                  status1: "pending",
                },
                {
                  id: 5,
                  website: "jhe",
                  status1: "Failed",
                },
              ],
              columnsdialog: [
                {
                  name: "Website",
                  selector: "website",
                  sortable: true,
                },
                {
                  name: "Status",
                  selector: "status1",
                  sortable: true,
                  left: true,
                },
              ],
        
              data: [
                {
                  id: 1,
                  sno: "1",
                  task: "create a table",
                  time: "12:30pm",
                  visual: "3123",
               
                },
                {
                  id: 2,
                  sno: "2",
                  task: "Assign login",
                  time: "03:50pm",
                  visual: "3434",
                
                },
                {
                  id: 3,
                  sno: "3",
                  task: "Create a new page",
                  time: "08:00pm",
                  visual: "2342",
                
                },
              ],
        }
    };
    // drilldown = (para) => {
    //     this.setState({ drilldown: !this.state.drilldown });
    //     if (para == "create a table") {
    //       this.setState({ taskTitle: "Create a table" });
    //     }
    //     if (para == "Assign login") {
    //       this.setState({ taskTitle: "Assign login" });
    //     }
    //     if (para == "Create a new page") {
    //       this.setState({ taskTitle: "Create a new page" });
    //     }
    //   };

  render() {
    return (
      <div className="container mt-5">
        <Grid container>
              <Grid item md={8}>
                <div>
                  <h2 className="mt-4 ml-4 progesssize">Progress Status</h2>
                </div>
                <div className="container">
                  <DataTable
                    title={this.state.taskTitle}
                    // title={this.state.title}
                    columns={this.state.columnsdialog}
                    data={this.state.datadialog}
                    // pagination={true}
                    // paginationDefaultPage
                  />
                  <br />
                </div>
              </Grid>
              <Grid item md={4}>
                <div className="piewidth mt-2 piecenter">
                  <PieChart
                    data={this.state.pieChartData}
                    animate={true}
                    // reveal ={90}
                  />
                </div>
              </Grid>
            </Grid>
      </div>
    );
  }
}

export default Tasks;
