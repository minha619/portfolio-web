import React from "react";

function Resume() {

    return (
      <section className="my-5" >
        <h2 id="about">Resume</h2>
        <div className="my-2">
        <img src={require(`../../assets/img/MinhaKim_resume.jpg`)} alt="Resume PDF" className="resume"/>
        </div>
        <div className="my-2"> <a href={require(`../../assets/img/MinhaKim_resume.pdf`)} download> download resume </a> </div>
      </section>
    )
  }
export default Resume;

