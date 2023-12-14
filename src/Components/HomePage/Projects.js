import React from "react";
import project1 from "./HomeImages/project1.jpg";
import project2 from "./HomeImages/project2.jpg";
import project3 from "./HomeImages/project3.jpg";
import project4 from "./HomeImages/project4.jpg";
import project5 from "./HomeImages/project5.jpg";
import project6 from "./HomeImages/project6.jpg";

const Projects = () => {
    return <div className={"container"}>
        <div className={"tech-container"}>
            <div className={"tech-box"}>
                <h5 className={"tech-box-text"}>showcase</h5>
            </div>
            <div className={"tech-header"}>
                <p> Check out our latest projects</p>
            </div>
            <div className={"container-wrapper"}>
                {
                    [
                        {
                            images: project1,
                            content: "Qwerty VR",
                            data: <>Lorem ispsum amet nullam arcu<br/>
                                tempus koen inpsum dollar amet nulla</>
                        },
                        {
                            images: project2,
                            content: "Draw & play",
                            data: <>Lorem ispsum amet nullam arcu<br/>
                                tempus koen inpsum dollar amet nulla</>
                        },
                        {
                            images: project3,
                            content: "Seven cycling",
                            data: <>Lorem ispsum amet nullam arcu<br/>
                                tempus koen inpsum dollar amet nulla</>
                        },
                        {
                            images: project4,
                            content: "CBD drops",
                            data: <>Lorem ispsum amet nullam arcu<br/>
                                tempus koen inpsum dollar amet nulla</>
                        },
                        {
                            images: project5,
                            content: "Hero fighting academy",
                            data:<>Lorem ispsum amet nullam arcu<br/>
                                tempus koen inpsum dollar amet nulla</>
                        },
                        {
                            images: project6,
                            content: "Book cover design",
                            data:<>Lorem ispsum amet nullam arcu<br/>
                                tempus koen inpsum dollar amet nulla</>
                        },
                    ].map((value, index) => {
                        return <div key={index}>
                            <div className={"project-image-container"}>
                                <img className={"project-image"} src={value.images} alt="projects"/>
                                <div className={"project-header"}>
                                    {value.content}
                                </div>
                                <div className={"project-data"}>
                                    {value.data}
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
export default Projects