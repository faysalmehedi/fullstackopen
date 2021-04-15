import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./components/Country";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);


  const handleSearchChange = (event) => setSearch(event.target.value);

  const countriesToShow = 
    search === ""
    ? [] 
    : countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase())
    );

  if (countriesToShow.length === 1) {
    return (
      <div>
        find countries <input onChange={handleSearchChange} />
        <CountryInfo country={countriesToShow[0]} />

      </div>
    );
  }

  return (
    <div>
      find countries <input onChange={handleSearchChange} />
      <div>
        {countriesToShow.length > 10 
          ? "too many matches, specify another filter"
          : countriesToShow.map((country) => (
            <div key={country.name}>
              <Country country={country}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;