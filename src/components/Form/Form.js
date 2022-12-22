import { t } from 'i18next'
import React, { useState } from 'react'
import "./form.css"


const Form = ({ onSearch }) => {
  const [input, setInput] = useState('')
  const submitHandler = (evt) => {
    evt.preventDefault()

    onSearch(input)
  }

  return (
    <form onKeyUp={submitHandler} className="country-form" autoComplete="off">
      <label className="country-form__label-input">
        <input
          className="country-form__input"
          type="text"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          name="search"
          placeholder={t("search")}
          aria-label="Country search"
        />
      </label>
    </form>
  )
}

export default Form
