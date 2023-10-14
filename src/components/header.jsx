import React from "react";

const Header=()=>{
return(
    <div className="header-container">
        <nav className="header-center">
            <h2>neema deshwal</h2>
            <div className="link-container">
                <ul className="links">
                    <li className="link"><a href="#home">home</a></li>
                    <li className="link"><a href="#skill">skills</a></li>
                    <li className="link"><a href="#projects">projects</a></li>
                    <li className="link"><a href="#contact">contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
)
}

export default Header;
