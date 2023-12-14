import React from "react";
import img from "./PortfolioImages/img.png";
import img_1 from "../Portfolio/PortfolioImages/img_1.png";
import img_2 from "../Portfolio/PortfolioImages/img_2.png";
import img_3 from "../Portfolio/PortfolioImages/img_3.png";
import img_4 from "../Portfolio/PortfolioImages/img_4.png";
import img_5 from "../Portfolio/PortfolioImages/img_5.png";
import img_6 from "../Portfolio/PortfolioImages/img_6.png";
import img_7 from "../Portfolio/PortfolioImages/img_7.png";
import img_8 from "../Portfolio/PortfolioImages/img_8.png";
import img_9 from "../Portfolio/PortfolioImages/img_9.png";
import project3 from "../HomePage/HomeImages/project3.jpg";
import project4 from "../HomePage/HomeImages/project4.jpg";
import project6 from "../HomePage/HomeImages/project6.jpg";

const ViewAll = () => {
    return <div className={"container view-img-container"}>
        <div className={"viewAll-images"}>
            <div>
                {
                    [
                        {
                            image: <img src={img_1} className={"gym-img"} alt={".."}/>,
                            header: "Qwerty VR",
                            text: "UI/UX"
                        },

                        {
                            image: <img src={project4} className={"drops-img"} alt={".."}/>,
                            header: "CBD drops",
                            text: "Branding"
                        },

                        {
                            image: <img src={img_3} className={"gym-img"} alt={".."}/>,
                            header: "Love project",
                            text: "Branding"
                        },

                        {
                            image: <img src={img_4} className={"gym-img"} alt={".."}/>,
                            header: "VR game kit",
                            text: "UI/UX"
                        },
                    ].map((value, index) => {
                        return <div key={index}>
                            <div> {value.image}</div>
                            <div>
                                <h5 className={"view-header"}>{value.header}</h5>
                                <p className={"view-text"}>{value.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className={"middle-images-wrapper"}>
                {
                    [
                        {
                            image: <img src={img_2} className={"drops-img"} alt={".."}/>,
                            header: "Draw & play",
                            text: "Marketing"
                        },

                        {
                            image: <img src={project6} className={"drops-img"} alt={".."}/>,
                            header: "Book cover design",
                            text: "Branding",
                        },

                        {
                            image: <img src={img_5} className={"drops-img"} alt={".."}/>,
                            header: "Zero waste",
                            text: "UI/UX"
                        },

                        {
                            image: <img src={img_6} className={"gym-img "} alt={".."}/>,
                            header: "Seven rock band",
                            text: "Branding"

                        },
                    ].map((value, index) => {
                        return <div key={index}>
                            <div> {value.image}</div>
                            <div>
                                <h5 className={"view-header"}>{value.header}</h5>
                                <p className={"view-text"}>{value.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                {
                    [
                        {
                            image: <img src={project3} className={"gym-img"} alt={".."}/>,
                            header: "Seven cycling",
                            text: "UI/UX"
                        },

                        {
                            image: <img src={img} className={"gym-img"} alt={".."}/>,
                            header: "Hero fighting academy",
                            text: "Branding",
                        },


                        {
                            image: <img src={img_7} className={"drops-img"} alt={".."}/>,
                            header: "Boxed water",
                            text: "Marketing"
                        },

                        {
                            image: <img src={img_8} className={"gym-img"} alt={".."}/>,
                            header: "Lift heavy crossfit club",
                            text: "UI/UX"
                        },

                        {
                            image: <img src={img_9} className={"gym-img"} alt={".."}/>,
                            header: "Tattoo studio",
                            text: "Marketing, Web design"
                        },
                    ].map((value, index) => {
                        return <div key={index}>
                            <div> {value.image}</div>
                            <div>
                                <h5 className={"view-header"}>{value.header}</h5>
                                <p className={"view-text"}>{value.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    </div>
}
export default ViewAll