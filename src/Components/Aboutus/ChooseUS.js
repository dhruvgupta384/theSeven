import React from "react";
import slider3 from "./AboutImages/slider3.webp"
import choose1 from "./AboutImages/choose1.png"
const ChooseUS = () => {
    return <div className={"container"}>
        <div className={"choose-container relative-position"}>
            <div style={{marginTop:60}} >
                <h3>Why choose us</h3>
                <div>
                    {
                        [
                            {
                                icon: <i className="bi bi-headset"/>,
                                Header: "24/7 Customer support",
                                text: <>Contact us whenever you require support or expert
                                    <br/> advice – all at no extra cost.</>
                            },
                            {
                                icon: <i className="bi bi-credit-card-2-back"/>,
                                Header: "Fixed fees",
                                text: <>No surprises or hidden costs. 100% safe transactions.</>
                            },
                            {
                                icon: <i className="bi bi-people"/>,
                                Header: "Top industry specialists",
                                text: <>We work together to deliver the results
                                    you seek to<br/> achieve.</>
                            },
                        ].map((value, index) => {
                            return <div key={index} className={"expert-text-container"}>
                                <div className={"icons-support"}>
                                    <span className={"choose-icons"}>{value.icon}</span>
                                </div>
                                <div className={"support-container"}>
                                    <h5> {value.Header}</h5>
                                    <p className={"choose-text"}>{value.text}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={"expert-images"}>
                <img className={"industry-img"} src={choose1} alt={"c"}/>
                <img className={"motivation-img"} src={slider3} alt={"m"}/>
            </div>
        </div>

    </div>
}
export default ChooseUS