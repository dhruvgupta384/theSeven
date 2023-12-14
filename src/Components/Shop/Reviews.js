import React from "react";

const Reviews = () => {
    return <div>
        <div className={"container1 review-container"}>
            <div className={"reviews-left"}>
                <h5>Reviews</h5>
                <p className={"review-text"}>There are no reviews yet.</p>
            </div>
            <div className={"reviews-right"}>
                <h5>Be the first to review “Basic brown cotton t-shirt”</h5>
                <p className={"review-text"}>
                    Your email address will not be published. Required fields are marked
                    <span className={"color"}> *</span>
                </p>
                <h6>Your Rating   <span className={"color"}> &nbsp;*  &nbsp;</span>
                    <i className={"bi bi-star"}/>
                    <i className={"bi bi-star"}/>
                    <i className={"bi bi-star"}/>
                    <i className={"bi bi-star"}/>
                    <i className={"bi bi-star"}/>
                </h6>
                <div>
                    <form>
                        <div className={"row"}>
                            <div className={"col"}>
                                <label htmlFor="name">Name</label>
                                <span className={"color"}> &nbsp;*  &nbsp;</span>
                                <input className="form-control" type="name" placeholder={"Name"}/>
                            </div>
                            <div className={"col"}>
                                <label htmlFor="email">Email</label>
                                <span className={"color"}> &nbsp;*  &nbsp;</span>
                                <input className="form-control" type="email" placeholder={"Email"}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Textarea">Message</label>
                            <span className={"color"}> &nbsp;*  &nbsp;</span>
                            <textarea className="form-control" rows="7" placeholder={"Message"}/>
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input " type="checkbox" value="" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Save my name, email, and website in this browser for the next time I
                                comment.
                            </label>
                        </div>
                        <button type={"submit"} className={"form-button2"}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <hr/>
    </div>
}
export default Reviews