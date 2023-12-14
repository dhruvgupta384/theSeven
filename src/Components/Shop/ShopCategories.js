import React, {useState} from "react";
import Slider from '@material-ui/core/Slider';

const ShopCategories = () => {
    const [showItems, setShowItems] = useState([])
    const [showList, setShowList] = useState()
    const [value, setValue] = useState([0, 100]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
    };
    return <div>
        <div className={"category-container"}>
            <div >
                {
                    [
                        {
                            detail: "Categories",
                            icon: <i className={"bi-chevron-down"}/>,
                            children: [
                                {
                                    name: "All products",
                                    count: "0"
                                },
                                {
                                    name: "Cosmetics",
                                    count: "5",
                                    SubIcon: <i className={"fa fa-caret-down"}/>,
                                    subCategory: [
                                        {
                                            content: "Hair color",
                                            count: "2"
                                        },
                                        {
                                            content: "Skin color",
                                            count: "3"
                                        }
                                    ]
                                },
                                {
                                    name: "Fashion",
                                    count: "7",
                                    SubIcon: <i className={"fa fa-caret-down"}/>,
                                    subCategory: [
                                        {
                                            content: "Men",
                                            count: "2"
                                        },
                                        {
                                            content: "Woman",
                                            count: "3"
                                        }
                                    ]
                                },
                                {
                                    name: "Home accessories",
                                    count: "12",
                                    SubIcon: <i className={"fa fa-caret-down"}/>,
                                    subCategory: [
                                        {
                                            content: "Bathroom",
                                            count: "2"
                                        },
                                        {
                                            content: "Kitchen",
                                            count: "5"
                                        },
                                        {
                                            content: "Living Room",
                                            count: "3"
                                        },
                                        {
                                            content: "Office",
                                            count: "3"
                                        },
                                    ]
                                },
                                {
                                    name: "Uncategorized",
                                    count: "0"
                                },
                            ]
                        },
                        {
                            detail: "Color",
                            icon: <i className={"bi-chevron-down"}/>,
                            color: [
                                {
                                    checkbox: <i className={"bi bi-check"}/>,
                                    name: "Black",
                                    count: "7"
                                },
                                {
                                    checkbox: <i className={"bi bi-check "}/>,
                                    name: "Blue",
                                    count: "2",
                                },
                                {
                                    checkbox: <i className={"bi bi-check "}/>,
                                    name: "Brown",
                                    count: "6"
                                },
                                {
                                    checkbox: <i className={"bi bi-check "}/>,
                                    name: "Gold",
                                    count: "4"
                                },
                                {
                                    checkbox: <i className={"bi bi-check"}/>,
                                    name: "Green",
                                    count: "3"
                                },
                            ]
                        },
                        {
                            detail: "Size",
                            icon: <i className={"bi-chevron-down"}/>,
                            size: [
                                {
                                    quantity: "100ml",
                                },
                                {
                                    quantity: "1000ml",
                                },
                                {
                                    quantity: "20ml",
                                },

                                {
                                    quantity: "250ml",
                                },
                                {
                                    quantity: "50ml",
                                },
                                {
                                    quantity: "500ml",
                                },
                                {
                                    quantity: "L",
                                },
                                {
                                    quantity: "M",
                                },
                                {
                                    quantity: "One size",
                                },
                                {
                                    quantity: "S",
                                },
                                {
                                    quantity: "XL",
                                },
                                {
                                    quantity: "XS",
                                },
                            ]
                        },
                        {
                            detail: "Price",
                            icon: <i className={"bi-chevron-down"}/>,
                            priceSlider: [
                                {
                                    slider: <>
                                        <div className={"price-wrapper"}>
                                            <div>Min: <span style={{color: "black"}}>${value[0]}</span></div>
                                            <div>Max:<span style={{color: "black"}}>${value[1]}</span></div>
                                        </div>
                                        <Slider
                                            value={value}
                                            onChange={rangeSelector}
                                            valueLabelDisplay="auto"
                                        />
                                    </>
                                },
                            ]
                        }
                    ].map((value, index) => {
                        return <div key={index} className={"details-container"}>
                            <div onClick={() => {
                                if (showItems.includes(index)) {
                                    let show = [...showItems];
                                    let indexOf = show.findIndex(value1 => value1 === index)
                                    show.splice(indexOf, 1)
                                    setShowItems(show)
                                } else {
                                    let temp = [...showItems, index];
                                    setShowItems(temp)
                                }
                            }}>
                                <p className={"category-text"}>
                                    {value.detail}
                                    {value.icon}
                                </p>
                            </div>
                            <p className={`detail-list ${showItems.includes(index) ? "show-detail" : ""}`}>
                                {
                                    value.children && value.children.map((value1, index2) => {
                                        return <ul key={index2}>
                                            <li className={"d-flex"}>
                                                {value1.name}
                                                <span className={"count"}>{value1.count}</span>
                                            </li>
                                            <div onClick={() => {
                                                if (showList === undefined) {
                                                    setShowList(index2)
                                                  } else {
                                                    if (showList === index2) setShowList(undefined)
                                                    else setShowList(index2)
                                                }
                                            }}>{value1.SubIcon}
                                            </div>
                                            {
                                                value1.subCategory && value1.subCategory.map((value2, index3) => {
                                                    return <ul key={index3}>
                                                        <li className={`d-flex hide-list ${showList === index2 ? "show-list" : ""}`}>
                                                            <span className={"p-list2"}>{value2.content}</span>
                                                            <span className={"count1"}>{value2.count}</span>
                                                        </li>
                                                    </ul>
                                                })
                                            }
                                        </ul>
                                    })
                                }
                                {
                                    value.color && value.color.map((value1, index2) => {
                                        return <ul key={index2} className={"hover-list "}>
                                            <li className={"d-flex"}>
                                                <span className={"check-box"}> {value1.checkbox} </span>
                                                {value1.name}
                                                <span className={"count"}>{value1.count}</span>
                                            </li>
                                            <li>{value1.quantity}</li>
                                        </ul>
                                    })
                                }
                                <div className={"size-box-wrapper"}>
                                    {
                                        value.size && value.size.map((value1, index2) => {
                                            return <ul key={index2}>
                                                <li className={"size-box"}>{value1.quantity}</li>
                                            </ul>
                                        })
                                    }
                                </div>
                                {
                                    value.priceSlider && value.priceSlider.map((value1, index2) => {
                                        return <div key={index2}>

                                            {value1.slider}
                                            <button className={"filter-btn"}>Apply filter</button>
                                        </div>
                                    })
                                }
                            </p>
                            <hr/>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
export default ShopCategories