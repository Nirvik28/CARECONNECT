import React from "react";

export const Header = ({ brand = "CARECONNECT", links }) => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Brand name */}
        <a className="navbar-brand" href="/">
          {brand}
        </a>

        {/* Navigation links */}
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Search form */}
        <form className="search-form" role="search">
          <input
            className="search-input"
            type="search"
            placeholder="Search doctors, services..."
            aria-label="Search"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
