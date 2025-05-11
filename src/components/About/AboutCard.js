import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tushar Verma </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I am currently employed as a software developer at Kurmato.
            <br />
            I am pursuing MCA (Masters in Computer application )at SRM Institute of Science and Technology .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels and technical Stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Gerneral Awareness
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tushar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
