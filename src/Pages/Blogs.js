import React, {useState} from "react";
import HomeNavbar from "../Components/HomePage/HomeNavbar";
import BlogsMenu from "../Components/Blogs/BlogsMenu";
import AllEvents from "../Components/Blogs/AllEvents";
import Footer from "../Components/HomePage/Footer";
import BlogsCompany from "../Components/Blogs/BlogsCompany";
import BlogsEvents from "../Components/Blogs/BlogsEvents";
import BlogIndustry from "../Components/Blogs/BlogIndustry";
import BlogTricks from "../Components/Blogs/BlogTricks";

const Blogs = () => {
    const [show, setShow] = useState("all")
    return <div>
        <div className={"background"}>
            <div>
                <HomeNavbar/>
            </div>
            <div className={"container"}>
                <div className={"about-box-container"}>
                    <div className={"about-box"}>
                        <h3 className={"company-box-text"}>OUR Blog</h3>
                    </div>
                    <div className={"about-header"}>
                        <h1>
                            Company's news & events
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <BlogsMenu show={show} setShow={setShow}/>
        {
            show === "all" && <AllEvents/>}

        {
            show === "company" && <BlogsCompany/>
        }
        {
            show === "events" && <BlogsEvents/>
        }
        {
            show === "industry" && <BlogIndustry/>
        }
        {
            show==="tips_tricks"&&<BlogTricks />
        }
        <Footer/>
    </div>
}
export default Blogs