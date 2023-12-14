import React from "react";

const ShopFooter = () => {
    return <div className={"shop-footer-container"}>
        <div className={"container1"}>
            <div className={"shop-footer-wrapper"}>
                {
                    [
                        {
                            title: "Company",
                            services: <ul>
                                <li> Contact us</li>
                                <li>Terms and conditions</li>
                                <li> Elements</li>
                                <li>Demo design system</li>
                            </ul>
                        },
                        {
                            title: "Services",
                            services: <ul>
                                <li> Consulting</li>
                                <li> Digital art</li>
                                <li> Web design</li>
                                <li>Social media marketing</li>
                            </ul>
                        },
                        {
                            title: "Info",
                            services: <ul>
                                <>
                                    <li> Contact us</li>
                                    <li>Terms and conditions</li>
                                    <li> Elements</li>
                                    <li>Demo design system</li>
                                </>
                            </ul>
                        },
                        {
                            title: "Social profiles",
                            services: <>
                                <i className={"bi bi-facebook"}/>
                                <i className={"bi bi-youtube"}/>
                                <i className={"bi bi-instagram"}/>
                                <i className={"bi bi-behance"}/>
                            </>
                        },
                        {
                            title: "Newsletter signup",
                            services: <form>
                                <input
                                    type={"email"}
                                    placeholder={"Enter your email..."}/>
                                <button type={"submit"} className={"sign"}>Sign up</button>
                                <p className={"form-text"}>
                                    Get exclusive offers, coupons & promotions!
                                </p>
                            </form>

                        },
                    ].map((value, index) => {
                        return <div key={index} className={"footer-services"}>
                            <h6>{value.title}</h6>
                            {value.services}
                        </div>
                    })
                }
            </div>
            <footer>© Copyright 2022 Dream-Theme. All rights reserved.</footer>
        </div>
    </div>
}
export default ShopFooter