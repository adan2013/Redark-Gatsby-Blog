import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"
import { Link } from "gatsby"
import ActionButton from "../typography/actionButton"

const list1 = [
  ['Chłodzenie', '/chlodzenie-komputera'],
  ['Dyski SSD M.2', '/dyski-ssd-m2'],
  ['Karty graficzne', '/karty-graficzne'],
  ['Napędy optyczne', '/napedy-optyczne'],
  ['Nośniki pamięci, dyski HDD i SSD', '/nosniki-pamieci-dyski-hdd-ssd'],
  ['Obudowy', '/obudowy-czesc-1'],
  ['Pamięci RAM', '/pamieci-ram'],
  ['Płyty główne', '/plyty-glowne-czesc-1'],
  ['Procesory', '/procesory'],
  ['Zasilacze', '/zasilacze']
]

const list2 = [
  ['Drukarki', '/drukarki'],
  ['Głośniki', '/glosniki-komputerowe'],
  ['Klawiatury', '/klawiatury'],
  ['Monitory', '/monitory-czesc-1'],
  ['Myszy', '/myszy-komputerowe-czesc-1'],
  ['Routery domowe', '/jak-wybrac-router-domowy'],
  ['Słuchawki', '/sluchawki']
]

const Page = () => (
  <Layout>
    <SEO title={"Podzespoły i urządzenia"}/>
    <h1>Podzespoły i urządzenia</h1>
    <PageContent>
      Poniżej znajduje się alfabetyczna lista wszystkich artykułów dotyczących doboru podzespołów i urządzeń. Są one częścią poradnika  składania komputera typu PC.
      <h2>Podzespoły jednostki centralnej</h2>
      <ul>
        {list1.map(item => <li key={item[0]}><Link to={item[1]}>{item[0]}</Link></li>)}
      </ul>
      <h2>Peryferia komputerowe</h2>
      <ul>
        {list2.map(item => <li key={item[0]}><Link to={item[1]}>{item[0]}</Link></li>)}
      </ul>
      <ActionButton to={'/category/podzespoly-i-urzadzenia'}>Zobacz wszystkie</ActionButton>
    </PageContent>
  </Layout>
)

export default Page
