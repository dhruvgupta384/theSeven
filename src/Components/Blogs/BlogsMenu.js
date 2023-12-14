import React from "react";

const BlogsMenu = ({show, setShow}) => {
    return <div className={"container"}>
        <div className={"portfolio-menu"}>
            <a onClick={() => {
                setShow("all")
            }}>All</a>
            <a onClick={() => {
                setShow("company")
            }}>Company</a>
            <a onClick={() => {
                setShow("events")
            }}>Events</a>
            <a onClick={()=>{
                setShow("industry")
            }}>Industry</a>
            <a onClick={()=>{
                setShow("tips_tricks")
            }}>Tips & Tricks</a>
        </div>
    </div>
}
export default BlogsMenu