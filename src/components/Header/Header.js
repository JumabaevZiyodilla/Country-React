import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "../../context/ThemeContext"
import "./header.css"

export function Header() {
  const { theme, setTheme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const [themedarks, setThemedarks] = useState("themedark")
  const btnTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    setThemedarks(themedarks === " themelight" ? "themedark" : "themelight")
  }
  return (
    <header className={`site-header ${theme}`}>
      <div className="container">
        <div className="header-box">
          <a className="header-box__logo" href="/public/index.html">
            {t("logo")}
          </a>
          <div className="header-select-box">
            <select
              className="header-select"
              defaultValue={i18n.language}
              onChange={(e) => {
                localStorage.setItem("lang", e.target.value)
                i18n.changeLanguage(e.target.value)
              }}
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
            <button
              onClick={btnTheme}
              className="header-box__btn"
              type="submit"
            >
              {t(themedarks)}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
