import { CountryList } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./SingleCountry.css";

const SingleCountry = ({ countries }: CountryList) => {
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
    <div className="single-country">
      <button onClick={() => window.location.replace("http://localhost:3000/")}>
        <HiOutlineArrowNarrowLeft className="arrow" />
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
                  Native Name: <span>{countryData?.nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span>{countryData?.population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{countryData?.region}</span>
                </p>
                <p>
                  Sub Region: <span>{countryData?.subregion}</span>
                </p>
                <p>
                  Capital: <span> {countryData?.capital}</span>
                </p>
              </div>
              <div className="second-column">
                <p>
                  Top Level Domain: <span>{countryData?.topLevelDomain}</span>
                </p>
                <p>
                  Currencies:
                  <span> {currencies} </span>
                </p>
                <p>
                  Languages: <span>{languages}</span>
                </p>
              </div>
              <div>
                <p>
                  {borderCountriesFullName ? "Border Countries:" : null}
                  {borderCountriesFullName?.map((borderCountry) => {
                    return (
                      <span className="borders" key={borderCountry}>
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
    </div>
  );
};

export default SingleCountry;
