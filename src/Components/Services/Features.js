import React from "react";

const Features = () => {
    return <div className={"container"}>
        <div className={"features-container"}>
            {
                [
                    {
                        icon: <i className={"bi bi-phone"}/>,
                        names: "Mobile apps",
                        text: <>Dolor amet - ipsum dolor sit amet<br/>
                            consectetur adipiscing olor sit amet.Quisque<br/>
                            dolor sapien ? Curabitur et mattis ante-<br/>
                            fringilla id tellus nec</>
                    },
                    {
                        icon: <i className={"bi bi-chat-text"}/>,
                        names: "Consulting",
                        text: <>Dolor amet - ipsum dolor sit amet<br/>
                            consectetur adipiscing olor sit amet.Quisque<br/>
                            dolor sapien ? Curabitur et mattis ante-<br/>
                            fringilla id tellus nec</>
                    },
                    {
                        icon: <i className={"bi bi-info-square"}/>,
                        names: "Brand identity",
                        text: <>Dolor amet - ipsum dolor sit amet<br/>
                            consectetur adipiscing olor sit amet.Quisque<br/>
                            dolor sapien ? Curabitur et mattis ante-<br/>
                            fringilla id tellus nec</>
                    },
                    {
                        icon: <i className={"bi bi-graph-up-arrow"}/>,
                        names: "MarketingPortfolio plan",
                        text: <>Dolor amet - ipsum dolor sit amet<br/>
                            consectetur adipiscing olor sit amet.Quisque<br/>
                            dolor sapien ? Curabitur et mattis ante-<br/>
                            fringilla id tellus nec</>
                    },
                    {
                        icon: <i className={"bi bi-journal-check"}/>,
                        names: "Audith",
                        text: <>Dolor amet - ipsum dolor sit amet<br/>
                            consectetur adipiscing olor sit amet.Quisque<br/>
                            dolor sapien ? Curabitur et mattis ante-<br/>
                            fringilla id tellus nec</>
                    },
                    {
                        icon: <i className={"bi bi-shield-check"}/>,
                        names: "Data Security",
                        text: <>Dolor amet - ipsum dolor sit amet<br/>
                            consectetur adipiscing olor sit amet.Quisque<br/>
                            dolor sapien ? Curabitur et mattis ante-<br/>
                            fringilla id tellus nec</>
                    },
                ].map((value, index) => {
                    return <div key={index} className={"features-wrapper"}>
                        <div className={"features-circle"}>
                          {value.icon}
                        </div>
                        <h5 className={"features-header"}>
                            {value.names}
                        </h5>
                       <p className={"features-text"}>{value.text}</p>
                    </div>
                })
            }
        </div>
    </div>
}
export default Features