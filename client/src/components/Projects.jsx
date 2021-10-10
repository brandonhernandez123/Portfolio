import React from "react";
import {Container,Row,Col, Image, Nav} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'


const Projects = () => {
    

    return(
<Container fluid>
<h3>
<Typewriter
  className="typewriter"
  onInit={(typewriter)=> {

  typewriter
  .pauseFor(3000)
  .typeString("My Projects")
  
    
  
  .start();
  
  }}
  />
  </h3>
    <br/>
  <Row >
  
    <Col  className="border border-warning" id="mystery">
    <h3 className="apptitle">Murder Mystery.Js</h3>
    <p className="appdescription">A Murder Mystery Game created using HTML CSS & Javascript. Murder Mystery.js is a point and click mystery game 
        currently hosted on surge
    </p>
    
    
    <Image src='https://i.imgur.com/5tbCqLk.png' fluid />
    <Nav.Link href="https://github.com/brandonhernandez123/Detective-point-and-click-adventure-js"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="yellow" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></Nav.Link>
      <Nav.Link href="https://brandonhdzmurdermysteryjs.surge.sh/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="yellow" class="bi bi-joystick" viewBox="0 0 16 16">
  <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
  <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
</svg></Nav.Link>
  
    </Col>
    
    <Col xs={6} className="border border-success" id="comic">
        <h3 className="project2">The Comic BookShelf</h3>
        <p className="p2">The Comic BookShelf is a comic book tracking app. You can search Comics via the Marvel API, Recommend comics
            and add them to your comic BookShelf. It it currently being refactored but is deployed on Heroku
        </p>
        <p>The Comic Bookshelf was built with React.js MongoDB, Mongoose & Express</p>
        <Image src='https://i.imgur.com/nmb05sy.png' fluid />
        <Col>
        <Nav.Link href="https://github.com/brandonhernandez123/The-Comic-BookShelf"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></Nav.Link>
      <Nav.Link href="https://thecomicbookshelf.herokuapp.com/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-book-fill" viewBox="0 0 16 16">
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg></Nav.Link>
</Col>
    </Col>
  </Row>
</Container>
    )
}


export default Projects