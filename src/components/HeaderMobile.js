import React from 'react';
import { Link } from 'react-router-dom';

function HeaderMobile() {
    return (
        <div id="mobile-topnav">
            <div className="burger-icon" role="button" onClick={(e) => {
                let collapsible = e.target.nextElementSibling
                let burgerIcon = e.target.firstChild
                if (collapsible.style.height !== "275px") {
                    collapsible.style.height = "275px";
                    burgerIcon.style.transform = "rotate(90deg)"
                }
                else {
                    collapsible.style.height = "0px";
                    burgerIcon.style.transform = "rotate(0deg)"
                }
                
                }}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
            
            <div id="dropdown-mobile-menu" height="0px">
                <ul>
                    <li><Link to="/">ბანერი</Link></li>
                    <li><Link to="/about_me">შესახებ</Link></li>
                    <li><Link to="/experience">გამოცდილება</Link></li>
                    <li><Link to="/projects">პროექტები</Link></li>
                    <li><Link to="/contact">კონტაქტი</Link></li>
                </ul>
                
            </div>
        </div>
    )
}

export default HeaderMobile;
