import React from "react";
import img from "./PortfolioImages/img.png";
import img_9 from "./PortfolioImages/img_9.png";
const WebDesign=()=>{
    return<div className={"container view-img-container"}>
        <div className={"drops-img-wrapper"}>
            {
                [
                    {
                        image: <img src={img_9} className={"gym-img"} alt={".."}/>,
                        header: "Tattoo studio",
                        text: "Marketing, Web design"
                    },

                ].map((value, index) => {
                    return <div key={index} style={{paddingLeft:20}} >
                        {value.image}
                        <h5 className={"view-header"}>{value.header}</h5>
                        <p className={"view-text"}>{value.text}</p>
                    </div>
                })
            }
        </div>
    </div>
}
export default WebDesign