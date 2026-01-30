import React from "react";
import MyNavbar from "../components/MyNavbar";

const AboutUs = () => {
  return (
    <>
      <MyNavbar />
      <div className="page-container">
        <h2>About Us</h2>
        <p>
          Our Hospital Appointment System helps patients book appointments
          digitally, reducing waiting time and improving healthcare access.
        </p>
        <p>
          We aim to connect doctors and patients seamlessly using modern
          technology.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
