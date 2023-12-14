import React from "react";
import HomeNavbar from "../Components/HomePage/HomeNavbar";
import HeadingContainer from "../Components/HomePage/HeadingContainer";
import Marketing from "../Components/HomePage/Marketing";
import TechHomepage from "../Components/HomePage/TechHomepage";
import ResultsHomepage from "../Components/HomePage/ResultsHomepage";
import Slider from "../Components/HomePage/Slider";
import Projects from "../Components/HomePage/Projects";
import Clients from "../Components/HomePage/Clients";
import Company from "../Components/HomePage/Company";
import Footer from "../Components/HomePage/Footer";
export default function Homepage() {
    return  <div>
        <div className={"background"}>
            <HomeNavbar/>
            <HeadingContainer/>
        </div>
        <Marketing/>
        <TechHomepage/>
        <ResultsHomepage/>
        <Slider/>
        <Projects/>
        <Clients/>
        <Company/>
        <Footer/>
    </div>
}