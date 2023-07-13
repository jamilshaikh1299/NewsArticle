import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col-1">
        <h3>USEFUL LINK</h3>
        <a href="#">Top News</a>
        <a href="#">New News</a>
        <a href="#">Local News</a>
        <a href="#">International News</a>
      </div>
      <div className="col-2">
        <h3>NEWSLETTER</h3>
        <form>
          <input type="text" placeholder="Your Email Address"></input>
          <br></br>
          <button type="submit">SUBSCRIBE NOW</button>
        </form>
      </div>
      <div className="col-3">
        <h3>CONTACT</h3>
        <p>123, New Link Road, Anand nagar </p>{" "}
        <p>Jogeshwari west, Mumbai- 400102</p>
      </div>
    </div>
  );
};

export default Footer;
