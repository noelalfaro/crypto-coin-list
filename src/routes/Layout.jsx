import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li className='layout' key="home-button">
                        <button>
                            <Link to="/">Home</Link>
                        </button>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div >
    )
}
