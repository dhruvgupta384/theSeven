import React from "react";

const ContactForm = () => {
    return <div className={"form-container container"}>
        <h3 className={"form-header"}>Send us a message</h3>
        <div className={"center-wrapper"}>
            <form>
                <div className={"row"}>
                    <div className={"col"}>
                        <label htmlFor="name">Name</label>
                        <i className="bi bi-asterisk"/>
                        <input type="name" className="form-control  center-wrapper-form-control"/>
                    </div>
                    <div className={"col"}>
                        <label htmlFor="number">Phone</label>
                        <input type="number" className="form-control  center-wrapper-form-control"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="Textarea">Message</label>
                    <textarea className="form-control center-wrapper-form-control" rows="7"/>
                </div>
                <button type="submit" className="form-button">Send Message</button>
            </form>
        </div>
    </div>
}
export default ContactForm