import React, {useState} from "react";
import HomeNavbar from "../Components/HomePage/HomeNavbar";
import MenuBar from "../Components/Portfolio/MenuBar";
import ViewAll from "../Components/Portfolio/ViewAll";
import Footer from "../Components/HomePage/Footer";
import Branding from "../Components/Portfolio/Branding";
import UiDesign from "../Components/Portfolio/UiDesign";
import MarketingPortfolio from "../Components/Portfolio/MarketingPortfolio";
import WebDesign from "../Components/Portfolio/WebDesign";

const Portfolio = () => {
    const [view,setView]=useState("view_all");
    return <div>
        <div className={"background"}>
            <div>
                <HomeNavbar/>
            </div>
            <div className={"container"}>
                <div className={"about-box-container"}>
                    <div className={"about-box"}>
                        <h3 className={"company-box-text"}>OUR WORKS</h3>
                    </div>
                    <div className={"about-header"}>
                        <h1>
                            Clean, smart & effective designs
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <MenuBar view={view} setView={setView}/>
        {
            view==="view_all" && <ViewAll/>
        }
        {
            view==="branding" && <Branding/>
        }
        {
            view === "ui_ux" && <UiDesign/>
        }
        {
            view === "marketing" && <MarketingPortfolio/>
        }
        {
            view === "web_design" && <WebDesign/>
        }
        <Footer/>
    </div>
}
export default Portfolio