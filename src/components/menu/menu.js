import React from 'react'
import { Link } from 'gatsby'

import './menu.css'

const Menu = () => {
  return (
    <div>
      <section className="menu__section">
        <div className="menu__content-wrapper">
          <ul className="menu">
            <li>
              <Link
                to="/"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                team
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                blog
              </Link>
            </li>
            <li>
              <Link
                to="/join"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                join
              </Link>
            </li>
          </ul>
        </div>
        <a
          className="menu__twitter-link"
          href="https://twitter.com/KarlsruheJS"
          target="blank"
        >
          <svg viewBox="0 0 62 51">
            <path
              className="menu__twitter"
              fillRule="evenodd"
              d="M62,6.0341025 C59.7180518,7.05806457 57.2695544,7.75250393 54.6969554,8.06253432 C57.3237538,6.46960185 59.3345022,3.94298749 60.2875005,0.941581392 C57.823503,2.41673925 55.1037044,3.48789324 52.2057062,4.06855904 C49.8850586,1.56153959 46.5841611,0 42.9229133,0 C35.8988691,0 30.2036735,5.76736556 30.2036735,12.8765205 C30.2036735,13.8847861 30.3160234,14.8695584 30.5330237,15.8112424 C19.9640326,15.2736649 10.5921905,10.1458524 4.31974562,2.35395348 C3.22329612,4.2529153 2.59954673,6.46560079 2.59954673,8.82755638 C2.59954673,13.2963234 4.84664517,17.2393109 8.2560429,19.5461751 C6.17164407,19.4755924 4.21124544,18.8949266 2.49499754,17.9297492 L2.49499754,18.0906121 C2.49499754,24.3287684 6.88069425,29.535063 12.695939,30.7199906 C11.6304896,31.0103235 10.506991,31.1711864 9.34469174,31.1711864 C8.52339301,31.1711864 7.72914335,31.0888057 6.95039371,30.9318413 C8.56979178,36.0518568 13.265489,39.7750941 18.828985,39.8771723 C14.478138,43.3297742 8.99214214,45.3816994 3.03354744,45.3816994 C2.0068987,45.3816994 0.995648686,45.3189136 0,45.20514 C5.6293458,48.8656941 12.3124907,51 19.4953848,51 C42.8921158,51 55.6811563,31.3752401 55.6811563,14.3556794 L55.6385059,12.6882658 C58.1373532,10.88338 60.2991508,8.6157057 62,6.0341025 Z"
            />
          </svg>
        </a>
      </section>
    </div>
  )
}

export default Menu
