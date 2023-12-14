import React from "react";
import img from "./ShopImages/img.png"
import img_1 from "./ShopImages/img_1.png"
import img_2 from "./ShopImages/img_2.png"
import img_3 from "./ShopImages/img_3.png"
import img_4 from "./ShopImages/img_4.png"
import img_5 from "./ShopImages/img_5.png"
import img_6 from "./ShopImages/img_6.png"
import img_7 from "./ShopImages/img_7.png"
import img_8 from "./ShopImages/img_8.png"
import img_9 from "./ShopImages/img_9.png"
import img_10 from "./ShopImages/img_10.png"
import img_11 from "./ShopImages/img_11.png"
import img_12 from "./ShopImages/img_12.png"
import img_13 from "./ShopImages/img_13.png"
import img_14 from "./ShopImages/img_13.png"
import {Link} from "react-router-dom";

const DefaultShopPage = () => {
    return <div className={"shop-page"}>
            <p className={"product-home"}>
                <Link to={"/"}><span className={"link"}>Home</span> </Link>
                &nbsp; > &nbsp; Shop default page
            </p>
        <h3>Products</h3>
        <div className={"products-wrapper"}>
            {
                [
                    {
                        product: img,
                        product2: img_3,
                        title: "Basic brown cotton t-shirt",
                        price: "$12.00"
                    },
                    {
                        product: img_1,
                        product2: img_2,
                        title: "Basic cotton t-shirt",
                        price: "$15.50"
                    },
                    {
                        product: img_4,
                        product2: img_5,
                        title: "Ecru",
                        price: "$36.00"
                    },
                ].map((value, index) => {
                    return <div key={index}>
                        <Link to={"/ProductPage"}>
                        <div className="shop-img-wrapper">
                            <img className={"shop-img"} src={value.product} alt={"shop"}/>
                            <img className={"shop-img-2"} src={value.product2} alt={"shop"}/>
                        </div>

                        <p className={"product-title"}>{value.title}</p>
                            <div className={"link"}>{value.price}</div>
                        </Link>
                    </div>
                })
            }
        </div>
        <div className={"products-wrapper"}>
            {
                [
                    {
                        product: img_6,
                        product2: img_7,
                        title: "Basic brown cotton t-shirt",
                        price: "$12.00"
                    },
                    {
                        product: img,
                        product2: img_3,
                        title: "Basic cotton t-shirt",
                        price: "$15.50"
                    },
                    {
                        product: img_8,
                        product2: img_9,
                        title: "Ecru",
                        price: "$36.00"
                    },
                ].map((value, index) => {
                    return <div key={index}>
                        <div className="shop-img-wrapper">
                            <img className={"shop-img"} src={value.product} alt={"shop"}/>
                            <img className={"shop-img-2"} src={value.product2} alt={"shop"}/>
                        </div>
                        <p className={"product-title"}>{value.title}</p>
                       {value.price}
                    </div>
                })
            }
        </div>
        <div className={"products-wrapper"}>
            {
                [
                    {
                        product: img_10,
                        product2: img_11,
                        title: "Basic brown cotton t-shirt",
                        price: "$12.00"
                    },
                    {
                        product: img_12,
                        product2: img_13,
                        title: "Basic cotton t-shirt",
                        price: "$15.50"
                    },
                    {
                        product: img_14,
                        product2: img_11,
                        title: "Ecru",
                        price: "$36.00"
                    },
                ].map((value, index) => {
                    return <div key={index}>
                        <div className="shop-img-wrapper">
                            <img className={"shop-img"} src={value.product} alt={"shop"}/>
                            <img className={"shop-img-2"} src={value.product2} alt={"shop"}/>
                        </div>

                            <p className={"product-title"}>{value.title}</p>
                            {value.price}

                    </div>
                })
            }
        </div>
        <div className={"pagination2 "}>
            <a>1</a>
            <a style={{paddingLeft: 20}}> 2</a>
            <i className={"bi bi-arrow-right"}/>
        </div>
        <p className={"pages"}>Showing 1–12 of 22 results</p>
    </div>
}
export default DefaultShopPage