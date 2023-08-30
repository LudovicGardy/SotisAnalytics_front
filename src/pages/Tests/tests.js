import React, { useState, useEffect, useRef } from "react";
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Footer from "../../components/Footer";
import Partners from "../Home/Partners";
import "../../App.css";
import "./tests.css"
import Hexagon from 'react-hexagon'

// import "./Services.css";

import Modal_component from "../../components/Modal_component";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';


function Tests() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
  
    const openModal = (imgSrc) => {
      setCurrentImage(imgSrc);
      setIsModalOpen(true);
    }
  
    const closeModal = () => {
      setIsModalOpen(false);
    }
  
    return (
        

    <div className="services-container">


        <div className="services-banner">
            <img src="/images/LG_banners/data_science/format_L.jpg"></img>
            <h1 className= "banners-title">DATA SCIENCE</h1>
        </div>

        <div className="services-quote-text">
                <figure className="services-figure">
                    <blockquote className="blockquote text-italic">
                      <p>Artificial intelligence is transforming every industry. Over the next few years, A.I. will continue to accelerate, and those who succeed will not just be those with the most data, but those who have the most innovative ideas about what to do with it.</p>
                      <figcaption className="figcaption">
                          <span>Andrew Ng</span>
                      </figcaption>
                    </blockquote>
                </figure>
          </div>

        <div className="services-transition">
          <p>A pioneer in machine learning, Yann LeCun, also said that "the most important part of a machine learning system is not about learning, 
            but the representation". There are many tools available to data scientists to solve problems. I have been involved in dozens of projects, either as an instigator 
            or as a partner. Consistently, the solution layed in our ability to collect data, find the best options to analyze it, and derive insight. 
          </p>
        </div>

        <div className="services-start">
          <h3>Examples of publicly shareable projects I had the opportunity to work on</h3>
        </div>

        <div className="services-content">
            <div className="halfborder-content">
        <div className="services-content-text">
        <h4 className="services-content-left-title">Database Conception</h4>
        <ul className="services-content-ul">
            <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
            How can we design a database architecture compatible with our software to handle the massive, complex data (time series, metadata) generated by our algorithm?</li>
            <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
            Python, NoSQL databases.</li>
            <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
            Executed data collection, EEG, data engineering, and data anonymization.</li>
            <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
            Collaborated with CNRS and the National School of Civil Aviation (ENAC).</li>
            <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info.." className="services-icon"/> 
            Part of a 5-year project. This data structure has been registered with the Program Protection Agency.</li>
        </ul>
        </div>
        <div onClick={() => openModal("/images/LG_services/data_science/JSON_structure.jpg")}>
        <Hexagon
            style={{stroke: '#42873f'}}
            backgroundImage="/images/LG_services/data_science/JSON_structure.jpg"
            className="hexa"
            />    
            
            </div>
        </div>  
        </div>

    </div>

    );
}

export default Tests;