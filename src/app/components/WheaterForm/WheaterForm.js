import React from "react";
import "./WheaterForm.css";

const WheaterForm = props => (
    <div className="container-form">
        <form onSubmit={props.getWheater}>
            <div class="search-wrapper">
                <input class="search-input" type="text" name="city" placeholder="Ciudad" autoFocus />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                    </svg>
            </div>
            <div class="search-wrapper">
                <input class="search-input" type="text" name="country" placeholder="País" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                        <defs></defs>
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                    </svg>
            </div>
            <button class="form__button button submit">Obtener Clima</button>
        </form>
    </div>
)

export default WheaterForm;