import React from "react";
import HomeNavbar from "../Components/HomePage/HomeNavbar";
import Story from "../Components/Aboutus/Story";
import ChooseUS from "../Components/Aboutus/ChooseUS";
import Specialist from "../Components/Aboutus/Specialist";
import CollaborateProject from "../Components/Aboutus/CollaborateProject";
import Footer from "../Components/HomePage/Footer";

const AboutPage = () => {
    return <div>
        <div className={"background"}>
            <div>
                <HomeNavbar/>
            </div>
            <div className={"container"}>
                <div className={"about-box-container"}>
                    <div className={"about-box"}>
                        <h3 className={"company-box-text"}>About us</h3>
                    </div>
                    <div className={"about-header"}>
                        <h1>
                            A team of business consultants, passionate<br/>
                            about new technologies & progress
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <Story/>
        <ChooseUS/>
        <Specialist/>
        <CollaborateProject/>
        <Footer/>
    </div>

}
export default AboutPage