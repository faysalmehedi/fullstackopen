import React from "react";


const CountryInfo = ({ country, weatherData }) => {
    return (
    <div>
        <h2>Name: {country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages: </h3>
        <ul>
            {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} width="300" alt={`${country.name} flag`} />
    </div>
    )
};

export default CountryInfo;