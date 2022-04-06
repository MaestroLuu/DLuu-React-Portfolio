import React from "react";
import ProfilePic from "./profilePic.jpg";

const styles = {
  photo: {
    width: "auto",
    height: "420px",
    padding: "1px",
    marginRight: "10px",
  },
  bgColor: {
    backgroundImage: "linear-gradient(rgba(0,0,0,.5) ,rgba(0,0,0,.5))",
    boxShadow: "0px 0px 30px lightblue"
  }
};

export default function About() {
  return (
    <div className="container-fluid d-flex justify-content-center .ms-1 .me-1 row">
      <img
        src={ProfilePic}
        className=" card border-light mb-3 bg-transparent col-sm-8 mt-2 rounded img-thumbnail shadow mt-2" 
        style={styles.photo}
        alt="Profile"
      />

      <div className="card border-light mb-3 bg-transparent col-sm-8 mt-2 rounded" style={styles.bgColor}>
        <div className="card-header border-light">
          <h3 className="text-center">About Me</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Full Stack Web Developer with a background in Education and
            expansive experience in dynamic group management, collaborative
            curriculum development, and flexibility regarding problem-solving.
            Passionate about resolving problems and driven to deliver code
            efficiency and clarity during application development for a
            responsive web design. 
          </p>
          <p className="card-text">
            Known among colleagues for strong willingness
            to provide support and attention to detail to all complexities of a
            project. Excited to apply my skills as part of a fast-paced,
            quality-driven team to develop dynamic experiences for users on the
            web.
          </p>
          <hr />
          <h2 className="text-center">Technical Skills</h2>
          <p className="card-text text-center"> HTML : CSS : JavaScript : React : NodeJs : Express : Mongoose <br/> Sequelize : 
          MySQL : NoSQL : MongoDB : Insomnia : Postman : Apollo Sandbox : Jest</p> 
        </div>
      </div>
    </div>
  );
}
