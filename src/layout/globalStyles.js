import { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.general.background};
    font-family: "Helvetica Neue", "Helvetica", "sans-serif";
    font-size: 14px;
  }
`

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

export { GlobalStyle, HoverFillLinkStyle, HoverBottomLineLinkStyle }
