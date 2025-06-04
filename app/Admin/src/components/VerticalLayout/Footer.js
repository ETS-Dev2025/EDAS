import React from "react"
import { Container, Row, Col } from "reactstrap"
import footerImg from '../../assets/images/footerImg.png'
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={4}>{new Date().getFullYear()} © ETS.</Col>
            <Col md={4}>{              <img  src={footerImg} alt="" height="30" />
          }</Col>
            <Col md={4}>

              <div className="text-sm-end d-none d-sm-block" style={{display:'flex', flexDirection:'row'}}>

                Design & Develop by Innovation Department
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
