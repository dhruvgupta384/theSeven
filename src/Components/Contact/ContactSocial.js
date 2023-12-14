import React from "react";

const ContactSocial = () => {
    return <div>
        <div className={"social-icons-container"}>
            <h3 className={"social-header"}>Let's get social!</h3>
            <div className={"center-wrapper"}>
                {
                    [
                        {
                            icon: <i className={"bi bi-telegram"}/>
                        },
                        {
                            icon: <i className={"bi bi-behance"}/>
                        },
                        {
                            icon: <i className={"bi bi-instagram"}/>
                        },
                        {
                            icon: <i className={"bi bi-facebook"}/>
                        },
                        {
                            icon: <i className={"bi bi-youtube"}/>
                        },
                    ].map((value, index) => {
                        return <div className={"social-icons-circle"} key={index}>
                            {value.icon}
                        </div>
                    })
                }
            </div>
        </div>

    </div>
}
export default ContactSocial