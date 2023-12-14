import React from "react";
import {Link} from "react-router-dom";
const ShopNavbar=()=>{
return<div className={"container1"}>
    <div className={"navbar-container "}>
        <div className={"footer-title"}>The
            <span style={{color:"black"}}>Seven</span>.
        </div>
        <div>
            <nav className={"shop-nav"}>
                <div className={"dropdown"}>
                    <Link to={"/"}>Home</Link>
                    <div className={"dropdown-content"}>
                        <ul>
                            <li className={"color"}>Home: hero scene</li>
                            <li> Home: hero image</li>
                            <li> Home: full screen slider</li>
                            <li> Home: full screen video</li>
                            <li> Home: creative</li>
                            <li> Home: shop full width</li>
                            <li> Home: shop banners</li>
                            <li> Home: shop slider + banners</li>
                        </ul>
                    </div>
                </div>
                <div className={"dropdown"}>
                    <Link to={"/about"}>About us</Link>
                    <div className={"dropdown-content"}>
                        <ul>
                            <li>About company<i className={"fa fa-caret-right"}/></li>
                            <li>Our team<i className={"fa fa-caret-right"}/></li>
                            <li>Terms and conditions</li>
                            <li> 404 page</li>
                            <li>Demo design system</li>
                        </ul>
                    </div>
                </div>
                <div className={"dropdown"}>
                    <Link to={"/Services"}>Services</Link>
                    <div className={"dropdown-content"}>
                        <li>Services: fancy title</li>
                        <li> Services: minimal</li>
                        <li> Services: full width</li>
                        <li> Services: standard</li>
                        <li> Service inner page</li>
                    </div>
                </div>
                <div className={"dropdown"}>
                    <Link to={"/Portfolio"}>Portfolio</Link>
                    <div className={"dropdown-content"}>
                        <li> Project page</li>
                        <li> Portfolio: fancy title</li>
                        <li> Portfolio: minimal</li>
                        <li> Portfolio: full width</li>
                        <li> Portfolio: full screen</li>
                        <li>Portfolio: standard</li>
                    </div>
                </div>
                <div className={"dropdown"}>
                    <Link to={"/Blogs"}>Blog</Link>
                    <div className={"dropdown-content"}>
                        <li> Post page</li>
                        <li> Blog: image title (grid)</li>
                        <li>Blog: image title (list)</li>
                        <li> Blog: full width</li>
                        <li> Blog: minimal (grid)</li>
                        <li>Blog: minimal (masonry)</li>
                        <li>Blog: standard (grid)</li>
                        <li>Blog: standard (masonry)</li>
                    </div>
                </div>
                <div className={"dropdown"}>
                    <Link to={"/Contact"}>Contact</Link>
                    <div className={"dropdown-content"}>
                        <li>Contact: fancy title</li>
                        <li> Contact: minimal</li>
                        <li>Contact: full width</li>
                        <li>Contact: standard</li>
                        <li> Contact: full screen</li>
                    </div>
                </div>
                <div className={"dropdown"}>
                    <Link to={"/Shop"}>Shop</Link>
                    <div className={"dropdown-content"}>
                        <li> Shop: filters in the sidebar</li>
                        <li>Shop: slide-out filters</li>
                        <li>Product page 1</li>
                        <li> Product page 2</li>
                        <li>Product page 3</li>
                    </div>
                </div>
                <div className={"dropdown"}>
                    <a>Elements</a>
                    <div className={"dropdown-content"}>

                        <li className={"color"}>Home: hero scene</li>
                        <li> Home: hero image</li>
                        <li> Home: full screen slider</li>
                        <li> Home: full screen video</li>
                        <li> Home: creative</li>
                        <li> Home: shop full width</li>
                        <li> Home: shop banners</li>
                        <li> Home: shop slider + banners</li>
                    </div>
                </div>
            </nav>
        </div>
        <div className={"shop-nav-icons"}>
            <i className="bi bi-search"/>
            <i className={"bi bi-person"}/>
            <i className={"bi bi-bag"} />
            {/*<button className={"cart"}>0</button>*/}
        </div>
    </div>
</div>
}
export default ShopNavbar