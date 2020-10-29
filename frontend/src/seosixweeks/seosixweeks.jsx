import React from 'react';
import './seosixweeks.css';
import HOC from "../components/HOC";
import Grid from "@material-ui/core/Grid";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card } from "react-bootstrap";
class Seosixweeks extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
            <div className="heading-center">
                        <p className="mt-5 headingwidth">SEO in 6 Weeks</p>
                        <p className="para-content">SEO is based on planning and actually doing the work day in, day out. 
                            An SEO report is the analysis of<br/> this planning and work combo, in order to 
                            see the effects produced.</p>
            </div>
           <Grid  container>
          
        <Grid  item md={12}>
           <div className="ml-5 mr-5">     
        <Card>
           <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography >Week 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
       <p className="weeks-heading-formatting"> Research & Competitor Analysis</p>
       <ul type="radio" className="list-formt">
           <li>1. The primary step is to outline the baseline.</li>
           <li>2. Wherever will your web site stand on organic ranking at present?</li>
           <li>3. Then analyze your web site and your Competitor. </li>
           <li>4. Scan your website for SEO errors.</li>
           <li>5. Fixing these errors can build your web site a lot of search engine friendly and build </li>
          <p className="keyword-format">It easier for you to rank for your keywords.</p>
          <ol type="1">
              <li>a. Keyword analysis </li>
              <li>b. Determine Your high Competitors</li>
              <li>c. Analyze Your Competitors </li>
              <li>d. Social Media and Content Audit </li>
              <li>e. Verify Your Barrier to Entry and Strategy</li>
          </ol>

       </ul>
      </Typography>
    </AccordionDetails>
  </Accordion>
  </Card>
 
      
  
    <Card  className="mt-3">
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>Week 2</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  </Card>
 
    <Card  className=" mt-3">
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>Week 3</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  </Card>
  
    <Card  className=" mt-3">
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>Week 4</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  </Card>
  
    <Card  className="mt-3">
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>Week 5</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  </Card>
  
    <Card  className="mt-3 mb-5">
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>Week 6</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  </Card>
  </div> 
  </Grid>
  
  </Grid>
</div>
        )
    }
}
export default HOC(Seosixweeks);