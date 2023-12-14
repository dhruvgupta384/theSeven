import React from "react";
import client1 from "./HomeImages/client1.webp";
import client2 from "./HomeImages/client2.webp";
import client3 from "./HomeImages/client3.webp";
import client4 from "./HomeImages/client4.webp";
import client5 from "./HomeImages/client5.webp";
// import client6 from "./HomeImages/client6.webp";
// import client7 from "./HomeImages/client7.webp";

const Clients = () => {
    return <div className={"container"}>
        <div className={"tech-container"}>
            <div className={"box"}>
                <h5 className={"tech-box-text"}>among our clients</h5>
            </div>
            <div className={"clients-image-container"}>
                {
                    [
                        {image: client1},
                        {image: client2},
                        {image: client3},
                        {image: client4},
                        {image: client5},
                        // {image: client6},
                        // {image: client7},
                    ].map((value, index) => {
                        return <div key={index}>
                            <img className={"clients-img"} src={value.image} alt="clients"/>
                        </div>
                    })
                }
            </div>
        </div>

    </div>
}
export default Clients