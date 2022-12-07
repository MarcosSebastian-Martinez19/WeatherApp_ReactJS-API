import React from "react";

const WheaterForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWheater}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Ciudad" className="form-control mb-2" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="País" className="form-control mb-2"/>
            </div>
            <button className="btn btn-success w-100">Get Wheater</button>
        </form>
    </div>
)

export default WheaterForm;