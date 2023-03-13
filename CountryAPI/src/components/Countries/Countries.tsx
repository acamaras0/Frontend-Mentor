import { CountryList } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import "./Countries.css";

const Countries = ({ countries }: CountryList) => {
  const viewCountry = (name: string) => {
    console.log(name);
  };

  return (
    <>
      {countries.map((country) => (
        <div
          key={country.name}
          className="card-container"
          onClick={() => viewCountry(country.name)}
        >
          <Link to={`/${country.name}`}>
            <img src={country.flag} alt="flag" />
          </Link>
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
