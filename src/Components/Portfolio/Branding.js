import React from "react";
import project4 from "../HomePage/HomeImages/project4.jpg";
import img from "../Portfolio/PortfolioImages/img.png";
import project6 from "../HomePage/HomeImages/project6.jpg";

const Branding = () => {
    return <div className={"container view-img-container"}>
        <div className={"drops-img-wrapper Ui-images"}>
            {
                [
                    {
                        image: <img src={project4} className={"drops-img"} alt={".."}/>,
                        header: "CBD drops",
                        text: "Branding",
                    },

                    {
                        image: <img src={img} className={"gym-img"} alt={".."}/>,
                        header: "Hero fighting academy",
                        text: "Branding",
                    },

                    {
                        image: <img src={project6} className={"drops-img"} alt={".."}/>,
                        header: "Book cover design",
                        text: "Branding",
                    },
                ].map((value, index) => {
                    return <div key={index} className={"ui-text"}>
                        {value.image}
                        <h5 className={"view-header"}>{value.header}</h5>
                        <p className={"view-text"}>{value.text}</p>
                    </div>
                })
            }
        </div>
    </div>
}
export default Branding