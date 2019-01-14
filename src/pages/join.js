import React from 'react'
import Layout from '../components/layout/layout'

import './join.css'

const JoinPage = () => (
  <Layout>
    <h1 className="title">Join</h1>
    <section className="join__content-wrapper">
      <p className="join__content">
        If you’d like to join the KarlsruheJS family, feel free to DM us on
        Twitter @karlsruhejs.
      </p>
      <a
        className="join__button"
        href="https://www.meetup.com/karlsruhejs/"
        target="blank"
      >
        <svg
          className="join__arrow"
          width="20px"
          height="23"
          viewBox="0 0 32 23"
        >
          <path
            fill="#4A4A4A"
            fillRule="evenodd"
            d="M21.205,7.333 C20.776,6.889 20.062,6.889 19.618,7.333 C19.189,7.762 19.189,8.476 19.618,8.904 L27.665,16.951 L1.111,16.951 C0.492,16.952 0,17.444 0,18.063 C0,18.682 0.492,19.19 1.111,19.19 L27.665,19.19 L19.618,27.222 C19.189,27.666 19.189,28.381 19.618,28.809 C20.062,29.253 20.777,29.253 21.205,28.809 L31.157,18.857 C31.601,18.428 31.601,17.714 31.157,17.286 L21.205,7.333 Z"
            transform="translate(0 -7)"
          />
        </svg>
        Next Meetup
      </a>
    </section>
  </Layout>
)

export default JoinPage
