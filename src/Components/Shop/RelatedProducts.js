import React from "react";
import img_1 from "./ShopImages/img_1.png"
import img_4 from "./ShopImages/img_4.png"
import img_6 from "./ShopImages/img_6.png"

const RelatedProducts = () => {
    return <div>
        <div className={"container1 related-products"}>
            <div>
                <h5>Related Products</h5>
            </div>
            <div className={"related-products-wrapper"}>
                {
                    [
                        {
                            image: img_1,
                            title: "Basic cotton t-shirt",
                            price: "$15.50",
                        },
                        {
                            image: img_4,
                            title: "Ecru hoodie",
                            price: "$36.50",
                        },
                        {
                            image: img_6,
                            title: "Purple hoodie",
                            price: "$25.50",
                        },
                        {
                            image: img_1,
                            title: "Basic cotton t-shirt",
                            price: "$15.50",
                        },
                    ].map((value, index) => {
                        return <div key={index} className={"related-data-container"}>
                            <img className={"related-images"} src={value.image} alt={".."}/>
                            <div className={"related-title"}>
                                <h6>{value.title}</h6>
                                {value.price}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <hr/>
    </div>

}
export default RelatedProducts
