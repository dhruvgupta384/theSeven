import React from "react";
import Image1 from "./HomeImages/Image1.jpeg";
import Image2 from "./HomeImages/Image2.jpg";

const HeadingContainer = () => {
    return <div>
        <div className={"container relative-position"} >
            <div className={"homepage-container"}>
                <div>
                    <div className={"text-container"}>
                        <div className={"header-box"}>
                            <h3 className={"header-box-text"}>The seven theme</h3>
                        </div>
                        <div className={"main-header"}>
                            <p>The Most Customizable<br/>
                                Theme On The Market</p>
                        </div>
                        <div className={"elementor-text"}>
                            <h4>Elementor full - feature demo: online store, lots of unique</h4>
                            <h4>pages & templates, 50+ ready to use elements.</h4>
                        </div>
                        <div className={"button-container"}>
                            <button className={"btn1-home"}> Buy The7 - $39</button>
                            <button className={"btn2-home"}> Discover all elements
                                <i className={"bi bi-layers"}/></button>
                        </div>
                    </div>
                </div>
              <div>
                  <img src={Image1} className=" laptop-img " alt="..."/>
              </div>
            </div>
            <img className={"idea-img"} src={Image2} alt={"idea"}/>
        </div>
    </div>
}
export default HeadingContainer;