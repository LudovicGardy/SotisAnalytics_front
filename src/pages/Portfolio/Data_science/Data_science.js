import React, { useState, useEffect, useRef } from "react";
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Footer from "../../../components/Footer/Footer";
import Partners from "../../Home/Scrolling_banner_section";
import "../../../App.css";
import "../Portfolio.css";

import Modal_component from "../../../components/Modal_component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

// https://fontawesome.com/v6/icons?q=Table&o=r&s=solid

function Data_Science() {

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
    <>
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

        <div className="services-content services-content-first">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">French Real Estate Price Web App</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Date" className="services-icon subtitle-icons"/> 2023</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or request" className="services-icon"/> 
              How can we create an intuitive tool to analyze and visualize real estate prices across France, leveraging online reliable data?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Employed Python with Streamlit for web app interface, Spark for data processing, Firebase for online noSQL database management, Heroku for web hosting.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Integrated official French government datasets to provide up-to-date, accurate insights into real estate trends.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Developed as a personal project. <a target="_blank" href="https://www.sotisanalytics.immo" className="advertise_link">Click here to try it <FontAwesomeIcon icon={faRocket} title="Date" className="services-icon subtitle-icons"/></a></li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              The application is user-friendly, offering easy navigation and tailored insights to a wide range of users from potential homebuyers to real estate professionals.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/sotisimmobilier.jpg")}>
            <img src="/images/LG_services/data_science/sotisimmobilier.jpg"></img>
          </div>
        </div>


        <div className="services-content  reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/specialized_ai_chatbot.jpg")}>
            <img src="/images/LG_services/data_science/specialized_ai_chatbot.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Specialized A.I. Chatbots</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2023</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              How can we develop specialized GPT AI chatbots that cater to diverse business requirements, and can adapt their personalities as per the needs?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized Python, Transformers, OpenAI API.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Leveraged data from various sources such as French Labor Code, Digestive Oncology Thesaurus, sports books, and customer information for model training.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Developed as a personal project.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              Tackled a straightforward problem where a unique model was trained for each bot. While these models are experts, they can be tailored to mimic anyone.</li>
            </ul>
          </div>
        </div>

        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Brain Signature of Epilepsy for Surgery</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2018-2023</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Can AI surpass other algorithms and human judgement in detecting subtle epileptic focus biomarkers in the brains of drug-resistant patients?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized Python, R, TensorFlow, SQL and NoSQL databases.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Performed data collection, data engineering, EEG, deep learning, and multivariate statistics.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS, and Purpan Hospital of Toulouse.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              Part of a 5-year project. This innovation has been <a target="_blank" href="https://data.inpi.fr/brevets/FR3128111">patented</a>. A scientific paper is on its way to publication. The technology is being used by <a target="_blank" href="https://avriomedtech.com">Avrio MedTech®</a>.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/EEG_example_short.jpg")}>
            <img src="/images/LG_services/data_science/EEG_example_short.jpg"></img>
          </div>
        </div>

        <div className="services-content reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/Electrodes.jpg")}>
            <img src="/images/LG_services/data_science/Electrodes.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Validation of Intracerebral Electrodes</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2018-2021</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              How effective are the new-generation hybrid macro/micro-electrodes, implanted in the brains of drug-resistant epileptic patients, at recording epilepsy biomarkers?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized Python, R, SQL and NoSQL databases.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Engaged in medical data collection and engineering, deep learning, multivariate statistics.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS, and Purpan Hospital of Toulouse. Worked with DIXI Medical®.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              Part of a 3-year project. A <a target="_blank" href="https://github.com/LudovicGardy/Halyzia_steps_performance">public repository</a> is available on github, pending the release of the scientific paper.</li>
            </ul>
          </div>
        </div>


        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Virtual Reality Impact on Memories</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2022</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Do individuals immersed in virtual reality environments retain memory to the same degree or better than those in augmented reality or real-world settings?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized R and concise data tables.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Leveraged mixed-effect models and binomial probabilities.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Collaborated with Civil Aviation lab fellows.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A quick project lasting less than a week.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/virtual_reality.jpg")}>
            <img src="/images/LG_services/data_science/virtual_reality.jpg"></img>
          </div>
        </div>


        <div className="services-content  reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/Status_epilepticus.jpg")}>
            <img src="/images/LG_services/data_science/Status_epilepticus.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Status Epilepticus Predictors</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2021</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Which factors contribute to understanding and predicting the long-term outcomes, including mortality, in chronic epileptic patients?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized Python, R, and SQL databases.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Conducted feature selection and applied mixed effects models.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS, and Purpan Hospital of Toulouse.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A 2-week mission. A <a target="_blank" href="https://github.com/LudovicGardy/Status_epilepticus/blob/main/Epicea_analyses.ipynb">public repository</a> is available on github, and a <a target="_blank" href="https://www.frontiersin.org/articles/10.3389/fneur.2023.1101370/full">scientific paper</a> has been published.</li>
            </ul>
          </div>
        </div>


        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Multifactorial Prediction of Cognitive Decline</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2020</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Can we discern the influence of different antibody categories on cognitive decline in patients from a vast array of potential predictors?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized R, raw medical files and tables.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Deployed machine learning for feature selection and patient classification, modeling, multivariate statistics, and Principal Component Analysis (PCA).</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for Purpan Hospital of Toulouse.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A week-long project.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/antibodies.jpg")}>
            <img src="/images/LG_services/data_science/antibodies.jpg"></img>
          </div>
        </div>


        <div className="services-content reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/amygdala.jpg")}>
            <img src="/images/LG_services/data_science/amygdala.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Psychiatric Impact of Anatomical Brain Abnormalities</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2019</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              How does the size of emotional brain structures, such as the amygdala, affect psychiatric conditions?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized R, MRI measurements, medical tables.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Applied linear regressions, mixed effect models, and conducted parametric and non-parametric statistical analyses.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Partnered with CNRS fellows.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A quick, less-than-a-week project.</li>
            </ul>
          </div>
        </div>


        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Database Conception</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2018</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              How can we design a database architecture compatible with our software to handle the massive, complex data (time series, metadata) generated by our algorithm?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Python, NoSQL databases.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Executed data collection, EEG, data engineering, and data anonymization.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS, and Civil Aviation lab.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              Part of a 3-year project. This data structure has been registered with the Program Protection Agency.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/JSON_structure.jpg")}>
            <img src="/images/LG_services/data_science/JSON_structure.jpg"></img>
          </div>
        </div>


        <div className="services-content reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/BIDS_structure.jpg")}>
            <img src="/images/LG_services/data_science/BIDS_structure.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Database Adaptation</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2018</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              How can unconventional intracerebral hybrid EEG data be made compatible with data management standards?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Python, proprietary formats (edf, nsX, nrd, ncs, med), SQL and NoSQL databases.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Conducted medical data collection, engineering, anonymization, and database design.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS, and Civil Aviation lab.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              Part of a 3-year project. A tool is available on <a target="_blank" href="https://github.com/LudovicGardy/Halyzia_BIDS_converter">Github</a>.</li>
            </ul>
          </div>
        </div>

        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Alzheimer's Disease and Semantic Memory</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2017</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Can a thorough and early examination of semantic memory disorders serve as an early indicator of Alzheimer's disease?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized Python, R.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Employed data collection, effect size, and meta-analysis.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for France Alzheimer, Alzheimer Society (Canada), CNRS, and the University of Montreal.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A 2-month project. A <a target="_blank" href="https://github.com/LudovicGardy/Meta_analysis_Alzheimer">public repository</a> is available on github, and a <a target="_blank" href="https://link.springer.com/article/10.1007/s11065-020-09453-5">scientific paper</a> has been published.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/Meta_analysis.jpg")}>
            <img src="/images/LG_services/data_science/Meta_analysis.jpg"></img>
          </div>
        </div>


        <div className="services-content reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/MVPA.jpg")}>
            <img src="/images/LG_services/data_science/MVPA.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Neural Correlates of Mental Imagery</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2017</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              How do the brain processes triggered by mental imagery compare to those triggered by visual perception?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized R, Matlab, Python.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Conducted clinical data collection, data anonymization, and utilized Random Forest and SVM for classification, and Multivariate Pattern Analysis (MVPA).</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              This was part of a 1-year project aimed at evaluating the spatio-temporal dynamics of cerebral activity during a behavioral task.</li>
            </ul>
          </div>
        </div>


        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Spatial Orientation in Alzheimer's Disease</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2016</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Can spatial orientation disorders be effectively utilized as predictors for the pre-clinical stages of Alzheimer's disease?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized Python, R.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Involved in medical data collection and engineering, SVM for classification, and linear regressions for predictions.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS, and Civil Aviation lab.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A 4-month project. A <a target="_blank" href="https://drive.google.com/file/d/1qtBZWrCpq0XlEoLel0MKgSyd6EFnZtlI/view?usp=drive_link">study report</a> detailing the methods and findings is available.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/Spatial_alzheimer.jpg")}>
            <img src="/images/LG_services/data_science/Spatial_alzheimer.jpg"></img>
          </div>
        </div>

        <div className="services-content reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/SAB_MVPA.jpg")}>
            <img src="/images/LG_services/data_science/SAB_MVPA.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Evaluation of Memory Processes Using Machine Learning</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2015</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Given a large set of potential predictors, can we identify the effect of different antibody categories on cognitive decline in patients?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized R, Matlab.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Conducted medical data collection and cleaning, utilized SVM for classification, and performed Principal Component Analysis (PCA).</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Executed project deliverables for CNRS.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A 2-month project. A <a target="_blank" href="https://drive.google.com/file/d/1nHEslbHDzTWNifpuu7AK002ll9tCcS8l/view?usp=drive_link">study report</a> detailing the methods and findings is available.</li>
            </ul>
          </div>
        </div>


        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Role of Phosphatidylinositol-3 Kinase (PI3K) in the Migration of Cancer Cells</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2015</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Can the modulation of PI3K in healthy and breast cancer cells influence collective or individual cell migration and the disease's invasive potential?</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/> 
              Utilized R, 2-dimensional images, RT-qPCR tables.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/> 
              Applied linear regressions and parametric statistical analyses.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/> 
              Worked closely with INSERM fellows.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/> 
              A rapid, 2-day mission.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/data_science/RTqPCR.jpg")}>
            <img src="/images/LG_services/data_science/RTqPCR.jpg"></img>
          </div>
        </div>

      {/* <div className="services-ending">
        <h4>And many more.</h4>
      </div> */}

      </div>

      <Modal_component 
          isModalOpen={isModalOpen} 
          closeModal={closeModal} 
          currentImage={currentImage} 
      />

      <Partners/>
      <Footer/>

    </>
  );
}

export default Data_Science;