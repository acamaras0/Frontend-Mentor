import { CountryList } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";
import "./SingleCountry.css";

const SingleCountry = ({ countries }: CountryList) => {
  const { country } = useParams();

  const countryData = countries.filter((countryData) => {
    return countryData.name === country;
  });

  const languages = countryData.map((country) => {
    return country.languages?.map((language) => language.name).join(", ");
  });

  const borders = countryData.map((country) => {
    return country.borders?.join(",");
  });

  const borderCountriesFullName = countries.filter((country) => {
    return borders.some((border) => border?.includes(country.alpha3Code));
  });

  return (
    <div>
      <button>Back</button>
      <div>
        {countryData.map((country) => (
          <div key={country.name} className="container">
            <div>
              <img className="flag" src={country.flag} alt="flag" />
            </div>
            <div>
              <h3>{country.name}</h3>
              <p>
                Native Name: <span>{country.nativeName}</span>
              </p>
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
              <p>
                Top Level Domain: <span>{country.topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                {country.currencies?.map((currency) => (
                  <span key={currency.name}>{currency.name} </span>
                ))}
              </p>
              <p>
                Languages: <span>{languages}</span>
              </p>
              <p>
                Borders:{" "}
                {borderCountriesFullName.map((borderCountry) => (
                  <span key={borderCountry.name}>{borderCountry.name} </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCountry;
