import React from "react";
import Image3 from "./HomeImages/Image3.jpg";

const TechHomepage = () => {
    return <div className={"tech-container"}>
        <div className={"tech-box"}>
            <h4 className={"tech-box-text"}>who we are</h4>
        </div>
        <div className={"tech-header"}>
            <p>
                A team of business consultants, passionate<br/>
                about new technologies & progress
            </p>
        </div>
        <div className={"container"}>
            <div style={{display: "flex"}}>
                <img className={"meeting-image"} src={Image3} alt="meeting"/>
                <div style={{paddingLeft: 50}}>
                    <p className={"meeting-image-text"}>
                        We offer complete donec placerat metus erat, conubia nostra, per<br/>
                        inceptos vulputate nulla iaculis eu creative volutpat donec placerat metus<br/>
                        erat, conubia nostra, per inceptos vulputate nulla iaculis eu. Class litora<br/>
                        torquent per conubia nostra.
                    </p>
                    <div className={"container-wrapper"}>
                        {
                            [
                                {
                                    icon: <i className="bi-solid bi-check"/>,
                                    feedback: "50+ % returning customers"
                                },
                                {
                                    icon: <i className="bi-solid bi-check"/>,
                                    feedback: "100+ positive feedbacks"
                                },
                                {
                                    icon: <i className="bi bi-check"/>,
                                    feedback: "Fixed prices"
                                },
                                {
                                    icon: <i className="bi bi-check"/>,
                                    feedback: "Money back guarantee"
                                },
                            ].map((value,index)=>{
                                    return <div key={index} className={"feedback-container"}>
                                        <p>
                                          <span className={"feedback-container-bi-check"}>  {value.icon}</span>
                                            {value.feedback}
                                        </p>
                                    </div>
                                }
                            )
                        }
                    </div>

                    <div>
                        <p className={"check-text"}>Learn More about us
                            <i className="bi bi-arrow-right"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default TechHomepage;