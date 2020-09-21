import React, { useState } from "react"
import styled from 'styled-components'
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"
import siteConfig from "../site-config.json"

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 10px;
  
  li {
    margin-bottom: 8px;
  }
  
  button {
    background-color: #fff;
    border: 1px #d40000 solid;
    border-radius: 4px;
    color: #d40000;
    padding: 5px 10px;
    cursor: pointer;
    transition: .2s;
    
    &:hover {
      background-color: #d40000;
      color: #fff;
    }
  }
`

/* eslint-disable */
const getMailText = () => (
  <>
    <a href={'mail'+'to:'+'redark'+'pl'+'@'+'gmail'+'.com'}>{'redarkpl'+'@'+'gmail'+'.com'}</a>
  </>
)
/* eslint-enable */

const Page = () => {
  const [visible, setVisible] = useState(false)

  return(
    <Layout>
      <SEO title={"Kontakt"}/>
      <h1>Kontakt</h1>
      <PageContent>
        <h2>Dane kontaktowe</h2>
        Kontakt z osobą odpowiedzialną za rozwój serwisu możliwy jest za pomocą poczty elektronicznej lub podanych poniżej mediów społecznościowych. Wszelkie potrzebne odnośniki znajdują się poniżej:
        <List>
          {visible && <li>{getMailText()}</li>}
          {!visible && <li><button onClick={() => setVisible(true)}>(kliknij tutaj, aby pokazać adres e-mail)</button></li>}
          {
            siteConfig.social.map(item => (
              <li key={item.name}><a href={item.link} target={"_blank"} rel="noreferrer">{item.name}</a></li>
            ))
          }
        </List>
      </PageContent>
    </Layout>
  )
}

export default Page
