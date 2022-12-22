import "./assets/css/main.css"
import { Header } from "./components/Header"
import AllCountries from "./components/AllCountries/AllCountries"
import CountryInfo from "./components/CountryInfo/CountryInfo"
import { Routes, Route } from "react-router-dom"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { Languages } from "./Language/Language"

function App() {
  // const [theme]
  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang") || "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: Languages.en },
      uz: { translation: Languages.uz },
      ru: { translation: Languages.ru },
    },
  })
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />}></Route>
        <Route path="/country/:countryName" element={<CountryInfo />}></Route>
      </Routes>
    </>
  )
}

export default App
