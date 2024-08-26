import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "UniMoney - Manage Your Money",
      cardDetailedText: [
        "A mobile app for personal finance management, tracking daily transactions and monthly budget analysis.",
        "Includes timely bill reminders for better financial planning."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["React Native", "Node.js", "MongoDB"],
      links: [
        {
          url: "https://github.com/kunalagra/UniMoney",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Codegamy - Learn, Compete \& Collaborate",
      cardDetailedText: [
        "Elevate your coding skills and ace interviews with our all-in-one platform, tailored for beginners to job-seekers.",
        "A web application that provides a platform for users to learn, compete and collaborate with others.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Next.js", "Node.js", "MongoDB", "Jitsi"],
      links: [
        {
          url: "https://github.com/kunalagra/codegamy",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "MediCall - AIO Hospital App",
      cardDetailedText: [
        "A comprehensive web application that caters to healthcare domain",
        "A web application that provides a platform for patients to book appointments, view their medical history, and chat with doctors.",
        "Built using MERN stack and deployed on Render.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["MongoDB", "React JS", "Flask", "Jitsi"],
      links: [
        {
          url: "https://github.com/kunalagra/MediCall",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "SumUp - Summarize TEAMs Meetings",
      cardDetailedText: [
        "A web application that summarizes the TEAMs meeting and provides a detailed summary of the meeting.",
        "This project provides comprehensive solution for summarizing and managing meetings by extracting key insights",
        "Also Developed a companion Chrome Extension for Google Meet which provides Live transcript and cloud storage facility",

      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["React JS","Django", "MongoDB", "OpenAI"],
      links: [
        {
          url: "https://github.com/kunalagra/SumUp",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "AllCurrency - Currency Converter",
      cardDetailedText: [
        "A mobile application that provides real-time currency conversion.",
        "This project provides comprehensive solution for currency conversion and exchange rates",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["React Native", "Javascript", "API"],
      links: [
        {
          url: "https://github.com/MDeexith/AllCurrency",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Sleep Monitor Using Laptop Camera",
      cardDetailedText: [
        "A web application that uses the laptop camera to monitor the sleep of the user.",
        "This project provides comprehensive solution for monitoring the sleep of the user",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Flask", "OpenCV","Bootstrap"],
      links: [
        {
          url: "https://devfolio.co/projects/sleep-monitoring-using-laptop-cam-80de",
          text: "View Source Code",
        },
      ],
    },
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  // const addButton = () => (
  //   <Fab color="primary" color="blue" aria-label="add">
  //     <AddIcon />
  //   </Fab>
  // );

  return (
    <section id="projects" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
