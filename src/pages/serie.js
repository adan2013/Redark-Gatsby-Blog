import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"
import { Link } from "gatsby"

const Page = () => (
  <Layout>
    <SEO title={"Serie"}/>
    <h1>Serie</h1>
    <PageContent>
      <h2>Główne serie</h2>
      <ul>
        <li><Link to={`/category/skladanie-pc`}>Składanie PC</Link> – seria zawierająca poradniki dotyczące procesu składania własnego komputera, a także wszelkie informacje objaśniające jego budowę oraz działanie</li>
        <li><Link to={`/category/podzespoly-i-urzadzenia`}>Podzespoły i urządzenia</Link> – seria zawiera objaśnienia parametrów podzespołów komputerowych oraz artykuły pomagające w wyborze pozostałych urządzeń (nie tylko do komputera)</li>
        <li><Link to={`/kompendium-wiedzy`}>KOMPendium wiedzy</Link> – seria zawierająca artykuły przekazujące podstawową wiedzę na temat komputerów i innych urządzeń komputerowych</li>
      </ul>

      <h2>Serie poboczne</h2>
      <ul>
        <li><Link to={`/category/recenzje`}>Recenzje</Link> – seria zawierająca wszelkie recenzje produktów, które posiadam lub testowałem</li>
        <li><Link to={`/category/newsy`}>Newsy</Link> – zawiera wszystkie artykuły dotyczące aktualnych nowin ze świata IT</li>
      </ul>
    </PageContent>
  </Layout>
)

export default Page
