import React from "react";
import img from "./PortfolioImages/img.png";
import img_1 from "./PortfolioImages/img_1.png";
import project3 from "../HomePage/HomeImages/project3.jpg";
import img_5 from "./PortfolioImages/img_5.png";
import img_8 from "./PortfolioImages/img_8.png";
import img_4 from "./PortfolioImages/img_4.png";
const UiDesign=()=>{
    return <div className={"container view-img-container"}>
        <div className={"drops-img-wrapper Ui-images"} >
            {
                [
                    {
                        image: <img src={img_1} className={"gym-img"} alt={".."}/>,
                        header: "Qwerty VR",
                        text: "UI/UX"
                    },

                    {
                        image: <img src={project3} className={"gym-img"} alt={".."}/>,
                        header: "Seven cycling",
                        text: "UI/UX"
                    },

                    {
                        image: <img src={img_5} className={"drops-img"} alt={".."}/>,
                        header: "Zero waste",
                        text: "UI/UX"
                    },
                    {
                        image: <img src={img_8} className={"gym-img"} alt={".."}/>,
                        header: "Lift heavy crossfit club",
                        text: "UI/UX"
                    },
                    {
                        image: <img src={img_4} className={"gym-img"} alt={".."}/>,
                        header: "VR game kit",
                        text: "UI/UX"
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
export default UiDesign