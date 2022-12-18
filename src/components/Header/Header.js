import "./header.css"

export function Header (){


    return(
        <header className="site-header">
            <div className="container">
                <div className="header-box">
                    <a className="header-box__logo" href="/public/index.html">Where in the world?</a>
                    <button onClick={(evt) => evt.target.classlist.toggle("a")} className="header-box__btn" type="submit">Dark Mode</button>
                </div>
            </div>
        </header>
    )
}