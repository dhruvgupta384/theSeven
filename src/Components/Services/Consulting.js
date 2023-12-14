import React from "react";
import slider4 from "../HomePage/HomeImages/slider4.webp";
import Image1 from "../HomePage/HomeImages/Image1.jpeg";

const Consulting = () => {
    return <div className={"relative-position"}>
        <div className={"container services-container"}>
            <div className={" relative-position"}>
                <div style={{marginTop: "200px"}}>
                    <img className={"creative-img"} src={Image1} alt={"creative"}/>
                    <img className={"service-img"} src={slider4} alt={".."}/>
                </div>
            </div>
            <div style={{marginTop: 130}}>
                <h2>Consulting Services </h2>
                <p className={"service-text"}>Vestibulum semper pharetra. Curabitur cursus sapien sed porta<br/>
                    dapibus. Lorem ipsum – semper malesuada ipsum! Curabitur et mattis<br/>ante.</p>
                {
                    [
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Project management",
                        },
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Hosting solutions",
                        },
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Website conversion rate",
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
        <div className={"service-consult"}>
            <p>More about digital marketing
                <i className="bi bi-arrow-right"/></p>
        </div>

    </div>
}
export default Consulting