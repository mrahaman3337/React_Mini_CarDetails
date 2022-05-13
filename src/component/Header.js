import React from "react";
import "../App.css";
import Photo from './Photo.png';

const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="logo">
          <div>
            <img
              src={Photo}
             /* alt="Google logo" */
            />
          </div>
          <div>
            <h3>e-Ride</h3>
          </div>
        </div>
        <nav>
          <li>
            <span>
              <a className="headerFont">Electric Cars</a>
            </span>
          </li>
          <li>
            <span>
              <a className="headerFont">Suitability Tool</a>
            </span>
          </li>
          <li>
            <span>
              <a className="headerFont">My Booking</a>
            </span>
          </li>
          <li>
            <span>
              <a>Sign out</a>
            </span>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
