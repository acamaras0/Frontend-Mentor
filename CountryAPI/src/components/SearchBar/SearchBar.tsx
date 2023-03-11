import React, { useState, useEffect } from "react";
import Countries from "../Countries/Countries";
import { CountryList, Country } from "../../interfaces/interfaces";
import "./SearchBar.css";

const SearchBar = ({ countries }: CountryList) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Country[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.includes(searchTerm)
    );

    setSearchResults(results);
  }, [searchTerm, countries]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const results = countries.filter((country) =>
      country.region.includes(event.target.value)
    );
    setSearchResults(results);
  };

  return (
    <div className="search-bar">
      <div className="search-filter">
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="🔍 Search for a country..."
          />
        </div>
        <div className="filter">
          <select onChange={(event) => handleSelect(event)}>
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <Countries countries={searchResults} />
        ) : (
          <Countries countries={countries} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
