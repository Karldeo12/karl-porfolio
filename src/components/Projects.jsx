import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.webp";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.webp";
import projImg12 from "../assets/img/project-img12.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Schedex",
      description: "Exam Schedule",
      imgUrl: projImg1,
    },
    {
      title: "Emergo",
      description: "Emergency Calls with first Aid Features",
      imgUrl: projImg2,
    },
    {
      title: "Obstacle Avoiding Robot Car 2WD with Ultrasonic Sensor",
      description: "Design and implement an obstacle-avoiding robot car",
      imgUrl: projImg3,
    },
    {
      title: "Food Quest",
      description: "Design for Online Search Search Restaurant",
      imgUrl: projImg4,
    },
    {
      title: "Figma Design Challenge",
      description: "",
      imgUrl: projImg5,
    },
    
  ];

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects and My Dreams</h2>
                  <p>Now let me review with you some of my previous projects in some different fields, whether in the field of the front-end or the field of the back-end, in addition to that I will inform you about some of my future dreams.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects - 1</Nav.Link>
                      </Nav.Item>

                       
                      <Nav.Item>
                        <Nav.Link eventKey="third">Dreams</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                                     </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>In the future, I would like to become a professional web and operating system programmer and work in one of the international companies. I also aspire to visit all countries of the world.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
