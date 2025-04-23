import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"
import siteConfig from "../site-config.json"

const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    align-items: stretch;
    flex-direction: column;
  }
`

const AboutMeImageColumn = styled.div`
  flex: 2;
  max-width: 380px;
`

const AboutMeTextColumn = styled.div`
  flex: 3;
  margin: 8px;
`

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
    transition: 0.2s;

    &:hover {
      background-color: #d40000;
      color: #fff;
    }
  }
`

/* eslint-disable */
const getMailText = () => (
  <>
    <a href={"mail" + "to:" + "redark" + "pl" + "@" + "gmail" + ".com"}>
      {"redarkpl" + "@" + "gmail" + ".com"}
    </a>
  </>
)
/* eslint-enable */

const Page = ({ data }) => {
  const [visible, setVisible] = useState(false)

  return (
    <Layout>
      <SEO title={"Kontakt"} />
      <h1>Kontakt</h1>
      <PageContent>
        <h2>O mnie</h2>
        <AboutMeContainer>
          <AboutMeImageColumn>
            <Image
              fluid={data.file.childImageSharp.fluid}
              alt={"autor redark.pl"}
            />
          </AboutMeImageColumn>
          <AboutMeTextColumn>
            Cześć, nazywam się Daniel Alberski. Interesuję się elektroniką oraz
            programowaniem. Obecnie moją główną pasją jest druk 3D oraz projekty
            DIY. Redark jest miejscem, gdzie mogę rozwijać swoje pasje i dzielić
            się swoją wiedzą z innymi. Publikuję poradniki, testy urządzeń i
            narzędzi, a także dokumentuję własne projekty krok po kroku.
            Wcześniej blog skupiał się na tematyce komputerowej – składaniu,
            naprawie sprzętu oraz recenzjach elektroniki i gier.
          </AboutMeTextColumn>
        </AboutMeContainer>
        <h2>Kontakt i współpraca</h2>
        Kontakt możliwy za pomocą poczty elektronicznej lub portali
        społecznościowych podanych poniżej.
        <List>
          {visible && <li>{getMailText()}</li>}
          {!visible && (
            <li>
              <button onClick={() => setVisible(true)}>
                (kliknij tutaj, aby odsłonić adres e-mail)
              </button>
            </li>
          )}
          {siteConfig.social.map(item => (
            <li key={item.name}>
              <a href={item.link} target={"_blank"} rel="noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </List>
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "autor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 380, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Page
