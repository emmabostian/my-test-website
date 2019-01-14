import React from 'react'
import Layout from '../components/layout/layout'

import logo from '../images/js-logo.svg'

const IndexPage = () => (
  <Layout>
    <section
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <img
        src={logo}
        alt="Karlsruhe JS"
        style={{
          height: '250px',
        }}
      />
      <h4
        style={{
          color: '#4a4a4a',
          fontWeight: '400',
          fontSize: '1.5em',
          margin: '20px 30px',
          textAlign: 'center',
        }}
      >
        The meetup for JavaScript lovers in Karlsruhe.
      </h4>
      <h1
        style={{
          fontSize: '3em',
          color: '#4a4a4a',
          margin: '0 30px',
        }}
      >
        KarlsruheJS
      </h1>
    </section>
  </Layout>
)

export default IndexPage
