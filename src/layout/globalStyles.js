import { createGlobalStyle, css } from "styled-components"

const HoverFillLinkStyle = css`
  a {
    color: #000;
    text-decoration: none;
    padding: 2px 4px 2px 4px;
    border-bottom: 2px #d40000 solid;
    background-size: 100% 200%;
    background-image: linear-gradient(to top, #d40000 50%, transparent 50%);
    transition: .2s;

    &:hover {
      background-position: 0 100%;
      color: #fff;
      text-decoration: none;
    }
  }
`

const HoverBottomLineLinkStyle = css`
  a {
    position: relative;
    color: #000;
    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #d40000;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out 0s;
    }

    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.general.background};
    font-family: "Helvetica Neue", "Helvetica", "sans-serif";
    font-size: 14px;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    ${HoverFillLinkStyle}
  }

  h1 {
    font-family: 'Anton', 'sans-serif';
    font-size: 38px;
    color: #000;
    border-bottom: 3px #d40000 solid;
    padding: 5px;
    margin: 0;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) { font-size: 26px; }
  }
  
  h2 {
    font-size: 26px;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 5px;
    text-align: left;
  }
  
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 2px;
    text-align: left;
  }
  
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 2px;
    text-align: left;
  }
`

export { GlobalStyle, HoverFillLinkStyle, HoverBottomLineLinkStyle }
