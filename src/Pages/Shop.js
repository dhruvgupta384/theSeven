import React, {useState} from "react";
import ShopNavbar from "../Components/Shop/ShopNavbar";
import ShopCategories from "../Components/Shop/ShopCategories";
import DefaultShopPage from "../Components/Shop/DefaultShopPage";
import ShopFooter from "../Components/Shop/ShopFooter";

const Shop = () => {
    return <div>
        <div className={"container1"}>
            <ShopNavbar/>
            <hr/>
            <div className={"d-flex"}>
                <ShopCategories/>
                <DefaultShopPage/>
            </div>

        </div>
        <ShopFooter/>
    </div>
}
export default Shop