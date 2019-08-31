import React from 'react'
import data from '../../data.json'
import styled from 'styled-components'

import logo from '../img/sustainabilitylogo.png'

const StyledHeader = styled.header`
  font-family: 'Oswald';
  height: 86px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  * {
    font-weight: 400;
  }
  h1 {
    font-size: 22px;
    color: #004566;
  }
  a {
    text-decoration: none !important;
  }
  img {
    height: 29px;
    width: 56px;
    margin-bottom: 6px;
    margin-right: 8px;
  }

  @media only screen and (max-width: 850px) {
    justify-content: center;
    img { display: none; }
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <img src={logo} alt={"SFUSD Sustainability Logo"} />
      <a href={props.url || data.homeUrl}>
        <h1>{props.title || data.name}</h1>
      </a>
    </StyledHeader>
  )
}

export default Header
