import React from "react";
import img from "./PortfolioImages/img.png";
import img_2 from "./PortfolioImages/img_2.png";
import img_7 from "./PortfolioImages/img_7.png";
import img_9 from "./PortfolioImages/img_9.png";
const MarketingPortfolio =()=>{
    return <div className={"container view-img-container"}>
        <div className={"drops-img-wrapper"} style={{display:"flex"}}>
            {
                [
                    {
                        image: <img src={img_2} className={"drops-img"} alt={".."}/>,
                        header: "Draw & play",
                        text: "Marketing"
                    },

                    {
                        image: <img src={img_7} className={"drops-img"} alt={".."}/>,
                        header: "Boxed water",
                        text: "Marketing"
                    },

                    {
                        image: <img src={img_9} className={"gym-img"} alt={".."}/>,
                        header: "Tattoo studio",
                        text: "Marketing, Web design"
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
export default MarketingPortfolio