import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import profileemoji from "../../../../nektech/src/assets/profile-emoji.png"
import "./Navbar.css"

class  Navbar extends Component {
    state = { clicked: false}


    render() {
        return (
            <>
                <nav className="NavbarItems">
                    <div className="nav-container">
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}</a>
                                </li>
                            )
                        })}
                        
                        <img src={profileemoji} alt="eeff" className="img-navbar" />
                        
                         </ul>
                        </div>
                   
                        
                </nav>
                <hr />
                    
                <hr />
            </>
        )
    }
}
export default Navbar;


