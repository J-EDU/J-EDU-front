import { useState } from "react";

import emailjs from "emailjs-com";

import Swal from "sweetalert2";
// import "./contact.css"
import Address from './Address'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import data from './data.json'


const render = (status) => {
  return <h1>{status}</h1>;
};

const initialState = {
  name: "",

  email: "",

  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  //   const colorMode = useColorMode();

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);

    emailjs

      .sendForm(
        "service_i9hh4sf",
        "template_ksw1ett",
        e.target,
        "wdxxKSJkAz_LEFXdQ"
      )

      .then(
        (result) => {
          Swal.fire(
            "Thanks for contacting us ",

            "Email Sent Successfully ",

            "success"
          );

          clearState();
        },

        (error) => {
          Swal.fire({
            icon: "error",

            title: "Oops...",

            text: "Something went wrong!",

            footer: "Email was not Sent ",
          });
        }
      );
  };

  return (
    <>
          
      <div className="background">
      

                <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
                
                <Address width="1000" />
                </Wrapper>
        <div className="container" width="50%">
          <h1 className="h1"> Contact us </h1>
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"> </i>
                <div className="topic">Address</div>
                <div className="text-one"> {data.Contact ? data.Contact.address: 'loading'}</div>
                
              </div>
              <div className="Phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">{data.Contact ? data.Contact.phone : 'loading'}</div>
                
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">{data.Contact ? data.Contact.email : 'loading'}</div>
              </div>
            </div>
            
            <div className="right-side">
              <p> Get in tuoch and till us your thoughts...</p>
              <form onSubmit={handleSubmit} action="#">
                <div className="input-box">
                  <input type="text" placeholder="Enter Your Name" name="name" onChange={handleChange}></input>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter Your Email" name="email" onChange={handleChange}></input>
                </div>
                <div className="input-box message-box">
                  <textarea placeholder="How can we helpe you..." name="message" onChange={handleChange}></textarea>
                </div>
                <div className="input-box">
                  <button type="submit" className="button">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

     
    </>

         
  );
};

