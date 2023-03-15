import { CountryList } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./SingleCountry.css";

const SingleCountry = ({ countries, theme }: CountryList) => {
  const { country } = useParams();

  const countryData = countries.find(
    (countryName) => countryName.name === country
  );

  const languages = countryData?.languages
    ?.map((language) => language.name)
    .join(", ");

  const currencies = countryData?.currencies
    ?.map((currency) => currency.name)
    .join(", ");

  const borderCountriesFullName = countryData?.borders?.map((countryCode) => {
    return countries.find((c) => c.alpha3Code == countryCode)?.name;
  });

  return (
    <div className={`single-country ${theme}`}>
      <button
        className={theme}
        onClick={() => window.location.replace("http://localhost:3000/")}
      >
        <HiOutlineArrowNarrowLeft className={`arrow ${theme}`} />
        Back
      </button>
      <div>
        <div key={countryData?.name} className="container">
          <div>
            <img className="flag" src={countryData?.flag} alt="flag" />
          </div>
          <div>
            <h1>{countryData?.name}</h1>
            <div className="text-columns">
              <div className="first-column">
                <p>
                  Native Name:{" "}
                  <span className={theme}>{countryData?.nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span className={theme}>
                    {countryData?.population.toLocaleString()}
                  </span>
                </p>
                <p>
                  Region: <span className={theme}>{countryData?.region}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className={theme}>{countryData?.subregion}</span>
                </p>
                <p>
                  Capital:{" "}
                  <span className={theme}> {countryData?.capital}</span>
                </p>
              </div>
              <div className="second-column">
                <p>
                  Top Level Domain:{" "}
                  <span className={theme}>{countryData?.topLevelDomain}</span>
                </p>
                <p>
                  Currencies:
                  <span className={theme}> {currencies} </span>
                </p>
                <p>
                  Languages: <span className={theme}>{languages}</span>
                </p>
              </div>
            </div>
            <div>
              <p className="borders-container">
                Border Countries:
                {borderCountriesFullName?.map((borderCountry) => {
                  return (
                    <span className={`borders ${theme}`} key={borderCountry}>
                      {" "}
                      {borderCountry}{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
