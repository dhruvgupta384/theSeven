import React from "react";
import HomeNavbar from "../Components/HomePage/HomeNavbar";
import WebDesign from "../Components/Services/WebDesign";
import Photography from "../Components/Services/Photography";
import Consulting from "../Components/Services/Consulting";
import Features from "../Components/Services/Features";
import Company from "../Components/HomePage/Company";
import Footer from "../Components/HomePage/Footer";

const ServicesPage = () => {
    return <div>
        <div className={"background"}>
            <div>
                <HomeNavbar/>
            </div>
            <div className={"container"}>
                <div className={"about-box-container"}>
                    <div className={"services-box"}>
                        <h3 className={"company-box-text"}>Services</h3>
                    </div>
                    <div className={"about-header"}>
                        <h1>
                            We provide a full range of modern <br/>
                            marketing & creative services
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <WebDesign/>
        <Photography/>
        <Consulting/>
        <Features/>
        <Company/>
        <Footer/>
    </div>
}
export default ServicesPage