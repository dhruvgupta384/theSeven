import React, {useState} from "react";
import img from "./BlogsImages/img.png";
import img_1 from "./BlogsImages/img_1.png";
import img_2 from "./BlogsImages/img_2.png";
import img_3 from "./BlogsImages/img_3.png";
import img_4 from "./BlogsImages/img_4.png";
import img_5 from "./BlogsImages/img_5.png";
import img_6 from "./BlogsImages/img_6.png";
import img_7 from "./BlogsImages/img_7.png";
import img_8 from "./BlogsImages/img_8.png";
import img_9 from "./BlogsImages/img_9.png";
import img_10 from "./BlogsImages/img_10.png";
import img_11 from "./BlogsImages/img_11.png";
import img_12 from "./BlogsImages/img_12.png";
import img_13 from "./BlogsImages/img_13.png";
import project3 from "../HomePage/HomeImages/project3.jpg";
import Image1 from "../HomePage/HomeImages/Image1.jpeg";
import serv from "../Services/ServiceImg/serv.png";

const AllEvents = () => {
    return <div className={"container"}>
        <div className={"events-container"}>
            {
                [
                    {
                        image: img,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_1,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_2,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_3,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_4,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_5,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_6,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_7,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_8,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: project3,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_9,
                        title: <>Duis volutpat cursus: rhoncus,<br/>
                            purus augue & amet rhoncus</>,
                        text: "Industry - February 2, 2018"
                    },

                    {
                        image: img_10,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_11,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_12,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: Image1,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: serv,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_13,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                ].map((value, index) => {
                    return <div key={index}>
                        <img className={"blogs-images"} src={value.image} alt={".."}/>
                        <h5 className={"blogs-title"}> {value.title}</h5>
                        <p className={"blogs-text"}> {value.text}</p>
                    </div>
                })
            }
        </div>
        <div className={"pagination"}>
            <i className={"bi bi-arrow-left"}/>
            <a>1</a>
            <a style={{paddingLeft: 20}}> 2</a>
            <i className={"bi bi-arrow-right"}/>
        </div>
    </div>
}
export default AllEvents