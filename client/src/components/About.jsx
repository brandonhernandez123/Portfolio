import React from 'react'
import Brandon from './images/brandon.png'
import { Container, Col, Row, Image} from 'react-bootstrap'




const About = () => {
    return(
        <Container className='about' fluid>
            <h1>About Me</h1>
            <br />
  <Row>
    <Col sm={8}><h3>Hello, My name is Brandon. I am a full stack software engineer of Hispanic descent with a strong background in customer service and leading small groups.I am very passionate about software engineering because I constantly get to solve complex problems and get to input my ideas into group projects and work together with a lot of amazing people and collaborate to create something unique. My goal is to turn complex and exciting ideas into reality and to motivate others by showing that no matter what your background is you can achieve anything with the right mentality.</h3></Col>
    <Col sm={4}>
    <Image src={`${Brandon}`} alt='Brandon Hernandez' fluid />
    </Col>
  </Row>
</Container>
    )
}




export default About