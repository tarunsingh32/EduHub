import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Even Wonder the stars of Tommorrow</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
          lorem non orci facilisis pharetra non vel urna. Cras eu quam massa.
          Praesent tincidunt nulla eu quam ultrices aliquet. Suspendisse congue
          augue quis imperdiet sollicitudin. Morbi nec ante neque. Duis
          vulputate tempus ipsum nec consectetur. Maecenas et dolor condimentum,
          commodo felis sit amet, vestibulum diam. Proin eros enim, malesuada eu
          porta at, suscipit vitae dolor.
        </p>
      </div>
    </div>
  );
};

export default About;
