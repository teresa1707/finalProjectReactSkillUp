import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import articles from 'utils/ArticlesArray'
import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <nav className="navigation">
                    <ul className="ul">
                        <li className="li">
                            <NavLink to="/" className="nav-item">
                                home
                            </NavLink>
                        </li>
                        <li className="dropdown">
                            <a className="nav-item">Category</a>
                            <div className="dropdown-content">
                                <Link to={`/history`}>History</Link>
                                <Link to={`/art`}>Art</Link>
                                <Link to={`/science`}>Science</Link>
                            </div>
                        </li>
                        <li className="li">
                            <NavLink to="/gallery" className="nav-item">
                                gallery
                            </NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/contact" className="nav-item">
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
