import React, { useEffect, useState } from 'react'
import './allcountries.css'
import Form from '../Form/Form'
import SelectCountry from '../Form/SelectCountry'
import { Link } from 'react-router-dom'
import { ThemeContext} from '../../context/ThemeContext'
import { useContext } from 'react'
import { t } from 'i18next'

const AllCountries = () => {
  const {theme} = useContext(ThemeContext)
  const [data, setData] = useState({
    loading: true,
    data: [],
    isError: false,
  })

  const getAllCountries = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()

      if (!res.ok) throw new Error('Wrong search...')
      setData({
        loading: false,
        data: data,
        isError: false,
      })
    } catch (error) {
      setData({
        loading: false,
        data: [],
        isError: true,
      })
    }
  }

  const getCountryByname = async (countryName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`,
      )

      if (!res.ok) throw new Error('Not found any country!')

      const data = await res.json()

      setData({
        loading: false,
        data: data,
        isError: false,
      })
    } catch (error) {
      setData({
        loading: false,
        data: [],
        isError: true,
      })
    }
  }

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${regionName}`,
      )
      if (!res.ok) throw new Error('Not found this region!')

      const data = await res.json()

      setData({
        loading: false,
        data: data,
        isError: false,
      })
    } catch (error) {
      setData({
        loading: false,
        data: [],
        isError: true,
      })
    }
  }
  useEffect(() => {
    getAllCountries()
  }, [])

  return (
    <>
      <section className={`${theme} country`}>
        <div className="container">
          <div className="form-box">
            <Form onSearch={getCountryByname} />
            <SelectCountry onSelect={getCountryByRegion} />
          </div>
          <ul className="country-list">
            {data.loading && <h1>Loading...</h1>}
            {data.isError && <h1>Error...</h1>}
            {data.data &&
              data.data?.map((element) => (
                <Link to={`/country/${element.name.common}`} key={element.name.common}>
                  <li className="country-list__item" >
                    <img
                      className="country-list__img"
                      src={element.flags.svg}
                      width="264"
                      height="160"
                      alt={element.name.common}
                    ></img>
                    <div className="country-list__box">
                      <h3 className="country-list__title">
                        {element.name.common}
                      </h3>
                      <p className="country-list__population">
                        {t("population")}:
                        <span className="country-list__population-span">
                          {element.population}
                        </span>
                      </p>
                      <p className="country-list__region">
                        {t("region")}:
                        <span className="country-list__region-span">
                          {element.region}
                        </span>
                      </p>
                      <p className="country-list__capital">
                        {t("capital")}:
                        <span className="country-list__capital-span">
                          {element.capital}
                        </span>
                      </p>
                    </div>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default AllCountries
