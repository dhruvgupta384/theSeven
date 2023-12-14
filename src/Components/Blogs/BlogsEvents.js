import React from "react";
import img from "./BlogsImages/img.png";
import img_1 from "./BlogsImages/img_1.png";
import img_2 from "./BlogsImages/img_2.png";

const BlogsEvents=()=>{
    return<div className={"container"}>
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
export default BlogsEvents