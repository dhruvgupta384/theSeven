import React from "react";
import img from "./AboutImages/img.png";
import img_1 from "./AboutImages/img_1.png";
import img_2 from "./AboutImages/img_2.png";
import img_3 from "./AboutImages/img_3.png";
import img_4 from "./AboutImages/img_4.png";
import img_5 from "./AboutImages/img_5.png";
import img_6 from "./AboutImages/img_6.png";
import img_7 from "./AboutImages/img_7.png";
import img_8 from "./AboutImages/img_8.png";

const Specialist = () => {
    return <div className={"container"}>
        <div className={"specialists-container"}>
            <h3>Our specialists </h3>
            <i className={"fa fa-chevron-left"}/>
            <i className={"fa fa-chevron-right"}/>
        </div>
        <div className={"special-image-wrapper"}>
            {
                [
                    {
                        image: img,
                        name: "John Swift",
                        post: "CEO"
                    },
                    {
                        image: img_1,
                        name: "Janet Green",
                        post: "Account Manager"
                    },
                    {
                        image: img_2,
                        name: "John Anderson",
                        post: "Creative Director"
                    },
                    {
                        image: img_3,
                        name: "Sofia Remmington",
                        post: "Accountant"
                    },
                    {
                        image: img_4,
                        name: "Tiffany White",
                        post: "MarketingPortfolio Manager"
                    },
                    {
                        image: img_5,
                        name: "William Lee",
                        post: "Financial Director "
                    },
                    {
                        image: img_6,
                        name: "Alexa Brown",
                        post: "Executive Director"
                    },
                    {
                        image: img_7,
                        name: "Helen Miller",
                        post: "Project Manager"
                    },
                    {
                        image: img_8,
                        name: "Richard Redwood",
                        post: "Executive Director"
                    },
                ].map((value, index) => {
                    return <div key={index}>
                        <img className={"specialists-img"} src={value.image} alt={".."}/>
                        <div>
                            <h5 className={"name"}>{value.name}</h5>
                            <p className={"post"}>{value.post}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}
export default Specialist