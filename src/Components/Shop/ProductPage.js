import React, {useState} from "react";
import ShopNavbar from "./ShopNavbar";
import img from "./ShopImages/img.png"
import {Link} from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import Reviews from "./Reviews";
import ShopFooter from "./ShopFooter";

const ProductPage = () => {
    const [count, setCount] = useState(1)
    const [showItem, setShowItem] = useState()
    return <div>
        <ShopNavbar/>
        <hr/>
        <div className={"container1"}>
            <div className={"product-page-container"}>
                <ul className={"d-flex"}>
                    <li><Link className={"link"} to={"/"}>Home</Link>  &nbsp;> &nbsp;</li>
                    <li>Fashion  &nbsp;> &nbsp;</li>
                    <li>Woman  &nbsp;> &nbsp;</li>
                    <li>T-shirts  &nbsp;> &nbsp;</li>
                    <span className={"basic-text"}> Basic brown cotton t…</span>
                </ul>
            </div>
            <div className={"d-flex p-bottom"}>
                <div>
                    <img className={"t-shirt-img"} src={img} alt={"..."}/>
                    <div className={"t-shirt-image-container"}>
                        <img className={"t-shirt-img1"} src={img} alt={".."}/>
                        <img className={"t-shirt-img2"} src={img} alt={".."}/>
                        <img className={"t-shirt-img3"} src={img} alt={".."}/>
                        <img className={"t-shirt-img4"} src={img} alt={".."}/>
                    </div>
                </div>
                <div className={"right-container"}>
                    <h3>Basic brown cotton t-shirt</h3>
                    <h5 className={"right-container-price"}>$12.00</h5>
                    <div className={"right-container-box"}>
                        <span>SKU: 2021-591</span>
                    </div>
                    <p className={"right-container-text "}>
                        Integer tristique – lorem ipsum amet egestas dui sed venenatis.<br/>
                        Curabitur vulputate sodales.
                    </p>
                    <div className={"button-container2"}>
                        <button className={"right-container-btn1"}>
                            <button className={"minus-btn"} onClick={() => {
                                setCount(count - 1)
                            }}>-
                            </button>
                            {count}
                            <button className={"plus-btn"} onClick={() => {
                                setCount(count + 1)
                            }}>+
                            </button>
                        </button>
                        <button className={"right-container-btn2"}>Add to cart</button>
                    </div>
                    <div className={"product-details-wrapper"}>

                        {
                            [
                                {
                                    product: "Details",
                                    details: <>
                                        <li>brown color</li>
                                        <li>cashmere-cotton blend</li>
                                        <li>signature logo</li>
                                        <li>short sleeves</li>
                                        <li>Made in Italy</li>
                                    </>
                                },
                                {
                                    product: "Composition",
                                    details: <p>Cotton 50%, Cashmere 50%</p>
                                },
                                {
                                    product: "Size & fit",
                                    details: <>
                                        <li>This piece fits true to size.
                                            We recommend you get your regular size
                                        </li>
                                        <li>Cut for a slim fit</li>
                                        <li>Made with a mid-weight fabric</li>
                                    </>
                                }

                            ].map((value, index) => {
                                return <div key={index}>
                                    <hr/>
                                    <h5 className={"product-header"}
                                        onClick={() => {
                                            if (showItem === undefined) {
                                                setShowItem(index)
                                            } else {
                                                if (showItem === index) setShowItem(undefined)
                                                else setShowItem(index)
                                            }
                                        }}>{value.product}
                                        <i className={"bi bi-chevron-down"}/>
                                    </h5>
                                    <p className={`details-hidden-text ${showItem === index ? "details-show-text" : ""}`}>
                                        {value.details}
                                    </p>
                                </div>
                            })
                        }
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
        <hr/>
        <RelatedProducts/>
        <Reviews/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ShopFooter/>
    </div>
}
export default ProductPage