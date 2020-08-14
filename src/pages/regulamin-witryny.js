import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"
import { Link } from "gatsby"

const Page = () => (
  <Layout>
    <SEO title={"Regulamin witryny"}/>
    <h1>Regulamin witryny</h1>
    <PageContent>
      Korzystanie z serwisu jest równoznaczne z akceptacją postanowień zawartych w <Link to="/regulamin-witryny">regulaminie</Link>, a także oznacza wyrażenie zgody na przetwarzanie danych osobowych na warunkach opisanych w <Link to="/polityka-prywatnosci">polityce prywatności</Link>.

      <h2>Postanowienia ogólne</h2>
      <ol>
        <li>Niniejszy regulamin określa zasady funkcjonowania oraz warunki korzystania z serwisu internetowego o nazwie "REDARK"</li>
        <li>Witryna "REDARK" dostępna jest pod adresem <Link to="/">www.redark.pl</Link></li>
        <li>Administratorem oraz głównym redaktorem treści publikowanych na tej witrynie jest Daniel Alberski posługujący się nickiem "adan2013"</li>
        <li>Regulamin obejmuje każdego odwiedzającego witrynę, Użytkownik zobowiązany jest do przestrzegania wszystkich postanowień w nim zawartych</li>
        <li>Administrator zastrzega sobie prawo do dokonywania zmian w treści tego regulaminu</li>
        <li>Regulamin serwisu jest dostępny pod adresem <Link to="/regulamin-witryny/">www.redark.pl/regulamin-witryny/</Link></li>
      </ol>

      <h2>Prawa autorskie</h2>
      <ol>
        <li>Źródła zdjęć i multimediów umieszczanych w artykułach są podawane poniżej ich zamieszczenia</li>
        <li>Multimedia posiadające znak wodny serwisu "REDARK" pochodzą z prywatnego archiwum twórcy</li>
        <li>Osoba rozpowszechniająca materiały dostępne na stronach tej witryny zobowiązana jest do zamieszczenia informacji o źródle tych materiałów</li>
        <li>Osoba zamieszczająca komentarz na stronie serwisu oświadcza, że posiada wszelkie prawa do publikowania treści zawartych w tym komentarzu i zobowiązuje się do brania odpowiedzialności za nie</li>
      </ol>

      <h2>Odpowiedzialność użytkownika</h2>
      <ol>
        <li>Użytkownik ma prawo do przeglądania treści i zasobów udostępnionych przez administratora serwisu</li>
        <li>Użytkownik zobowiązany jest do zgłaszania wszelkich nielegalnych praktyk i zasobów łamiących prawa zawarte w tym regulaminie</li>
        <li>Wszelkie próby ataku na techniczną część funkcjonowania serwisu takie jak ataki brute force lub DDos są surowo zabronione, a osoba odpowiedzialna za ich przeprowadzenie zostaje permanentnie zablokowana oraz może liczyć się z prawną konsekwencją za swój czyn</li>
        <li>Administrator zastrzega sobie prawo do blokowania dostępu do serwisu osobom, które nagminnie łamały postanowienia zawarte w tym regulaminie</li>
        <li>Blokowanie dostępu omówione w punkcie nr 4 nie musi być uzasadniane</li>
        <li>Administrator zastrzega sobie prawo do podjęcia działań prawnych w przypadku wykrycia celowego działania na szkodę serwisu, a także do udostępnienia danych atakującego organom ścigania</li>
      </ol>

      <h2>Publikowanie komentarzy</h2>
      <ol>
        <li>Osoba publikująca komentarz pod artykułem zamieszczonym na tym serwisie zobowiązana jest do przestrzegania zasad omówionych w tym podrozdziale</li>
        <li>Złamanie tych zasad będzie skutkowało usunięciem komentarza, a w przypadku nagminnego łamania zasad administrator może zablokować autorowi komentarzy dostęp do serwisu</li>
        <li>
          W komentarzach zabrania się:
          <ul>
            <li>stosowania wulgaryzmów</li>
            <li>obrażania godności, poglądów politycznych i religijnych innych osób</li>
            <li>wszelkich form szantażu</li>
            <li>nagminnego łamania zasad pisowni i interpunkcji języka polskiego</li>
            <li>publikowania reklamy bez zgody administratora</li>
            <li>rozprowadzania spamu</li>
          </ul>
        </li>
      </ol>

      <h2>Wyłączenie odpowiedzialności</h2>
      <ol>
        <li>Administrator zastrzega sobie prawo do czasowego wyłączenia dostępu do serwisu (tryb konserwacji) oraz do zamknięcia serwisu bez uprzedniego zawiadomienia użytkowników</li>
        <li>Administrator nie ponosi odpowiedzialności za działanie użytkowników oraz partnerów serwisu</li>
        <li>Administrator nie ponosi odpowiedzialności za szkody wyrządzone przez osoby omówione w punkcie nr 2</li>
      </ol>

      <h2>Postanowienia końcowe</h2>
      <ol>
        <li>Niniejszy regulamin zaczyna obowiązywać z chwilą ogłoszenia go w serwisie</li>
        <li>Regulamin obejmuje wszystkich użytkowników serwisu</li>
        <li>Regulamin ostatnio został zmodyfikowany dnia 21 stycznia 2019 roku</li>
      </ol>
    </PageContent>
  </Layout>
)

export default Page
