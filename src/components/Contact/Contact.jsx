import React from "react";
import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import email from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import arrow from "../../assets/white-arrow.png";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a3619965-da04-462a-a8ed-8e4d992b075d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const onChange =() =>{

  }
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg} alt="" />
        </h3>
        <p>
          Feel free to get in touch with us.We appreciate your intrest in our
          Organization.
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            0312tarun@gmail.com
          </li>
          <li>
            <img src={phone} alt="" />
            +91-9169170796
          </li>
          <li>
            <img src={location} alt="" />
            Kanpur,Uttar Pradesh
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <ReCAPTCHA sitekey="6LdxduIpAAAAAJvkOuHVn00GgwvWVTikuBp8_jVi" onChange={onChange} />
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
