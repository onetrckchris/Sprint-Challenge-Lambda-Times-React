import React from 'react';
import styled, { css } from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const HeaderTitle = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  ${props =>
    props.date &&
    css`
      margin-left: 25px;
      flex: 1;
    `
  }

  ${props =>
    props.temp &&
    css`
      text-align: right;
      margin-right: 25px;
      flex: 1;
    `
  }
`;

const Header = () => {
  return (
    <HeaderStyled className="header">
      <HeaderSpan date>SMARCH 32, 2018</HeaderSpan>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderSpan temp>98°</HeaderSpan>
    </HeaderStyled>
  )
}

export default Header