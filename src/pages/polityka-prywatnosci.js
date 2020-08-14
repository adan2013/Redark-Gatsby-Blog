import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"
import { Link } from "gatsby"

const Page = () => (
  <Layout>
    <SEO title={"Polityka prywatności"}/>
    <h1>Polityka prywatności</h1>
    <PageContent>
      Korzystanie z serwisu jest równoznaczne z akceptacją postanowień zawartych w <Link to="/regulamin-witryny">regulaminie</Link>, a także oznacza wyrażenie zgody na przetwarzanie danych osobowych na warunkach opisanych w <Link to="/polityka-prywatnosci">polityce prywatności</Link>.

      <h2>Kim jesteśmy</h2>
      Witryna dostępna jest pod adresem <Link to="/">www.redark.pl</Link>, autorem i głównym redaktorem artykułów publikowanych w witrynie jest Daniel Alberski posługujący się pseudonimem "adan2013". Kontakt możliwy za pośrednictwem adresu mailowego oraz mediów społecznościowych wymienionych <Link to="/kontakt/">w zakładce "Kontakt"</Link>.

      <h2>Jakie dane zbieramy i dlaczego je zbieramy</h2>
      Wszelkie dane zbierane przez witrynę internetową służą tylko i wyłącznie do zapewnienia prawidłowego działania witryny. Są to m.in. pliki cookies (małe pliki tekstowe przechowywane na komputerze użytkownika) przechowujące dane wymagane do prawidłowego działania Wordpressa (systemu CMS, na którym postawiona jest witryna) oraz rozszerzeń w nim zainstalowanych. Drugim typem danych przechowywanych na serwerze są anonimowe dane statystyczne (dzięki nim możliwy jest dalszy rozwój treści oraz wykrywanie tematów o których chcieliby przeczytać użytkownicy) oraz dane niezbędne do zachowania bezpieczeństwa witryny, które zostaną dokładniej omówione w dalszej części tego dokumentu.

      <h2>Komentarze umieszczane pod artykułami</h2>
      System komentarzy obsługiwany jest przez witrynę Disqus dostępną pod adresem <a href="https://disqus.com/">www.disqus.com</a> . Wszelkie dane wprowadzone w formularzu i udostępniane w komentarzach są przetwarzane na zasadach polityki prywatności tejże witryny. Osoba umieszczająca komentarz pod artykułem zezwala na:
      <ul><li>umieszczenie pliku cookies niezbędnego do obsługi formularza dodawania komentarzy</li><li>przechowywanie podanych w formularzu danych na dysku serwera</li><li>zarejestrowanie adresu IP komputera oraz tzw. "user agent'a" przeglądarki z której dodano komentarz, ma to na celu zapewnienie ochrony serwisu przed spamem i niepożądanymi treściami</li><li>przetwarzanie danych przez Disqus</li></ul>

      <h2>Formularze kontaktowe</h2>
      Kontakt z autorem artykułów jest możliwy poprzez skrzynkę mailową oraz media społecznościowe. Dane przekazywane w konwersacjach nie są udostępniane innym osobom lub usługom zewnętrznym, chyba że użytkownik zdecydował inaczej. Historia przesyłanych wiadomości jest przechowywana możliwie bezterminowo.

      <h2>Ciasteczka (technologia cookies)</h2>
      Oto lista plików cookies mogących pojawić się na komputerze klienta:
      <ul><li>plik zapamiętujący zamknięcie komunikatu o regulaminie i polityce prywatności</li><li>plik Wordpressa zapamiętujący nazwę i mail autora ostatnio napisanego komentarza, ma to na celu automatyzację procesu wprowadzania danych do formularza komentarzy</li><li>plik testowy Wordpressa służący do detekcji włączenia obsługi plików cookies w przeglądarce użytkownika</li><li>pliki służące do obsługi procesu logowania do zaplecza witryny (opcja niedostępna dla zwykłych odwiedzających)</li><li>pliki identyfikatorów usług Google</li></ul>

      <h2>Osadzone treści z innych witryn</h2>
      W treści artykułów mogą zostać osadzone treści pochodzące z innych witryn i portali społecznościowych. Osadzone dane podlegają regulacjom prawnym, które zawarte są w witrynie z której pochodzą. Takie treści pochodzące z innych witryn mogą umieszczać dodatkowe pliki cookies na komputerze użytkownika. Odpowiedzialność za nie pozostaje po stronie, która je utworzyła.

      <h2>Analiza statystyk</h2>
      Witryna korzysta z usługi Google Search Console oraz Google Analytics. Są to usługi zbierające anonimowe dane statystyczne pomagające w rozwoju i pozycjonowaniu witryny w Internecie. Są to m.in. płeć, przybliżony wiek czy grupa zainteresowań odwiedzającego.
      W przypadku braku zgody użytkownika na zbieranie przez Google danych statystycznych oraz na dobieranie spersonalizowanych reklam użytkownik powinien zmienić ustawienia reklam w obrębie swojego konta Google lub zastosować wtyczkę blokującą działanie usługi Google Analytics, która dostępna jest <a href="https://tools.google.com/dlpage/gaoptout/">pod tym adresem</a>.

      <h2>Z kim dzielimy się danymi</h2>
      Witryna udostępnia jedynie dane niezbędne do prawidłowego działania usług i witryn opisanych w tym dokumencie. Należy zaznaczyć, iż podobne dane może zbierać dostawca usług hostingowych (w tym przypadku jest to: <a href="https://atthost.pl/">www.atthost.pl</a> ) oraz Twój dostawca usług internetowych.

      <h2>Jak długo przechowujemy twoje dane</h2>
      Dane pozostawione przez użytkownika są przechowywane przez serwer przez okres czasu określony w tym dokumencie. Niektóre dane takie jak np. komentarze przechowywane są bezterminowo.

      <h2>Jakie masz prawa do swoich danych</h2>
      Każdy użytkownik, który pozostawił na tej witrynie jakiekolwiek dane, ma prawo do trwałego wymazania ich z serwerów hostingu witryny. Nie dotyczy to anonimowych danych statystycznych, a także danych potrzebnych do zachowania bezpieczeństwa witryny. Są to m.in. adresy IP komputerów, z których usiłowano zaatakować witrynę lub publikowano z nich wiadomości niezgodne z regulaminem (w tym spam).

      <h2>Gdzie przesyłamy dane</h2>
      Gromadzone dane przesyłane są na serwery usługodawców omawianych w tym dokumencie. Za przechowywanie danych odpowiadają serwery dostawcy usług hostingowych AttHost.

      <p style={{marginTop: '20px'}}>
        <b>Data aktualizacji dokumentu: 10 lipca 2019 r.</b>
      </p>
    </PageContent>
  </Layout>
)

export default Page
