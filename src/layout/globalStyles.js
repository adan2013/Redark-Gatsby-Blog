import { createGlobalStyle, css } from "styled-components"

const HoverFillLinkStyle = css`
  a {
    color: color: var(--text-color);
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
    color: color: var(--text-color);
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
    --menu-bar-height: 60px;
    --menu-item-height: 45px;
  
    &.theme-light {
        --darken-bg: #f2f2f2;
        --lighten-bg: #fff;
        --main-color: #d40000;
        --text-color: #000;
        --sub-text-color: #383838;
        --theme-switch: #a0a0a0;
        --theme-switch-hover: #000;
        --menu-bar-bg: #fff;
        --menu-bar-border: #575757;
        --menu-normal-text: #000;
        --menu-normal-bg: #e0e0e0;
        --menu-hover-text: #fff;
        --menu-hover-bg: #d40000;
        --menu-border: #c4c4c4;
        --widget-bg: #e0e0e0;
        --widget-title-bg: #d40000;
        --widget-title-text: #fff;
        --widget-body-text: #000;
        --widget-hover: #cfcfcf;
        --footer-bg: #e5e5e5;
        --footer-border: #d40000;
        --footer-text: #000;
        --comments-bg: #fff;
        --image-border: #f0f0f0;
    }
    
    &.theme-dark {
        --darken-bg: #2b2b2b;
        --lighten-bg: #2f2f2f;
        --main-color: #d40000;
        --text-color: #fff;
        --sub-text-color: #cfcfcf;
        --theme-switch: #a0a0a0;
        --theme-switch-hover: #fff;
        --menu-bar-bg: #2f2f2f;
        --menu-bar-border: #444444;
        --menu-normal-text: #fff;
        --menu-normal-bg: #3c3c3c;
        --menu-hover-text: #fff;
        --menu-hover-bg: #d40000;
        --menu-border: #666666;
        --widget-bg: #2d2d2d;
        --widget-title-bg: #d40000;
        --widget-title-text: #fff;
        --widget-body-text: #fff;
        --widget-hover: #4b4b4b;
        --footer-bg: #3c3c3c;
        --footer-border: #d40000;
        --footer-text: #fff;
        --comments-bg: #d0d0d0;
        --image-border: #555555;
    }
  
    margin: 0;
    background-color: var(--darken-bg);
    font-family: "Helvetica Neue", "Helvetica", "sans-serif";
    font-size: 14px;
    color: var(--text-color);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    color: color: var(--text-color);
    ${HoverFillLinkStyle}
  }

  h1 {
    font-family: 'Anton', 'sans-serif';
    font-size: 38px;
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
