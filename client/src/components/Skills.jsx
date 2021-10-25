import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import SQL from './images/SQL.png'
import Reactlogo from './images/logo512.png'


const Skills = () => {
    return(
        <Container className='skillssection' fluid>
            <h1>Technologies</h1>
        <Row>
          <Col>
          
          <ul>
              <h1>Languages</h1> 
              <li><Image className='skills' src = 'https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png' fluid /> </li>
              <br/>
              <li><Image className='skills' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' fluid/> </li>
              <br/>
              <li><Image  className='htmlskills' src='http://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png' /></li>
              <br/>
              <li><Image className='htmlskills' src='https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png' /></li>
              <br/>
              <li><Image className='htmlskills' src={`${SQL}`} fluid /> </li>
          </ul>
          </Col>
          <Col>
          
          <ul>
              <h1>Front-End</h1>
              <li><Image className='frontend' src={`${Reactlogo}`} /></li>
              <br/>
              <li> <Image className='htmlskills' src='https://lh3.googleusercontent.com/proxy/p8dT6r-rbvvIS57L-g9lTowL3WhZaByDiLJoj_bVHUyE-D7CKARY1IqTmkYbImjMDkNyznmpTn-idnqQPDFLlG7Ry3B1kiQl' />  </li>
             <br/>
             <li> <Image className='frontend' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png' /> </li>
             <br/>
             <li> <Image className='frontend' src='https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png' />   </li>
             <br/>
             <li> <Image className='htmlskills' src='https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png' /> </li>
          </ul>
          </Col>
          <Col>
          <ul>
              <h1>Back-End</h1>
              <li> <Image className='skills' src='https://cdn.freebiesupply.com/logos/large/2x/flask-logo-png-transparent.png'/> </li>
              <br/>
              <br/>
              <li> <Image className='backend' src='https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic'/> </li>
              <br/>
              <li> <Image className='backend' src='https://snmpcenter.com/wp-content/uploads/2016/10/RESTful-API-logo-for-light-bg.png'/> </li>
              <br/>
              <li> <Image className='backend' src='https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png'/> </li>
          </ul>
          </Col>
          <Col>
          <ul>
              <h1>DataBases</h1>
             <li> <Image className='htmlskills' src='https://www.clipartmax.com/png/full/307-3077761_other-technologies-postgresql-logo-png.png' />  </li> 
             <br/>
             <li> <Image className='backend' src='https://cdn.iconscout.com/icon/free/png-256/sequelize-3-1175091.png'/>  </li>
             <br/>
             <li> <Image className='backend' src='https://hackersandslackers-cdn.storage.googleapis.com/2020/12/sqlalchemy_series_redo.png'/>  </li>
             <br/>
             <li> <Image className='backend' src='https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png'  /></li>
             <br/>
             <li> <Image className='backend' src='https://tsed.io/mongoose.png'  /></li>
              
          </ul>
              
              </Col>
        </Row>
        
      </Container>
    )
}





export default Skills