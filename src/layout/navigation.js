import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import config from "../site-config.json"

const Nav = styled.nav`
  width: 100%;
  min-height: var(--menu-item-height);
  
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    display: none;
  }
  
  &.menu-open {
    display: block;
  }
`

const FirstLevelMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: var(--menu-normal-bg);
  border-bottom: 3px var(--menu-hover-bg) solid;
  display: flex;
  flex-wrap: wrap;
    
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    display: block;
    position: absolute;
    top: 63px;
    left: 0;
    height: auto;
    max-height: calc(80vh - 63px);
    overflow-y: auto;
  }
`

const FirstLevelItem = styled.li`
  flex: auto;
  position: relative;
  float: left;
  height: 100%;
  border-top: 1px var(--menu-border) solid;
  border-left: 1px var(--menu-border) solid;
  
  &:first-child { border-left: none; }

  &:hover > ul {
    display: inline;
  }

  a {
    font-family: 'Anton', sans-serif;
    font-size: 20px;
    color: var(--menu-normal-text);
    background-color: var(--menu-normal-bg);
    text-decoration: none;
    padding: 0 25px;
    display: block;
    height: 100%;
    line-height: var(--menu-item-height);
    text-align: center;
    transition: .5s;
  }
  
  a:hover {
    color: var(--menu-hover-text);
    background-color: var(--menu-hover-bg);
  }
  
  svg {
    margin-left: 8px;
  }
  
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    display: block;
    width: 100%;
    height: auto;
    border-left: none;
    
    a {
      text-align: left;
    }
    
    svg {
      display: none;
    }
  }
`

const SecondLevelMenu = styled.ul`  
  position: absolute;
  z-index: 999;
  top: var(--menu-item-height);
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    position: static;
    display: block;
  }
`

const SecondLevelItem = styled.li`
  position: relative;
  height: var(--menu-item-height);
  border-top: var(--menu-border) solid;
  border-left: 1px var(--menu-border) solid;
  border-right: 1px var(--menu-border) solid;
  
  &:first-child {
    border-top-width: 3px;
  }
  
  &:last-child {
    border-bottom: 3px var(--menu-hover-bg) solid;
  }
  
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    position: static;
    border-left: none;
    border-right: none;

    a { padding-left: 40px; }
    &:first-child { border-top-width: 1px; }
    &:last-child { border-bottom: none; }
  }
`

const MobileMenuButton = styled.div`
  @media (min-width: ${props => props.theme.compactMenuBreakpoint}) {
    display: none;
  }
  
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--main-color);
  color: #fff;
  width: var(--menu-bar-height);
  height: var(--menu-bar-height);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-left: 3px var(--menu-bar-border) solid;
`

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Nav className={menuIsOpen && 'menu-open'}>
        <FirstLevelMenu>
          {
            config.mainMenu.map(item => (
              <FirstLevelItem key={item.text}>
                <Link to={item.link}>
                  {item.text}
                  {item.hasOwnProperty("dropdown") && <FontAwesomeIcon icon={faCaretDown}/>}
                </Link>
                {
                  item.hasOwnProperty("dropdown")
                  &&
                  <SecondLevelMenu>
                    {
                      item.dropdown.map(subItem => (
                        <SecondLevelItem key={subItem.text}>
                          <Link to={subItem.link}>{subItem.text}</Link>
                        </SecondLevelItem>
                      ))
                    }
                  </SecondLevelMenu>
                }
              </FirstLevelItem>
            ))
          }
        </FirstLevelMenu>
      </Nav>
      <MobileMenuButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <FontAwesomeIcon icon={faBars} size={"2x"}/>
      </MobileMenuButton>
    </>
  )
}

export default Navigation
