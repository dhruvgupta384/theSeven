import React from "react";
import img_1 from "../Services/ServiceImg/img_1.png";
import slider1 from "../HomePage/HomeImages/slider1.jpg";

const Photography = () => {
    return <div className={"container "}>
        <div className={"photography-container relative-position"}>
            <div style={{marginTop: 130}}>
                <h2>Marketing & SEO </h2>
                <p className={"service-text"}>Quisque quis ex euismod mauris eget scelerisque sapien? Curabitur et<br/>
                    mattis ante – fringilla id tellus nec, dignissim luctus tortor purus amet <br/>
                    tinciduna euismod mauris eget scelerisque. .</p>

                {
                    [
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Content management",
                        },
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Photography & illustrations",
                        },
                        {
                            icon: <i className="fa-solid fa-check"/>,
                            header: "Copywriting for social media",
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
            <div>
                <div style={{marginTop: "100px"}}>
                    <img src={img_1} className={"plan-img"} alt={"creative"}/>
                    <img src={slider1} className={"marketing-img"} alt={".."}/>
                </div>
            </div>
        </div>
        <div className={"check-text"}>
            <p>More about web design
                <i className="bi bi-arrow-right"/></p>
        </div>
    </div>
}
export default Photography