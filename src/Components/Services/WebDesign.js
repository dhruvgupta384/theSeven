import React from "react";
import img from "./ServiceImg/serv.png";
import slider2 from "../HomePage/HomeImages/slider2.webp";

const WebDesign = () => {
    return <div className={"relative-position"}>
        <div className={"container services-container"}>
            <div className={" relative-position"}>
                <div style={{marginTop: "100px"}}>
                    <img className={"creative-img"} src={img} alt={"creative"}/>
                    <img className={"service-img"} src={slider2} alt={".."}/>
                </div>
            </div>
            <div style={{marginTop:130}}>
                <h2>Web design & Ecommerce </h2>
                <p className={"service-text"}>Suspendisse nec vulputate nulla iaculis eu potenti. Class aptent taciti<br/>
                    sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos <br/>nulla lorem nulla.</p>
                {
                    [
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Web Design",
                        },
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Hosting solutions",
                        },
                        {
                            icon:<i className="fa-solid fa-check"/>,
                            header: "Ecommerce",
                        },
                        {
                            icon:<i className="fa-solid fa-check"/>,
                            header: "SEO",
                        },
                    ].map((value, index) => {
                        return <div key={index} className={"core-values"}>
                            <div className={"service-check-icon"}>
                                {value.icon}
                            </div>
                            <div>
                                <h5 className={"services-header"}>{value.header}</h5>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <p className={"service-link"}>More about digital marketing
            <i className="bi bi-arrow-right"/>
        </p>
    </div>
}
export default WebDesign