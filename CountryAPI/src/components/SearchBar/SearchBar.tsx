import React, { useState, useEffect } from "react";
import Countries from "../Countries/Countries";
import { CountryList, Country } from "../../interfaces/interfaces";
import "./SearchBar.css";

const SearchBar = ({ countries, theme }: CountryList) => {
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
        <div className={`search-bar ${theme}`}>
          <input
            className={theme}
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder=" Search for a country..."
          />
          <svg
            aria-hidden="true"
            className={`search-icon ${theme}`}
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
          </svg>
        </div>
        <div className="filter">
          <select className={theme} onChange={(event) => handleSelect(event)}>
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
          <Countries countries={searchResults} theme={theme} />
        ) : (
          <Countries countries={countries} theme={theme} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
