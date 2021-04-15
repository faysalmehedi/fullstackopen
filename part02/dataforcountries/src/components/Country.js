import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ country }) => {
    const [show, setShow] = useState(false);
    
    const handleShowClick = () => setShow(!show);

    if (show) {
        return (
            <div>
                {country.name}{" "}
                <button onClick={handleShowClick}>{show ? "Hide" : "show" }</button>
                <CountryInfo country={country} />
            </div>
        );
    }

    return (
        <div>
            {country.name}{" "}
            <button onClick={handleShowClick}>{show ? "Hide" : "Show"}</button>
        </div>
    );
};

export default Country;