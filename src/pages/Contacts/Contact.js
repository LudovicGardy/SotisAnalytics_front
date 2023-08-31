import React from "react";

import "../../App.css";
import Footer from "../../components/Footer/Footer";
import Contact_Banner from "./Contacts_banner";

import Contact_Field from "./Contacts_field";
import GoogleApiWrapper from "./Google_maps";
import ContactInfo from "./Contacts_info";
// import Contact_Schedule from "./Contact/Contact_Schedule";


function Contact() {
  return (
    <>
        <Contact_Banner/>
        {/* <Contact_Schedule/> */}
        <Contact_Field/>
        {/* <ContactInfo/> */}
        <GoogleApiWrapper/>
        <Footer/>
    </>
  );
}

export default Contact;
