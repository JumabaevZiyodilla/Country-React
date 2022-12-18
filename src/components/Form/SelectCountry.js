import React from 'react'

const SelectCountry = ({onSelect}) => {

    const selectHandler = (evt) => {
        const regionName = evt.target.value;
        onSelect(regionName);
    }
  return (
    <select onChange={selectHandler} className="country-form__select">
      <option>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctic">Antarctic</option>
    </select>
  )
}

export default SelectCountry;
