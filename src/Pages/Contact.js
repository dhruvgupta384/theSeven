import React from "react";
import HomeNavbar from "../Components/HomePage/HomeNavbar";
import Location from "../Components/Contact/Location";
import ContactForm from "../Components/Contact/ContactForm";
import ContactSocial from "../Components/Contact/ContactSocial";
import Footer from "../Components/HomePage/Footer";
const Contact=()=>{
    return<div>
        <div className={"background"}>
            <div>
                <HomeNavbar/>
            </div>
            <div className={"container"}>
                <div className={"about-box-container"}>
                    <div className={"about-box"}>
                        <h3 className={"company-box-text"}>CONTACT</h3>
                    </div>
                    <div className={"about-header"}>
                        <h1>
                            Starting a new project or want to collaborate<br/>
                            with us ? Let's talk!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <Location/>
        <ContactForm/>
        <ContactSocial/>
        <Footer/>
    </div>
}
export default Contact