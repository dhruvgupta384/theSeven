import React from "react";

const MenuBar = ({view,setView}) => {
    return <div className={"container"}>
        <div className={"portfolio-menu"}>
            <a onClick={()=>{
                setView("view_all")
            }}>view all</a>
            <a onClick={()=>{
                setView("branding")
            }}>Branding</a>
            <a onClick={()=>{
                setView("ui_ux")
            }}>ui/ux</a>
            <a onClick={()=>{
                setView("marketing")
            }}>Marketing</a>
            <a onClick={()=>{
                setView("web_design")
            }}>web design</a>
        </div>
    </div>
}
export default MenuBar