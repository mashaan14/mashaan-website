import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong>GitHub Activity</strong>
      </h1>
      <GitHubCalendar
        username="mashaan14"
        blockSize={15}
        blockMargin={5}
        color="#4B668C"
        fontSize={12}
      />
    </Row>
  );
}

export default Github;
