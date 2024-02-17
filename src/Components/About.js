
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={2} className="d-flex justify-content-center">
            
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Developer.</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              A passionate Full Stack Developer, Competitive Programmer, ML
              enthusiast..
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
            With a hunger for challenge and a dedication to continuous improvement, 
            I aim to make meaningful contributions to an organization's success while advancing my own professional journey.
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Mumbai, India</span>
                  </li>
                </ul>
              </Col>
              <Col lg={9}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span> B.Tech - Artificial Intelligence and Data Science @ TCET (2020-2024)</span>
                  </li>

                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
