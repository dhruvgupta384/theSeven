import React from "react";

const Marketing = () => {
    return <div className={"container"}>
        <div  className={" circle-container"}>
            {
                [
                    {
                        icon: <i className='bi bi-bar-chart-line'/>,
                        circleHeading: " Digital marketing",
                        circleText: "starting from",
                        price: "$549"
                    },
                    {
                        icon: <i className='bi bi-journal-check'/>,
                        circleHeading: "Web design & ecommerce",
                        circleText: "starting from",
                        price: "$1800"
                    },
                    {
                        icon: <i className='bi bi-window-sidebar'/>,
                        circleHeading: "Website audit & analytics",
                        circleText: "starting from",
                        price: "$1200"
                    },
                ].map((value, index) => {
                    return <div key={index} className="circle-item">
                        <div className={"circle"}>
                            <div className={"circle-icons"}>
                                {value.icon}
                            </div>
                        </div>
                        <div>
                            <h5 className={"circle-header"}>{value.circleHeading}</h5>
                            <p className="circle-text">{value.circleText}
                                <span className={"color"}>{value.price}</span>
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}
export default Marketing;