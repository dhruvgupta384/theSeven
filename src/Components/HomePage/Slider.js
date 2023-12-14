import React from "react";
import slider1 from "./HomeImages/slider1.jpg";
import slider2 from "./HomeImages/slider2.webp";
import slider3 from "../Aboutus/AboutImages/slider3.webp";
import slider4 from "./HomeImages/slider4.webp";

const Slider = () => {
    return <div className={"background1 clients-container"}>
        <div className={"container"}>
            <div className={"clients-box"}>
                <h4 className={"clients-box-text"}>what our clients say</h4>
            </div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                    <li data-target="#myCarousel" data-slide-to="1"/>
                    <li data-target="#myCarousel" data-slide-to="2"/>
                    <li data-target="#myCarousel" data-slide-to="3"/>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <div style={{display:"flex"}}>`
                            <div className={"slider-text-wrapper"}>
                                <img className={"slider-image"} src={slider1} alt=".."/>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        Pellentesque condimentum vedit tortor.cras<br/>
                                        ornare ex,quis fringilla tortor.Nunc fermentum <br/>
                                        quam et tortor euismod.
                                    </p>
                                    <h3 className={"slider-author"}>Richard Anderson</h3>
                                    <p className={"slider-bio"}>Seven Media - creative director</p>
                                </div>
                            </div>
                            <div className={"slider-text-wrapper"}>
                                <img className={"slider-image"} src={slider2} alt=".."/>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        Sed ut perspiciatis unde omnis iste natus erro<br/>
                                        Pellentesque condimentum vedit tortor.cras<br/>
                                        ornare ex,quis fringilla tortor.Nunc fermentum. <br/>
                                    </p>
                                    <h3 className={"slider-author"}>Tiffany Whitewood</h3>
                                    <p className={"slider-bio"}>Seven Consulting - CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div style={{display:"flex"}}>
                            <div className={"slider-text-wrapper"}>
                                <img className={"slider-image"} src={slider3} alt=".."/>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        On the other hand, we denounce with righteous<br/>
                                        pellentesque condimentum vedit tortor.cras<br/>
                                        indignation and dislike men who are beguiled  <br/>
                                    </p>
                                    <h3 className={"slider-author"}>Stephan Lee</h3>
                                    <p className={"slider-bio"}>Seven Consulting - CEO</p>
                                </div>
                            </div>
                            <div className={"slider-text-wrapper"}>
                                <img className={"slider-image"} src={slider4} alt=".."/>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        At vero eos et accusamus et iusto odio consulting <br/>
                                        dignissimos ducimus qui blanditiis praesentium<br/>
                                        quam et tortor euismod.
                                    </p>
                                    <h3 className={"slider-author"}>Alex Black</h3>
                                    <p className={"slider-bio"}>Seven Consulting - CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div style={{display:"flex"}}>
                            <div className={"slider-text-wrapper"}>
                                <div className={"slider-icon"}>
                                    <i className={"bi bi-quote"} />
                                </div>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        Et harum quidem rerum facilis est et expedita <br/>
                                        distinctio. Nam libero tempore, cum soluta nobis. <br/>
                                    </p>
                                    <h3 className={"slider-author"}>Diana Green</h3>
                                    <p className={"slider-bio"}>Seven Arts - marketing manager</p>
                                </div>
                            </div>
                            <div className={"slider-text-wrapper"}>
                                <div className={"slider-icon"}>
                                    <i className={"bi bi-quote"} />
                                </div>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        Pellentesque condimentum vedit tortor.cras<br/>
                                        ornare ex,quis fringilla tortor.Nunc fermentum <br/>
                                        quam et tortor euismod.
                                    </p>
                                    <h3 className={"slider-author"}>Tiffany Whitefire</h3>
                                    <p className={"slider-bio"}>Seven Consulting - CEO</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="item">
                        <div style={{display:"flex"}}>
                            <div className={"slider-text-wrapper"}>
                                <div className={"slider-icon"}>
                                    <i className={"bi bi-quote"} />
                                </div>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        Temporibus autem quibusdam et aut officiis <br/>
                                        ornare ex,quis fringilla tortor.Nunc fermentum <br/>
                                        debitis aut rerum necessitatibus saepe eveniet.
                                    </p>
                                    <h3 className={"slider-author"}>Miriam Blackwood</h3>
                                    <p className={"slider-bio"}>Seven Media - creative director</p>
                                </div>
                            </div>
                            <div className={"slider-text-wrapper"}>
                                <img className={"slider-image"} src={slider1} alt=".."/>
                                <div className={"slider"}>
                                    <p className={"slider-title"}>
                                        Pellentesque condimentum vedit tortor.cras<br/>
                                        ornare ex,quis fringilla tortor.Nunc fermentum <br/>
                                        quam et tortor euismod.
                                    </p>
                                    <h3 className={"slider-author"}>Richard Anderson</h3>
                                    <p className={"slider-bio"}>Seven Media - creative director</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>

}
export default Slider