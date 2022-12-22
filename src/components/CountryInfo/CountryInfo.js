import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './countryinfo.css'
import { ThemeContext } from '../../context/ThemeContext'
import { t } from 'i18next'


function CountryInfo() {
  const {theme} = useContext(ThemeContext)
  const [country, setCountry] = useState([])

  const { countryName } = useParams()

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`,
      )
      if (!res.ok) throw new Error('Error...')
      const data = await res.json()

      setCountry(data)
    } catch (error) {
      setCountry(error)
    }
  }

  useEffect(() => {
    getCountryByName(countryName)
  }, [countryName])

  return (
    <>
      <section className={`capital  ${theme}`}>
        <div className="container">
          <Link className="capital-link" to="/">
            {t("back")}
          </Link>
          {country?.map((element) => (
            <div className="capital__wrap" key={element.name.common}>
              <img src={element.flags.svg} width="559" height="483" alt={element.name.common}></img>
              <div>
                <h3 className="capital__title">{element.name.common}</h3>
                <div className="capital__box">
                  <div>
                    <p className="capital__native">
                      {t("nativeName")}:
                      <span className="capital__native-span">
                        {element.name.official}
                      </span>
                    </p>
                    <p className="capital__population">
                      {t("population")}:
                      <span className="capital__population-span">
                        {element.population}
                      </span>
                    </p>
                    <p className="capital__region">
                      {t("region")}:
                      <span className="capital__region-span">
                        {element.region}
                      </span>
                    </p>
                    <p className="capital__subregion">
                      {t("subRegion")}:
                      <span className="capital__subregion-span">
                        {element.subregion}
                      </span>
                    </p>
                    <p className="capital__capital">
                      {t("capital")}:
                      <span className="capital__capital-span">
                        {element.capital}
                      </span>
                    </p>
                  </div>
                  <div className="capital__top-box">
                    <p className="capital__top">
                      {t("topLevelDomain")}:
                      <span className="capital__top-span">
                        {element.tld.map((element) => element)}
                      </span>
                    </p>
                    <p className="capital__currencies">
                      {t("currencies")}:
                      <span className="capital__currencies-span">
                        {element.currencies[Object.keys(element.currencies)]?.name}
                      </span>
                    </p>
                    <p className="capital__languages">
                      {t("languages")}:
                      <span className="capital__languages-span">
                        {Object.values(element.languages)}
                      </span>
                    </p>
                  </div>
              
                </div>
                  <div className='capital__borders'>{t("borderCountries")}: {element.borders?.map(element => <button className='capital-border'>{element}</button>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default CountryInfo
