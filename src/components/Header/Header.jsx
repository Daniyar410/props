import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const tooggleBurger = () => {
        setIsActive(!isActive)
    }

    const closeBurger = () => {
        setIsActive(false)
    }


    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header_wrap">
                        <img src="https://www.logolynx.com/images/logolynx/e1/e13e5b48044a0a7d42463701e7d9a5f6.png" alt="" className="logo" />

                        <div className={`header_menu ${isActive ? 'active' : ''}`}>
                            <a href="">Home</a>
                            <a href="">Catalog</a>
                            <a href="">Portfolio</a>
                            <a href="">Contacts</a>
                        </div>

                        <div onClick={tooggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header