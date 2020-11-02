import React from "react";
import "./mywebsiteseoreport.css";
import HOC from "../components/HOC";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Card } from "react-bootstrap";
class Mywebsiteseoreport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="heading-center">
          <p className="mt-5 headingwidth1">My Website SEO Report</p>
          <p className="para-content">
            SEO is based on planning and actually doing the work day in, day
            out. An SEO report is the analysis of
            <br /> this planning and work combo, in order to see the effects
            produced.
          </p>
        </div>
        <Grid container>
          <Grid item md={12}>
            <div className="ml-5 mr-5">
              <Card>
                <Accordion className="cardbackground">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="color-white-content">Website Traffic</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-light">
                    <Typography>
                    
                    <Grid container className="seo_report">
             
             <Grid item md={2} className="ml-5 my_gridone" >
             <a className="a_tag_color" href="welcome">
             <div className="boder_radious" id="draggable">
                 <Card className="my_web bg_color1"  >
                  <p className="gridfirst">one</p>
                 </Card> </div>
             </a>
             </Grid>
             <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable1">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable2">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable3">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable4">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable5">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
             </Grid>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>

              <Card className="mt-3">
                <Accordion className="cardbackground">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="color-white-content">Search Summary</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-light">
                    <Typography>
                    <Grid container className="seo_report">
             
             <Grid item md={2} className="ml-5 my_gridone" >
             <a className="a_tag_color" href="welcome">
             <div className="boder_radious" id="draggable">
                 <Card className="my_web bg_color1"  >
                  <p className="gridfirst">one</p>
                 </Card> </div>
             </a>
             </Grid>
             <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable1">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable2">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable3">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable4">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable5">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
             </Grid>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>

              <Card className=" mt-3">
                <Accordion className="cardbackground">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="color-white-content">Backlink Summary</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-light">
                    <Typography>
                    <Grid container className="seo_report">
             
             <Grid item md={2} className="ml-5 my_gridone" >
             <a className="a_tag_color" href="welcome">
             <div className="boder_radious" id="draggable">
                 <Card className="my_web bg_color1"  >
                  <p className="gridfirst">one</p>
                 </Card> </div>
             </a>
             </Grid>
             <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable1">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable2">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable3">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable4">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable5">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
             </Grid>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>

              <Card className=" mt-3">
                <Accordion className="cardbackground">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="color-white-content">Organic Search</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-light">
                    <Typography>
                    <Grid container className="seo_report">
             
             <Grid item md={2} className="ml-5 my_gridone" >
             <a className="a_tag_color" href="welcome">
             <div className="boder_radious" id="draggable">
                 <Card className="my_web bg_color1"  >
                  <p className="gridfirst">one</p>
                 </Card> </div>
             </a>
             </Grid>
             <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable1">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable2">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable3">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable4">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable5">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
             </Grid>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>

              <Card className="mt-3">
                <Accordion  className="cardbackground">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="color-white-content">Traffic Source</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-light">
                    <Typography>
                    <Grid container className="seo_report">
             
             <Grid item md={2} className="ml-5 my_gridone" >
             <a className="a_tag_color" href="welcome">
             <div className="boder_radious" id="draggable">
                 <Card className="my_web bg_color1"  >
                  <p className="gridfirst">one</p>
                 </Card> </div>
             </a>
             </Grid>
             <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable1">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable2">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable3">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable4">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable5">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
             </Grid>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>

              <Card className="mt-3">
                <Accordion  className="cardbackground">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="color-white-content">Device Report</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-light">
                    <Typography>
                    <Grid container className="seo_report">
             
             <Grid item md={2} className="ml-5 my_gridone" >
             <a className="a_tag_color" href="welcome">
             <div className="boder_radious" id="draggable">
                 <Card className="my_web bg_color1"  >
                  <p className="gridfirst">one</p>
                 </Card> </div>
             </a>
             </Grid>
             <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable1">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable2">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable3">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable4">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable5">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
             </Grid>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>

              <Card className="mt-3 mb-5">
                <Accordion  className="cardbackground">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="color-white-content">Site Health</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-light">
                    <Typography>
                    <Grid container className="seo_report">
             
             <Grid item md={2} className="ml-5 my_gridone" >
             <a className="a_tag_color" href="welcome">
             <div className="boder_radious" id="draggable">
                 <Card className="my_web bg_color1"  >
                  <p className="gridfirst">one</p>
                 </Card> </div>
             </a>
             </Grid>
             <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable1">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable2">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable3">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable4">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={2} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious" id="draggable5">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
             </Grid>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>



            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default HOC(Mywebsiteseoreport);
