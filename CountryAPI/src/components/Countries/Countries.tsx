import { CountryList } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import "./Countries.css";

const Countries = ({ countries, theme }: CountryList) => {
  return (
    <>
      {countries.map((country) => (
        <div key={country.name} className={`card-container ${theme}`}>
          <Link to={`/${country.name}`}>
            <img src={country.flag} alt="flag" />
          </Link>
          <div className="container-content">
            <h3>{country.name}</h3>
            <p>
              Population:{" "}
              <span className={theme}>
                {country.population.toLocaleString()}
              </span>
            </p>
            <p>
              Region: <span className={theme}>{country.region}</span>
            </p>
            <p>
              Capital: <span className={theme}>{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Countries;
