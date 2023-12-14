import React from "react";

const ResultsHomepage = () => {
    return <div className={"container"}>
        <div className={"tech-container"}>
            <div className={"result-box"}>
                <h4 className={"tech-box-text"}>why choose us</h4>
            </div>
            <div className={"tech-header"}>
                <p> Modern approach & sustainable results</p>
            </div>
            <div className={"container-wrapper"}>
                {
                    [
                        {
                            icons: <i className="bi bi-briefcase"/>,
                            Header: "Top industry specialists",
                            text: <>We work together to deliver the results <br/>
                                you seek to achieve.</>
                        },
                        {
                            icons: <i className="bi bi-headset"/>,
                            Header: "24/7 Customer support",
                            text: <>Contact us whenever you require <br/>
                                support or expert advice – all at no <br/> extra cost.</>
                        },
                        {
                            icons: <i className="bi bi-credit-card-2-back"/>,
                            Header: "Fixed fees",
                            text: <>No surprises or hidden costs. 100% safe <br/>
                                online transactions.</>
                        },
                        {
                            icons: <i className="bi bi-person-bounding-box"/>,
                            Header: "Customer focus",
                            text: <>We offer complete donec placerat <br/>metus eratconubia
                                nostra per inceptos <br/> vulputate!</>
                        },
                        {
                            icons: <i className="bi bi-currency-dollar"/>,
                            Header: "100% Money back guarantee",
                            text: <>We offer complete nostra, per inceptos<br/> vulputate
                                nulla iaculis eu creative <br/>  volutpat donec.</>
                        },
                        {
                            icons: <i className="bi bi-patch-check"/>,
                            Header: "Tailored solutions",
                            text: <>Unique solutions to your company's<br/>
                                case, goals and budget.</>
                        },
                    ].map((value, index) => {
                        return <div key={index} className={"result-container"}>
                        <span className={"results-icons"}>
                            {value.icons}
                            <h5 className={"result-headers"}>
                           {value.Header}
                           </h5>
                    </span>
                            <p className={"results-text"}> {value.text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>

}
export default ResultsHomepage