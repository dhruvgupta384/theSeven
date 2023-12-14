import React from "react";
import img from "./BlogsImages/img.png";
import img_8 from "./BlogsImages/img_8.png";
import project3 from "../HomePage/HomeImages/project3.jpg";
const BlogTricks=()=>{
    return<div className={"container"}>
        <div className={"events-container"}>
            {
                [
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
                ].map((value, index) => {
                    return <div key={index}>
                        <img className={"blogs-images"} src={value.image} alt={".."}/>
                        <h5 className={"blogs-title"}> {value.title}</h5>
                        <p className={"blogs-text"}> {value.text}</p>
                    </div>
                })
            }

        </div>
    </div>
}
export default BlogTricks