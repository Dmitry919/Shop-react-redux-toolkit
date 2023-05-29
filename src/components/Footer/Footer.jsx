import React from 'react'
import { Link } from 'react-router-dom'

import styles from "../../styles/Footer.module.css"
import { ROUTES } from '../../utils/routes'
import logo from "../../images/logo1.svg"

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="stuff" />
          </Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a href='https://github.com/Dmitry919' target="_blank" rel="noreferrer">
          Shaminko
        </a>
      </div>

      <div className={styles.socials}>
        <a href='#' target="_blank" rel="noreferrer">
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
          </svg>
        </a>

        <a href='#' target="_blank" rel="noreferrer">
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
          </svg>
        </a>

        <a href='#' target="_blank" rel="noreferrer">
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
          </svg>
        </a>
      </div>
  </section>
)

export default Footer