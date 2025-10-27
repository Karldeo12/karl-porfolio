import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
          
              <a href="https://www.facebook.com/karldeolemera.abela" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon2} alt="Facebook" />
                              </a>
                
                             <a href="https://www.instagram.com/karl_deo/" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon3} alt="Instagram" />
                              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
