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
        <Card >
           <Accordion className="cardbackground">
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
      <p className="weeks-heading-formatting"> Relevant Keywords Research</p>
      <p>After the primary section, </p>
      <ul>
          <li>1. It’s time to begin thinking of your keywords. </li>
          <li>2. You must analyze relevant keywords and so use those results to set up and build your high-quality content.</li>
          <li>3. How to notice these keywords? Initially, you must do keyword analysis. To implement the analysis you should:</li>
          <li>4. Define relevant topics which are related to your business</li>
          <li>5. By checking search volumes of keywords and analyze competitors</li>
          <li>6. Rely on your findings and begin coming up with your content</li>
      </ul>
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
      <p className="weeks-heading-formatting">Optimizing On-page issue</p>
      <ul>
          <li>1. On-page SEO is the follow of optimizing individual sites so as to rank higher and earn a lot of relevant traffic in search engines. </li>
          <li>2. On-page refers to each the content and hypertext mark-up language ASCII text file of a page that may be optimized, as against off-page SEO that refers to links and alternative external signals.</li>
          <li>3. On-page SEO (also called “on-site SEO”) is the following of optimizing website content for search engines and users. Common on-page SEO practices embody optimizing title tags, content, internal links and URLs.</li>
          <ul>
              <li>  a. Title Tag</li>
              <li>  b. Meta Description</li>
              <li>  c. Internal Links</li>
              <li>  d. Header Tags </li>
              <li>  e. Image Name & ALT Tags </li>
          </ul>
      </ul>
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
      <p className="weeks-heading-formatting">Link Profile and Developing the Domain Authority</p>
      <p>Links matter! Take advantage of the links that may race you higher in Google searches. The most 
          valuable links are so-called inbound links (or backlinks), which means that some other website 
          that has high authority uses your webpage links in their content and website.
          </p>
      <p>How do links affect search engine visibility?</p>
      <p>High authority sites are reliable, popular, and they rank high in search engines. When these kinds of 
          sites use your page links, it will also increase your authority and ranking in Google.</p>
      <p>In other words, Inbound links are like ”votes” which 
              have a real impact on your domain authority. This is definitely a rising trend</p>
     <p>It is also recommended to link to different parts within one website since 
         this can increase the dwell time and improve the user experience by offering relevant 
         related content and engaging CTAs.</p>
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
      <p className="weeks-heading-formatting">Advance Content Marketing: Content is king</p>
      <p>It’s a reality, however it’s still true. Though succeeding at SEO involves several factors, content is 
          that key and has the most important influence on organic ranking.</p>
        <p>Creating quality content is that the most significant factor 
            you'll be able to do to optimize your website's look in organic search results.</p>
            <p>Defining the relevant keywords is that the opening in making a pursuit 
                engine optimized website content. By victimization the keywords and building
                 your themes around them can produce content that provides answers to Google searches.</p>
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
      <Typography>Week 6</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      <p className="weeks-heading-formatting">Analysis Traffic</p>
      <p>You can’t scale your marketing until you know what’s working and what’s not. 
          By getting your tracking all set up correctly you’ll
           be able to see the traffic sources, content, and keywords that are driving revenue.</p>
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
      <Typography>Week 7</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      <p className="weeks-heading-formatting">Brand Visibility & Get Social Shares</p>
      <p>We all apprehend that link-building could be a crucial component that contains a nice impact on web site 
          authority. Even while not an on the spot influence on SEO, a decent social media strategy will increase 
          your overall complete visibility. It helps customers perceive what price your complete provides and the 
          way it caters to your target market’s wants, at the same time redirecting users to your web site and 
          increasing referral traffic. a decent social media selling strategy helps you earn organic links. Organically 
          attained links or natural links directly improve the name of an internet site and wherever it ranks on 
          Google and alternative search engines.</p>
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