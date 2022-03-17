import React from "react";
import UpdatedResume from "./resume.pdf";
import ResumeImg from "./resumeImg.png";

const styles = {
  img: {
    width: "700px",
  },
};

export default function Resume() {
  return (
    <div className="d-flex justify-content-center">
      <div className="my-3">
        <a href={UpdatedResume} download>
          <img src={ResumeImg} style={styles.img} alt="Resume" />
        </a>
      </div>
    </div>
  );
}
