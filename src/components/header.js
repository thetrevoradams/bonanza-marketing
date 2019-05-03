import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'
import Image from '../components/image'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// import Svg from './svg'

const headerStyles = css`
  position: relative;
  color: #fdfdfd;
  font-size: 18px;

  nav {
    margin: 50px;
    position: sticky;
  }

  .hero {
    text-align: center;
    background-color: #293a51;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23192d49' fill-opacity='1'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    padding: 100px;

    div {
      margin: 0 auto;
      max-width: 800px;
    }

    span {
      font-family: 'Butler', serif;
      font-weight: 500;
      line-height: 1;
      font-size: 3.2rem;
    }
  }

  @media (max-width: 700px) {
    .hero {
      padding: 50px;
      span {
        font-size: 2.7rem;
      }
    }
  }
`
const logoStyles = css`
  text-decoration: none;
  color: #245f84;

  &:hover {
    cursor: pointer;
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1;
    font-size: 1.5rem;
    margin: 0;
    margin-left: 15px;
    text-transform: uppercase;
  }
  /* transition: all 0.25s ease-in-out; */
  /* @media (max-width: 975px) {
    transform: scale(0.75, 0.75);
    margin-left: -30px;
  }
  @media (max-width: 400px) {
    transform: scale(0.65, 0.65);
    margin-left: -55px;
  }
  @media (max-width: 375px) {
    transform: scale(0.55, 0.55);
    margin-left: -70px;
  } */
`

const imgStyleOverride = css`
  height: 50px;
  width: 50px;
`

const Header = () => {
  return (
    <header css={headerStyles}>
      <nav>
        <Link to="/" css={logoStyles}>
          <div>
            <Image imgName="logo" styleOverride={imgStyleOverride} />
            <h3>Bonanza Marketing Company</h3>
          </div>
        </Link>
      </nav>
      <div className="hero">
        <div>
          <span>Your business is fire, and we are your gasoline.</span>
        </div>
      </div>
    </header>
  )
}

export default Header
