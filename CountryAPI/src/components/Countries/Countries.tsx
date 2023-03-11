import { CountryList } from "../../interfaces/interfaces";
import "./Countries.css";

const Countries = ({ countries }: CountryList) => {
  return (
    <>
      {countries.map((country) => (
        <div key={country.name} className="card-container">
          <img src={country.flag} alt="flag" />
          <div className="container-content">
            <h3>{country.name}</h3>
            <p>
              Population: <span>{country.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Countries;
