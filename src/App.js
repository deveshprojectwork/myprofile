import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var letterStyle = {
  //   padding: 10,
  //   margin: 10,
  //   backgroundColor: "#ffde00",
  //   color: "#333",
  //   display: "inline-block",
  //   fontFamily: "monospace",
  //   fontSize: "32",
  //   textAlign: "center"
  // };

  var displayNoneStyle = {
    style:"display: none;"
  };

  var cdwordswrapperStyle = {
    width: "41.8834px" ,
    overflow: "hidden"
  };
  var translate3dStyle = {
    transform: "translate3d(-1140px, 0px, 0px)", 
    transition: "all 0s ease 0s",
    width: "4000px", 
    paddingleft: "5px",
    paddingright: "5px"
  }
  var iamdevStyle = {
    width: "41.8834px",
    overflow: "hidden"
  }

  return (
    <div>
       {/* <!--menu toggle--> */}
      <div className="menu-toggle" id="menuToggle">
          <span></span>
      </div>

      
      {/* <!--header-left--> */}
      <div className="header-left" id="scrollspy">
          {/* <!--logo--> */}
          <div className="logo bg-base-color">
              <a href="https://mariame.netlify.app/index.html" className="text-white mb-0">D</a>
          </div>
  
          {/* <!--menu/> */}
          <div className="main-menu" id="js-menu">
             <div className="cross bg-base-color">
                  <span><i className="fas fa-times text-white"></i></span>
             </div>
              <nav className="menu">
                  <ul className="menu-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="#home">Home</a>
                      </li>
          
                      <li className="nav-item">
                          <a className="nav-link" href="#about">About </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#skills">Skills</a>
                      </li>
                      {/* <!-- <li className="nav-item">
                          <a className="nav-link" href="#services">Services</a>
                      </li> --> */}
          
                      <li className="nav-item">
                          <a className="nav-link active" href="#works">Works</a>
                      </li>
          
                      <li className="nav-item">
                          <a className="nav-link" href="#blog">Blog</a>
                      </li>
          
                      <li className="nav-item">
                          <a className="nav-link" href="#contact">Contact</a>
                      </li>
                  </ul>
              </nav>
          </div>
          
          {/* <!--btn-share--> */}
          <div className="btn-share" >
              <span className="social_share text-dark"></span>
          </div>   
  
      </div>
  
      {/* <!--main--> */}
      <div className="main">
          {/* <!--Home --> */}
            {/* <section className="home bg-light vh-100" id="home"  > */}
          <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(./images/profile2.jpg)'}} >
          {/* <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(https://images.pexels.com/photos/3759099/pexels-photo-3759099.jpeg)'}} > */}
          {/* <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg)'}} > */}
          {/* <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg)'}} > */}
        <div className="container ">
          <div className="row ">
            <div className="col-lg-12 ">
              {/*social-media*/}
              <div className="social-home">
                <ul className="list-inline">
                  <li><a href="#" className="text-dark"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#" className="text-dark"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#" className="text-dark"><i className="fab fa-instagram" /></a></li>
                  <li><a href="https://github.com/deveshprojectwork/#" className="text-dark"><i className="fab fa-github" /></a></li>
                  {/* <li><a href="#" class="text-dark"><i class="fab fa-behance"></i></a></li> */}
                </ul>
              </div>
              <div className="d-flex align-items-center vh-100">
                <div className="full-width">
                  <div className="banner">
                    <h6 className="text-dark">Hi There,</h6>
                    <h1 className="cd-headline clip text-dark">I Am a
                      <span className="cd-words-wrapper" style={{width: '41.8834px', overflow: 'hidden'}}>
                        <b className="is-visible">&nbsp;Developer</b>
                        <b className="is-hidden">&nbsp;Designer</b>
                        {/* <b class="is-hidden">&nbsp;Freelancer</b> */}
                      </span>
                    </h1>
                    <p className="max-width-450 text-dark mt-20 mb-30">
                      <b /></p><h6><b>Full Stack Solution Architect</b></h6>
                    <p />
                    <p className="max-width-450 text-dark mt-20 mb-30">
                      The crossover between design and programming has always been of interest to me, 
                      I've been lucky enough to work alongside 
                      some talented teams on a number of high profile websites. I have a wide range of skills 
                      that include back-end development using open source technologies (NodeJs, .Net Core), 
                      design (working closely with designers), front-end development 
                      (Angular, ReactJs, HTML5, CSS3, Javascript, Responsive, UX), 
                      Server Administrator(AWS, Azure, GCP),database(MongoDB,cassendra,Mysql, SqlServer), 
                      load balancing, Dep-Ops, Jenkin, Azure Dev-Ops, Azure WebApps, Kubernates &amp; Docker.
                    </p>
                    <a href="#about" className="btn-custom">
                      <span><i className="fas fa-user" /></span>
                      <span> More About Me</span>
                    </a>
                  </div>
                </div>
              </div>
              {/*my-info*/}
              <div className="my-info">
                <div className="item">
                  <p className="text-dark font-w-700 mb-0">Email</p>
                  <p className="text-dark mb-0">devesh.kr.sri@gmail.com</p>
                </div>
                <div className="item">
                  <p className="text-dark font-w-700 mb-0">Phone</p>
                  <p className="text-dark mb-0">+91 9999305585</p>
                </div>
                <div className="item">
                  <p className="text-dark font-w-700  mb-0">Location</p>
                  <p className="text-dark mb-0">Gurgaon , India</p>
                </div>
              </div>
            </div> 
          </div> 
        </div>
      </section>
  
          {/* <!-- About --> */}
          <section id="about" className="section about">
              <div className="container">
                  <div className="row mb-50 pt-30">
                      <div className="col-md-12">
                          <div className="section-title">
                          <h2 className="text-dark mb-0">About me</h2>
                          <p className="text-muted mb-0">Main informations about me and what I love to do.</p>
                          </div>
                      </div>
                  </div>
                  {/* <!--Hero & info--> */}
                  <div className="row mb-50">
                      <div className="col-lg-5">
                          <div className="hero">
                              <img src="./images/hero.jpg" alt=""/>
                          </div>
                      </div>
                 
                       <div className="col-lg-7 d-flex align-items-center">
                          <div className="details">
                              <h5>Hello ,I'm Devesh Srivastava</h5>
                              <p className="text-dark mb-25">
                                  Full stack developer with overall 13 years of experience in designing and development front end, back end application using React JS, Redux, Angular, Node.js, Jest with Enzyme, GraphQL, RESTfull API, Docker, MongoDB, .Net and CI/CD with Azure cloud. Performed technical lead role in UK for 6 years.
                              </p>
                         
                              {/* <!--about info--> */}
                              <ul className="info mb-5 list-inline">
                                  <li className="text-dark">
                                      <span className="font-w-600">Name :</span> Devesh Srivastava
                                  </li>
                                  <li className="text-dark">
                                      <span className="font-w-600">Phone :</span> +91 9999305585
                                  </li>
                      
                                  <li className="text-dark">
                                      <span className="font-w-600">Email :</span>
                                      <a href="mailto:devesh.kr.sri@gmail.com" className="text-dark">devesh.kr.sri@gmail.com</a>
                                  </li>
                                  <li className="text-dark">
                                      <span className="font-w-600">Nationality :</span> Indian
                                  </li>
                                  <li className="text-dark">
                                      <span className="font-w-600">Address :</span> Gurgaon, India
                                  </li>
                             
                                  <li className="text-dark">
                                      <span className="font-w-600">Work Status :</span> FULL STACK DEVELOPER
                                  </li>
             
                              </ul>
  
                              <a href="./images/Devesh-Resume.pdf" className="btn-custom" download="resume-devesh">
                                  <span><i className="fas fa-cloud-download-alt"></i></span>
                                  <span>Download My CV</span>
                              </a>
                          </div>
                      </div>
                  </div>
  
                  {/* <!--Features--> */}
                  <div className="row features mb-20">
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10"><i className="fas fa-user text-dark"></i></div>
                              <p className="text-dark mb-0">20 Projects Completed</p>
                          </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-coffee text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">1000 Cup of coffee</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-smile text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">10+ Satisfied Clients</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-certificate text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">13 Years job experience</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-medal text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">+5 awards won</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-code text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">5000+ lines of code</p>
                          </div>
                      </div>
                  </div>
                  {/* <!-- Timeline--> */}
                  <div className="row ">
                      <div className="col-lg-6">
                          {/* <!--Timeline-->  */}
                          <h5 className="text-dark mb-30">My Expericence</h5>
                          <div className="timeline">
                       
                              {/* <!--item 1--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Team Lead
                                          <span className="text-muted"> - </span> ACCENTURE PRIVATE LIMITED </h6>
                                      <small className="text-muted">2009 - present</small>
                                      <p className="text-dark pt-15 mb-0">Working as Solution Architect on FullStack Development with AI & Machine Learning. With Full Stack developer experience, building Architecture and scaling using micro-service.</p>
                                  </div>
                              </div>
                              {/* <!--item 2--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Senior Software Developer
                                          <span className="text-muted"> - </span> PATNI COMPUTER SYSTEM</h6>
                                      <small className="text-muted">2008 - 2009</small>
                                      <p className="text-dark pt-15 mb-0">Working as Full Stack developer experience with AI, Machine Learning, NodeJs, Python Angular,React Aws Cloud, Docker...</p>
                                  </div>
                              </div>
                              {/* <!--item 3--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Software Developer
                                          <span className="text-muted"> - </span> FCF Software Solution LTD</h6>
                                      <small className="text-muted">2006 - 2017</small>
                                      <p className="text-dark pt-15 mb-0">Working as Full Stack developer experience with AI, Machine Learning, NodeJs, Python Angular,React Aws Cloud, Docker....</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <h5 className="text-dark mb-30">My Education</h5>
                          <div className="timeline"> 
                              {/* <!--item 1--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Master of Computer Application
                                          <span className="text-muted"> - </span> Ignou University</h6>
                                      <small className="text-muted">2002 - 2005</small>
                                      <p className="text-dark pt-15 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae
                                          sint dolor illo officia dignissimos.
                                      </p>
                                  </div>
                              </div>
                              {/* <!--item 2--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Bachlor Degree
                                          <span className="text-muted"> - </span> Chennai University</h6>
                                      <small className="text-muted ">1999 - 2002</small>
                                      <p className="text-dark pt-15 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae
                                      sint dolor illo officia dignissimos.</p>
                                  </div>
                              </div>
              
                              {/* <!--item 3--> */}
                              {/* <!-- <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Bachlor Degree
                                          <span className="text-muted"> - </span> Paris University</h6>
                                      <small className="text-muted">2015 - 2016 </small>
                                      <p className="text-dark pt-15 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae
                                      sint dolor illo officia dignissimos.</p>
                                  </div>
                              </div> --> */}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/*  */}
          {/* <!-- Skill --> */}
          <section className="section contact pb-70" id="skills">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">Skills</h2>
                              <p className="text-muted mb-0">Feel Free To Contact Me Any Time </p>
                          </div>
                      </div>
                  </div>
                 
                  <div className="row" >
                      <div className="col-lg-12">
                          <div className="skills-info">
                              <div className="row" style={{paddingleft: 10}}>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/react.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                              <img src="images/angular.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/node.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/kubernates.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/mongo.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/docker.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids" >
                                          <img src="images/Asp.net.png" />
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/dotnetcode.png"/>
                                      </div>
                                       
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr/>
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="skills-info">
                              <div className="row">
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/html.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/css.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                              <img src="images/aws.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                              <img src="images/kubernates.png"/>
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                              <img src="images/gcp.png" />
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/Typescript.png" />
                                      </div>
                                      <div className="col-md-1 bar-grids">
                                          <img src="images/ansible.png" />
                                      </div>                 
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Services --> */}
          <section id="services" className="section services">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">My Services</h2>
                              <p className="text-muted mb-0">I Have Worked With A Number Of Clients.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-6 col-lg-4">
                          <div className="item">
                              <div className="circle">
                                 <h2>01</h2>
                              </div>
                              <div className="content ">
                                  <h5 className="text-dark mt-15 mb-10">Full Stack Development</h5>
                                  <p className="text-dark mb-0">
                                  Experience in fullstack development with the Frontend and backend technology. Have worked on the .net core, reast api and Graphql. 
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item">
                              <div className="circle">
                                  <h2>03</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Web Development</h5>
                                  <p className="text-dark mb-0"> Experience in both frontend technology and backend technoolgy. 
                                       I am able to work on the React, Angular and MongoDB, Prostgre-Sql and Sql Server</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item">
                              <div className="circle">
                                  <h2>02</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Web Design</h5>
                                  <p className="text-dark mb-0">
                                    Experience on working on the css, html5 and bootstrap </p>
                              </div>
                          </div>
                      </div>
                     
                      <div className="col-sm-6 col-lg-4">
                          <div className="item">
                              <div className="circle">
                                  <h2>04</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Testing</h5>
                                  <p className="text-dark mb-0"> 
                                  Experience in unit and End-To-End testing, using a TDD approach with tools like Jest with Enzyme, Mocha, junit, N-Unit with Seleniun web automation Testing
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item">
                              <div className="circle">
                                  <h2>05</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark mt-15 mb-10">Team Lead</h5>
                                  <p className="text-dark mb-0"> Handling onshore and offshore team and closely working with the client.</p> -	Working with business stakeholders and providing a clear understanding of the delivery objective on the part of the technical team.
                                  
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item">
                              <div className="circle">
                                  <h2>06</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Dev-ops</h5>
                                  <p className="text-dark mb-0"> Experience on deployment of code on the Azure web-app, vm, Aws, Heroku with the help of
                                  Azure-Devops pipeline and Jenkin. Also working Docker and Kubernete.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  
          {/* <!-- Works --> */}
          <section id="works" className="section works">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">My Works</h2>
                              <p className="text-muted mb-0">A latest creative works in  design and web .</p>
                          </div>
                      </div>
                  </div>
                  {/* <!--works-items --> */}
                  <div className="row works-items">
                      <div className="col-lg-4 col-md-6">
                          {/* <!--item --> */}
                          <div className="item">
                              <div className="image">
                                  <img src="./images/1.jpg" alt=""/>
                                  <div className="overly">
                                      <a href="./images/1.jpg" className="view-work"> View Work</a>
                                  </div>
                              </div>
                          
                              <div className="details d-flex align-items-center">
                                  <p className="mb-0">Institute Of Advance Study</p>
                                  <a href="https://iot-institue.herokuapp.com/" className="ml-auto"><i className="fas fa-external-link-alt"></i> </a> 
                              </div>
                          </div>
                      </div>
                      {/* <!-- <div className="col-lg-4 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/2.jpg" alt="">
                                  <div className="overly">
                                      <a href="./images/2.jpg" className="view-work"> View Work</a>
                                  </div>
                              </div>
                  
                              <div className="details d-flex align-items-center">
                                  <p className="mb-0">PSD Template Design</p>
                                  <a href="https://mariame.netlify.app/#" className="ml-auto">
                                      <i className="fas fa-external-link-alt"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/3.jpg" alt="">
                                  <div className="overly">
                                      <a href="./images/3.jpg" className="view-work"> View Work</a>
                                  </div>
                              </div>
                  
                              <div className="details d-flex align-items-center">
                                  <p className="mb-0">Mobile Application</p>
                                  <a href="https://mariame.netlify.app/#" className="ml-auto">
                                      <i className="fas fa-external-link-alt"></i>
                                  </a>
                              </div>
                          </div>
                      </div> --> */}
                      <div className="col-lg-4 col-md-6">
                          {/* <!--item --> */}
                          <div className="item">
                              <div className="image">
                                  <img src="./images/4.jpg" alt=""/>
                                  <div className="overly">
                                      <a href="./images/4.jpg" className="view-work"> View Work</a>
                                  </div>
                              </div>
                  
                              <div className="details d-flex align-items-center">
                                  <p className="mb-0">Shoping WebSite</p>
                                  <a href="https://protected-shelf-97894.herokuapp.com/#" className="ml-auto">
                                      <i className="fas fa-external-link-alt"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                      {/* <!-- <div className="col-lg-4 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/5.jpg" alt="">
                                  <div className="overly">
                                      <a href="./images/5.jpg" className="view-work"> View Work</a>
                                  </div>
                              </div>
                  
                              <div className="details d-flex align-items-center">
                                  <p className="mb-0">PSD Template Design</p>
                                  <a href="https://mariame.netlify.app/#" className="ml-auto">
                                      <i className="fas fa-external-link-alt"></i>
                                  </a>
                              </div>
                          </div>
                      </div> --> */}
                      <div className="col-lg-4 col-md-6">
                          {/* <!--item --> */}
                          <div className="item">
                              <div className="image">
                                  <img src="./images/6.jpg" alt=""/>
                                  <div className="overly">
                                      <a href="./images/6.jpg" className="view-work"> View Work</a>
                                  </div>
                              </div>
                  
                              <div className="details d-flex align-items-center">
                                  <p className="mb-0">Mobile Application</p>
                                  <a href="#" className="ml-auto">
                                      <i className="fas fa-external-link-alt"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  
          {/* <!-- testimonials--> */}
        {/* testimonials*/}
      <section className="section testimonials">
        {/* <div className="container">
          <div className="row mb-50">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="text-dark mb-0">My Clients</h2>
                <p className="text-muted mb-0">What My Clients Say About Me .</p>
              </div>
            </div>
          </div> */}
          {/*testimonials-items*/}
          {/* <div className="row">
            <div className="col-12">
              <div className="owl-carousel owl-loaded owl-drag">
                 <div className="owl-stage-outer">
                  <div className="owl-stage" style={{transform: 'translate3d(-1140px, 0px, 0px)', transition: 'all 0s ease 0s', width: '4000px', paddingLeft: '5px', paddingRight: '5px'}}>
                    <div className="owl-item cloned" style={{width: '530px', marginRight: '40px'}}>
                      <div className="item d-flex align-items-center">
                        <div className="image">
                          <img src="./images/2(1).jpg" alt="" />
                        </div>
                        <div className="content">
                          <span className="icon_quotations_alt2 mb-0 icon" />
                          <p className="text-muted mb-30 mt-30">In a professional context it often happens that private or corporate clients corder a publication to be made.In a
                            professional context it often happens that private or corporate clients corder a publication to be made.</p>
                          <p className="author text-dark mb-0 ">
                            <span className="font-w-700">Amar Smith</span>
                            <span className="dot" /> Product Manager</p>
                        </div>
                      </div></div><div className="owl-item cloned" style={{width: '530px', marginRight: '40px'}}><div className="item d-flex align-items-center">
                        <div className="image">
                          <img src="./images/3(1).jpg" alt="" />
                        </div>
                        <div className="content">
                          <span className="icon_quotations_alt2 mb-0 icon" />
                          <p className="text-muted mb-30 mt-30">In a professional context it often happens that private or corporate clients corder a publication to be made.In a
                            professional context it often happens that private or corporate clients corder a publication to be made.</p>
                          <p className="author text-dark mb-0 ">
                            <span className="font-w-700">Amar Smith</span>
                            <span className="dot" /> Product Manager
                          </p>
                        </div>
                      </div></div><div className="owl-item active" style={{width: '530px', marginRight: '40px'}}><div className="item d-flex align-items-center">
                        <div className="image">
                          <img src="./images/1(1).jpg" alt="" />
                        </div>
                        <div className="content">
                          <span className="icon_quotations_alt2 mb-0 icon" />
                          <p className="text-muted mb-30 mt-30">In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional
                            context it often happens that private or corporate clients corder a publication to be made.</p>
                          <p className="author text-dark mb-0 "> 
                            <span className="font-w-700">Amar Smith</span>  
                            <span className="dot" /> Product Manager</p>
                        </div>
                      </div></div><div className="owl-item active" style={{width: '530px', marginRight: '40px'}}><div className="item d-flex align-items-center">
                        <div className="image">
                          <img src="./images/2(1).jpg" alt="" />
                        </div>
                        <div className="content">
                          <span className="icon_quotations_alt2 mb-0 icon" />
                          <p className="text-muted mb-30 mt-30">In a professional context it often happens that private or corporate clients corder a publication to be made.In a
                            professional context it often happens that private or corporate clients corder a publication to be made.</p>
                          <p className="author text-dark mb-0 ">
                            <span className="font-w-700">Amar Smith</span>
                            <span className="dot" /> Product Manager</p>
                        </div>
                      </div></div><div className="owl-item" style={{width: '530px', marginRight: '40px'}}><div className="item d-flex align-items-center">
                        <div className="image">
                          <img src="./images/3(1).jpg" alt="" />
                        </div>
                        <div className="content">
                          <span className="icon_quotations_alt2 mb-0 icon" />
                          <p className="text-muted mb-30 mt-30">In a professional context it often happens that private or corporate clients corder a publication to be made.In a
                            professional context it often happens that private or corporate clients corder a publication to be made.</p>
                          <p className="author text-dark mb-0 ">
                            <span className="font-w-700">Amar Smith</span>
                            <span className="dot" /> Product Manager
                          </p>
                        </div>
                      </div></div><div className="owl-item cloned" style={{width: '530px', marginRight: '40px'}}><div className="item d-flex align-items-center">
                        <div className="image">
                          <img src="./images/1(1).jpg" alt="" />
                        </div>
                        <div className="content">
                          <span className="icon_quotations_alt2 mb-0 icon" />
                          <p className="text-muted mb-30 mt-30">In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional
                            context it often happens that private or corporate clients corder a publication to be made.</p>
                          <p className="author text-dark mb-0 "> 
                            <span className="font-w-700">Amar Smith</span>  
                            <span className="dot" /> Product Manager</p>
                        </div>
                      </div></div><div className="owl-item cloned" style={{width: '530px', marginRight: '40px'}}><div className="item d-flex align-items-center">
                        <div className="image">
                          <img src="./images/2(1).jpg" alt="" />
                        </div>
                        <div className="content">
                          <span className="icon_quotations_alt2 mb-0 icon" />
                          <p className="text-muted mb-30 mt-30">In a professional context it often happens that private or corporate clients corder a publication to be made.In a
                            professional context it often happens that private or corporate clients corder a publication to be made.</p>
                          <p className="author text-dark mb-0 ">
                            <span className="font-w-700">Amar Smith</span>
                            <span className="dot" /> Product Manager</p>
                        </div>
                      </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot active"><span /></button><button role="button" className="owl-dot"><span /></button></div></div> 
            </div>
          </div>
        </div> */}
      </section>

      
          {/* <!-- Blog --> */}
          <section className="section blog" id="blog">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">My Blog</h2>
                              <p className="text-muted mb-0">The Last posts About Graphic And Web Design.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/1(2).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">09 March, 2020 <span className="dot"></span>  #Design , #web</small>
                                  <h5 className="title  mb-15 mt-10">
                                      <a href="https://dev.to/deveshprojectwork/8-react-application-deployment-and-hosting-solutions-for-2019-4eb" className="text-dark">8 react application deployment and hosting solutions</a>
                                  </h5>
                                  <p className="text-dark mb-25">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, soluta rerum molestias optio distinctio blanditiis
                                          cupiditate...
                                  </p>
                                  <a href="https://dev.to/deveshprojectwork/8-react-application-deployment-and-hosting-solutions-for-2019-4eb#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/2(2).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">09 March, 2020
                                      <span className="dot"></span> #Design , #web</small>
                                  <h5 className="title mb-15 mt-10">
                                      <a href="https://dev.to/deveshprojectwork/difference-between-angular-and-react-2cgo/#" className="text-dark">Difference Between Angular and React</a>
                                  </h5>
                                  <p className="text-dark mb-25">Angular is a complete structural framework for development of dynamic web pages and web applications. It is a JavaScript framework developed and maintained by Google that is written in ...
                                  </p>
                                  <a href="https://dev.to/deveshprojectwork/difference-between-angular-and-react-2cgo/#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>                  
                          </div>
                      </div>
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/3(2).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">12 June, 2020
                                      <span className="dot"></span> #Design , #web
                                  </small>
                                  <h5 className="title mb-15 mt-10">
                                      <a href="https://www.notion.so/Why-you-should-try-GraphQL-d83c2a4d339c488f970dee0c64ec824a/#" className="text-dark">Why you should try GraphQL!</a>
                                  </h5>
                                  <p className="text-dark mb-25">GraphQL started at Facebook back in 2012, it was developed internally before being released as open-source in 2015. In 2018 the project was moved to the newly created GraphQL...
                                  </p>
                                  <a href="https://www.notion.so/Why-you-should-try-GraphQL-d83c2a4d339c488f970dee0c64ec824a/#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/4(1).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">09 March, 2020
                                      <span className="dot"></span> #Design , #web
                                  </small>
                                  <h5 className="title mb-15 mt-10">
                                      <a href="#" className="text-dark">5 Best Tools will help you to grow your mobile app</a>
                                  </h5>
                                  <p className="text-dark mb-25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, soluta rerum molestias optio distinctio
                                                      blanditiis cupiditate...
                                  </p>
                                  <a href="#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>     
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  
          {/* <!-- Contact --> */}
          <section className="section contact pb-70" id="contact">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">Contact Me</h2>
                              <p className="text-muted mb-0">Feel Free To Contact Me Any Time </p>
                          </div>
                      </div>
                  </div>
                 
                  <div className="row">
  
                      <div className="col-lg-6">
                          <form action="https://mariame.netlify.app/assets/php/mail.php" method="post" id="main_contact_form" className="form contact_form ">
                              <div className="alert alert-success contact_msg " style={{display: 'none'}} role="alert">
                                  Your message was sent successfully.
                              </div>       
                              <div className="form-group">
                                  <input type="text" name="name" id="name" className="form-control" placeholder="Name" required="required"/>
                              </div>
                                  
                              <div className="form-group">
                                  <input type="email" name="email" id="email" className="form-control" placeholder="Email" required="required"/>
                              </div>
                                            
                              <div className="form-group">
                                  <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" required="required"/>
                              </div>
                                             
                              <div className="form-group">
                                  <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Message" required="required"></textarea>
                              </div>
                                      
                              <button type="submit" name="submit" className="btn-custom">
                                  <span><i className="fas fa-paper-plane"></i></span>
                                  <span> Send Message</span>
                              </button>
  
                          </form>
                      </div>
                     
                      {/* <!--Contact -info --> */}
                      <div className="col-lg-6">
                          <h5 className="text-dark">Let's talk about everything!</h5>
                          <p className="text-dark mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem
                              ipsum dolor sit amet, consectetuer adipiscing elit.
                               Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                          <div className="contact-info">
                              <div className="item mb-20">
                                  <p className="text-dark font-w-700 mb-0">Phone: </p>
                                  <p className="text-dark mb-0"><i className="fas fa-phone base-color"></i>+91-9999305585</p>
                              </div>
                              <div className="item mb-20">
                                  <p className="text-dark font-w-700 mb-0">Email: </p>
                                  <p className="text-dark mb-0"><i className="fas fa-envelope base-color"> </i> devesh.kr.sri@gmail.com</p>                                 
                              </div>
                              <div className="item mb-20">
                                  <p className="text-dark font-w-700 mb-0">Adress: </p>
                                  <p className="text-dark mb-0"><i className="fas fa-map-marker-alt base-color"> </i>Gurgaon, India</p>
                              </div>
                              <div className="item">
                                  <p className="text-dark font-w-700 mb-0">linkedin: </p>
                                  <p className="text-dark mb-0"> <i className="fab fab fa-skype base-color"> </i>linkedin.com/in/devesh-srivastava-94268516</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011.349454829149!2d77.01360057467625!3d28.519432506820067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a0488e56d61%3A0xc3641b05f8c4bfb0!2sBlock%20E%2C%20New%20Palam%20Vihar%20Phase%202%2C%20Sector%20110%2C%20Gurugram%2C%20Haryana%20122017!5e0!3m2!1sen!2sin!4v1598856041395!5m2!1sen!2sin" width="1050" height="350" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                      </div>
                  </div>
              </div>
          </section>
  
          {/* <!--Footer--> */}
          <footer className="pt-30 pb-30 bg-light">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <p className="text-dark text-center mb-0">© 2020 My Resume , Are Right All Resereved.</p>
                      </div>
                  </div>
              </div>
          </footer>
  
          {/* <!--social-media--> */}
          <div className="social-footer">
              <ul className="list-inline">
                  <li><a href="#"><i className="fab fa-facebook-f text-dark"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter text-dark"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram text-dark"></i></a></li>
                  <li><a href="https://github.com/deveshprojectwork/#" className="text-dark"><i className="fab fa-github"></i></a></li>
                  {/* <!-- <li><a href="#"><i className="fab fa-behance text-dark"></i></a></li> --> */}
  
              </ul>
          </div>
      </div>
      {/* <!--Main End--> */}
   
       {/* <!--loading --> */} 
       <div className="loading" style={{display: 'none'}}>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;
