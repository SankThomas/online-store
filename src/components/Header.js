import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="bg-green-600 py-4 text-white">
        <ul className="flex flex-wrap justify-center">
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/" className="transition-colors hover:text-green-900">
              Home
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink
              to="/heels"
              className="transition-colors hover:text-green-900"
            >
              Heels
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink
              to="/dresses"
              className="transition-colors hover:text-green-900"
            >
              Dresses
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink
              to="/fashion"
              className="transition-colors hover:text-green-900"
            >
              Fashion
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink
              to="/shoes"
              className="transition-colors hover:text-green-900"
            >
              Shoes
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink
              to="/shorts"
              className="transition-colors hover:text-green-900"
            >
              Shorts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
