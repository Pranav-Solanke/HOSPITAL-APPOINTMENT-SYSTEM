import React from "react";
import MyNavbar from "../components/MyNavbar";

const ContactUs = () => {
  return (
    <>
      <MyNavbar />
      <div className="page-container">
        <h2>Contact Us</h2>
        <p>Email: support@hospitalcms.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Maharashtra, India</p>
      </div>
    </>
  );
};

export default ContactUs;
