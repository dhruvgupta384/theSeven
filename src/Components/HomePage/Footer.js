import React from "react";

const Footer = () => {
    return <div style={{backgroundColor: "#1b1d1f"}}>
        <div className={"footer-container"}>
            <div className={"container"}>
                <div className={"blog-container"}>
                    <div>
                        <div className={"footer-title"}>The
                            <span style={{color: "white"}}> Seven</span>.
                        </div>
                        <p className={"footer-title-text"}>Reach us Monday – Friday<br/>
                            9 am – 6 pm (UTC+7)</p>
                        <p className={"number"}>Call: 1-001-234-5678</p>
                        <button className={"email-btn "}>Email us</button>
                    </div>
                    <div className={"company-wrapper"}>
                        {
                            [
                                {
                                    title: "Company",
                                    blog: <>
                                        <li>About</li>
                                        <li>Team</li>
                                        <li>Showcase</li>
                                        <li>News</li>
                                    </>

                                },
                                {
                                    title: "Services",
                                    blog: <ul>
                                        <li>Consulting</li>
                                        <li>Digital art</li>
                                        <li>Web design</li>
                                        <li>Social media and marketing</li>
                                    </ul>
                                },
                                {
                                    title: "Connect",
                                    blog: <div className={"footer-icons"}>
                                        <i className={"bi bi-facebook"}/>
                                        <i className={"bi bi-youtube footer-fb"}/>
                                        <i className={"bi bi-instagram footer-fb"}/>
                                        <i className={"bi bi-behance footer-fb"}/>
                                    </div>
                                }

                            ].map((value, index) => {
                                return <div key={index} style={{marginLeft:"150px"}}>
                                        <h5 className={"number"}> {value.title}</h5>
                                        <p className={"footer-text"}> {value.blog}</p>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
        <footer className={"footer-rights"}>
            <hr style={{borderTop: "1px solid #fff9"}}/>
            <span className={"conditions"}>© 2022 The Seven. All Rights Reserved.</span>|
            <span className={"terms"}> Terms & conditions</span>|
            <span className={"terms"}> Sitemap</span> |
            <span className={"terms"}> Demo design system</span>
        </footer>
    </div>
}
export default Footer;