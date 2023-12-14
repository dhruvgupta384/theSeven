import React, {useState} from "react";
import story1 from "./AboutImages/story1.jpg";
import story2 from "./AboutImages/story2.jpg";

const Story = () => {
    const [showItem, setShowItem] = useState()
    return <div className={"container story-container"}>
        <div className={" relative-position"}>
            <div>
                <img className={"creative-img"} src={story1} alt={"creative"}/>
                <img className={"story-img"} src={story2} alt={".."}/>
            </div>
        </div>
        <div>
            <h3 style={{marginBottom:"30px"}}>Our company</h3>
            {
                [
                    {
                        icon: <i className="fa-solid fa-arrow-right"/>,
                        header: "Our story",
                        text: <>Pellentesque vulputate purus ac ultricies tempor. Maecenas eleifend<br/>
                            magna eget tellus ornare, in auctor orci malesuada. Suspendisse ac<br/>
                            massa finibus nibh vulputate scelerisque. Vestibulum lobortis tincidunt<br/>
                            eros, ut interdum enim!</>
                    },
                    {
                        icon: <i className="fa-solid fa-arrow-right"/>,
                        header: "Core values",
                        text: <>Lorem ipsum dolor – sit amet, consectetur at dui quam nulla eu varius<br/>
                            fermentum, nibh tortor condimentum lacus adipiscing elit doloer.
                            <ul className={"list-style"}>
                                <li>Ut elit tellus, luctus nec</li>
                                <li>ullamcorper mattis,</li>
                                <li>pulvinar dapibus dolor amet leo.</li>
                            </ul>
                        </>
                    },
                    {
                        icon: <i className="fa-solid fa-arrow-right"/>,
                        header: "Mission",
                        text: <>Lorem ipsum dolor – sit amet, consectetur at dui quam nulla eu varius <br/>
                            fermentum lacus adipiscing elit. Ut elit tellus, luctus nec ullamcorper<br/>
                            mattis, pulvinar dapibus dolor amet leo.</>
                    },
                ].map((value, index) => {
                    return <div key={index} className={"core-values"}>
                        <div className={"circle-arrow-icon"} onClick={() => {
                            if (showItem === undefined) {
                                setShowItem(index)
                            } else {
                                if (showItem === index) setShowItem(undefined)
                                else setShowItem(index)
                            }
                        }}>
                            {value.icon}
                        </div>
                        <div>
                            <h5 className={"story-header"}>
                                {value.header}
                            </h5>
                            <p className={`story-text ${showItem === index ? "show-text" : ""}`}>
                                {value.text}
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}
export default Story