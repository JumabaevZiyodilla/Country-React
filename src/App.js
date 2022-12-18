import './assets/css/main.css'
import { Header } from './components/Header'
import AllCountries from './components/AllCountries/AllCountries'
import CountryInfo from './components/CountryInfo/CountryInfo'
import { Routes, Route } from 'react-router-dom'

function App() {
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
