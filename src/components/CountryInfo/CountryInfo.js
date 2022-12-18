import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './countryinfo.css'

function CountryInfo() {
  const [country, setCountry] = useState([])

  const { countryName } = useParams()

  const getCountryByName = async () => {
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
    getCountryByName()
  }, [countryName])

  // console.log(country.map(element => console.log(element.name.nativeName[0][0])))
  return (
    <>
      <section className="capital">
        <div className="container">
          <Link className="capital-link" to="/">
            Back
          </Link>
          {country?.map((element) => (
            <div className="capital__wrap">
              <img src={element.flags.svg} width="559" height="483"></img>
              <div>
                <h3 className="capital__title">{element.name.common}</h3>
                <div className="capital__box">
                  <div>
                    <p className="capital__native">
                      Native Name:
                      <span className="capital__native-span">
                        {element.name.official}
                      </span>
                    </p>
                    <p className="capital__population">
                      Population:
                      <span className="capital__population-span">
                        {element.population}
                      </span>
                    </p>
                    <p className="capital__region">
                      Region:
                      <span className="capital__region-span">
                        {element.region}
                      </span>
                    </p>
                    <p className="capital__subregion">
                      Sub Region:
                      <span className="capital__subregion-span">
                        {element.subregion}
                      </span>
                    </p>
                    <p className="capital__capital">
                      Capital:
                      <span className="capital__capital-span">
                        {element.capital}
                      </span>
                    </p>
                  </div>
                  <div className="capital__top-box">
                    <p className="capital__top">
                      Top Level Domain:
                      <span className="capital__top-span">
                        {element.tld.map((element) => element)}
                      </span>
                    </p>
                    <p className="capital__currencies">
                      Currencies:
                      <span className="capital__currencies-span">
                        {element.currencies[Object.keys(element.currencies)].name}
                      </span>
                    </p>
                    <p className="capital__languages">
                      Languages:
                      <span className="capital__languages-span">
                        {Object.values(element.languages)}
                      </span>
                    </p>
                  </div>
                </div>
                  <div className='capital__borders'>Border Countries: {element.borders?.map(element => <button className='capital-border'>{element}</button>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default CountryInfo
