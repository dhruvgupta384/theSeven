import React from "react";

const Location = () => {
    return <div className={"container"}>
        <div className={"location-container"}>
            {
                [
                    {
                        icon: <i className={"bi bi-telephone"}/>,
                        header: "1-001-234-5678",
                        text: "Mon-Sat: 8:00 – 21:00",
                    },
                    {
                        icon: <i className={"bi bi-envelope"}/>,
                        header: "info@dream-theme.com",
                        text: "24/7 Customer support",
                    },
                    {
                        icon: <i className={"bi bi-building"}/>,
                        header: <>3 Rockaway St., New Rochelle, NY <br/>
                            10801</>,
                        text: "Main office location",
                    },
                ].map((value, index) => {
                    return <div key={index} className={"location-wrapper"}>
                        <div className={"location-icons"}> {value.icon}</div>
                        <h4 className={"location-header"}>{value.header}</h4>
                        <p className={"location-text"}>{value.text}</p>
                    </div>
                })
            }
        </div>
    </div>
}
export default Location