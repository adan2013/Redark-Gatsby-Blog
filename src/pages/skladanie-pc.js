import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"
import { Link } from "gatsby"
import InfoBlock from "../typography/infoBlock"

const list = [
  {
    title: 'Rozdział I. Trochę teorii',
    items: [
      ['Komputer w różnej formie. Jakie są alternatywy dla klasycznego peceta?', '/komputer-w-roznej-formie'],
      ['Z czego składa się stanowisko komputerowe? Elementy podstawowe i dodatkowe', '/elementy-stanowiska-komputerowego'],
      ['Kablologia: przewody wewnątrz jednostki centralnej', '/kablologia-przewody-jednostki-centralnej'],
      ['Kablologia: jak połapać się w pajęczynie kabli za biurkiem', '/kablologia-pajeczyna-za-biurkiem'],
      ['Kablologia: złącza USB', '/kablologia-zlacza-usb'],
      ['Anatomia jednostki centralnej. Co za co odpowiada?', '/budowa-i-dzialanie-komputera']
    ]
  },
  {
    title: 'Rozdział II. Planowanie konfiguracji sprzętowej',
    items: [
      ['Do czego potrzebny jest mi komputer? Określanie potrzeb i wymagań', '/okreslanie-potrzeb-i-wymagan'],
      ['Wnętrze obudowy – tyle tam tego, czyli od czego zacząć dobierać podzespoły', '/od-czego-zaczac-dobieranie-podzespolow'],
      ['By wszystko do siebie pasowało, czyli sprawdzamy kompatybilność podzespołów', '/jak-sprawdzic-kompatybilnosc-podzespolow-komputera']
    ]
  },
  {
    title: 'Rozdział III. Montaż komputera',
    editionsMessage: true,
    subTitle: 'Edycja 2020 - procesor AMD, gaming PC',
    items: [
      ['Nie rób tego na kolanie! Tworzymy domowe stanowisko monterskie', '/skladanie-pc-tworzymy-stanowisko-monterskie']
    ],
    wipMessage: true
  },
  {
    subTitle: 'Edycja 2014 - procesor Intel, jednostka biurowa (budżetowa), obudowa mini tower',
    items: [
      ['Nie rób tego na kolanie! Tworzymy domowe stanowisko monterskie', '/skladanie-pc-tworzymy-stanowisko-monterskie'],
      ['Składanie PC: Przygotowujemy obudowę i płytę główną', '/skladanie-pc-przygotowujemy-obudowe-i-plyte-glowna'],
      ['Składanie PC: Montaż procesora wraz z chłodzeniem', '/skladanie-pc-montaz-procesora-i-chlodzenia'],
      ['Składanie PC: Instalujemy kości pamięci RAM', '/skladanie-pc-instalujemy-kosci-pamieci-ram'],
      ['Składanie PC: Montaż zasilacza i płyty głównej w obudowie', '/skladanie-pc-montaz-zasilacza-i-plyty-glownej'],
      ['Składanie PC: Dokładamy dyski na dane, kartę graficzną oraz napęd optyczny', '/skladanie-pc-dyski-karta-graficzna-naped-optyczny'],
      ['Składanie PC: Podłączanie i układanie kabli w obudowie', '/skladanie-pc-podlaczanie-i-ukladanie-kabli-w-obudowie']
    ]
  },
  {
    title: 'Rozdział IV. Testy i konfiguracja maszyny',
    items: [
      ['Pierwsze uruchomienie. Uda się czy nie? Diagnostyka awarii', '/pierwsze-uruchomienie-komputera-diagnostyka-awarii'],
      ['Windows kontra Linux. Jaki system operacyjny wybrać?', '/windows-konta-linux-jaki-system-operacyjny-wybrac'],
      ['Instalacja systemów Windows oraz Linux krok po kroku', '/instalacja-systemow-windows-oraz-linux-krok-po-kroku']
    ]
  }
]

const Page = () => (
  <Layout>
    <SEO title={"Składanie PC"}/>
    <h1>Składanie PC</h1>
    <PageContent>
      <h2>Wstęp</h2>
      <h3>Poradnik składania PC. Nie za dużo tego w Internecie?</h3>
      Chcę stworzyć taki poradnik, żeby podzielić się swoją wiedzą oraz dlatego, że nie znalazłem w Internecie polskiej strony, która dogłębnie tłumaczyłaby proces montażu komputera. Wszelkie strony z tego typu poradnikami należą do sklepów internetowych, które skupiają się na przybliżeniu tematu potencjalnemu klientowi. Jest to zrozumiałe, ale nie jestem fanem takich rozwiązań. Sklepy próbują jak najkrócej wytłumaczyć sposób montażu procesora, płyty głównej czy karty graficznej. Robią to pobieżnie i jednocześnie zalewają czytelnika reklamami swoich produktów, których mają nadmiar w magazynie. To jak uczyć się gry na gitarze wyłącznie konkretnych utworów. Wówczas, nawet perfekcyjne wykonanie, nie świadczy o umiejętności grania, o komponowaniu nawet nie wspominając. Tak samo jest z tymi poradnikami. Czytelnik wie jak zamontować daną część, ale nie jest przygotowany na inne technologie i rozwiązania, które może napotkać w komputerze.

      <h3>Jak będzie wyglądał ten poradnik?</h3>
      Przede wszystkim nie będę podawał na tacy gotowego rozwiązania. Moim celem będzie dokładne omówienie wszystkich zagadnień i technologii jakie można napotkać w komputerze. Chcę, abyś po tym kursie potrafił samemu interpretować parametry podzespołów, zamiast zadawać pytania typu „Który procesor jest lepszy?”.

      <h3>Dla kogo jest ten kurs?</h3>
      Na pewno nie dla osób, które chcą tylko mieć superkomputer i nic więcej. Im polecam znalezienie gotowych konfiguracji lub zamówienie u kogoś złożenie komputera. Poradnik jest skierowany dla tych, którzy chcą samodzielnie złożyć komputer i na koniec powiedzieć „tak, sam go złożyłem”. Takie podejście zapewnia niezwykłą satysfakcję oraz pozwala na samodzielną diagnozę problemów z komputerem. Moją dewizą jest „nie wystarczy wiedzieć jak to się robi, ważne jest żeby wiedzieć dlaczego tak się robi”. Nie będę reklamować produktów. Wszelkie urządzenia i podzespoły pojawiające się w kursie będą wyłącznie przykładami omawianej technologii.

      <h3>Czy na pewno stworzę dobrą konfigurację?</h3>
      Moim celem jest, aby ten kurs pozwalał na to. Jeśli jakaś kwestia została słabo omówiona lub widzisz jakiś niezrozumiały parametr urządzenia lub podzespołu zachęcam do zadawania pytań pod artykułami. Istnieje też możliwość skonfrontowania konfiguracji z opinią innych użytkowników, którzy składali już komputery i mają w tym doświadczenie. Tylko muszę ostrzec, aby podchodzić do takich rad z dystansem, ponieważ wiele osób pisze jedynie „wywal tą konfigurację do kosza i masz tu moją”, bo jak wiadomo co nasze, to najlepsze.

      <h3>Czy mogę w komentarzach zaproponować zmianę w artykule?</h3>
      Oczywiście! Nie wiem wszystkiego i nie musisz się zgadzać z tym, co napiszę w poradniku. Jeśli masz uwagi do omówienia danego zagadnienia lub masz doświadczenie w tym temacie, chętnie posłucham tego, co masz do powiedzenia. Pamiętaj tylko o zachowaniu kultury dyskusji – na komentarze typu „zmień to, bo ja wiem lepiej” nie zamierzam reagować.

      <h2>Zaczynajmy!</h2>
      Poradnik będzie składał się z wielu artykułów, które zostaną pogrupowane na rozdziały, a ich tematyka będzie oferowała zarówno teorię wyjaśniającą podstawowe zagadnienia związane z działaniem komputera, jak i praktyczne poradniki pokazujące montaż komputera. Zapraszam.

      {
        list.map((section, idx) => (
          <section key={idx}>
            {section.title && <h2>{section.title}</h2>}
            {section.editionsMessage && <EditionsMessage/>}
            {section.subTitle && <b>{section.subTitle}</b>}
            {section.wipMessage && <WipMessage/>}
            <ol>
              {section.items.map(item => <li key={item[0]}><Link to={item[1]}>{item[0]}</Link></li>)}
            </ol>
          </section>
        ))
      }

      <h2>Na zakończenie</h2>
      Jeśli to czytasz, to zakładam, że przebrnąłeś/przebrnęłaś przez mój kurs. Mam zadzieję, że pozwolił Ci on w dużym stopniu opanować temat składania własnego komputera. Zachęcam teraz do dalszego poszerzania swojej wiedzy oraz śledzenia artykułów pojawiających się na tej witrynie. Świat IT nie śpi i cały czas się rozwija – trzeba być na bieżąco. Pozdrawiam.

      <h3>Polecane serie:</h3>
      <ul>
        <li><Link to={'/category/diagnostyka'}>Diagnostyka</Link> - opis wykrywania i naprawiania najpopularniejszych awarii, jakie zachodzą w komputerach PC.</li>
        <li><Link to={'/category/kompendium-wiedzy'}>KOMPendium wiedzy</Link> - seria artykułów zawierających ciekawostki i poradniki przeznaczonych na wszystkich użytkowników komputerów osobistych.</li>
        <li><Link to={'/category/newsy'}>Newsy</Link> - artykuły na temat aktualnych wydarzeń w świecie IT.</li>
      </ul>
    </PageContent>
  </Layout>
)

const EditionsMessage = () => <p>Poradnik posiada instrukcję montażu dwóch różnych komputerów. Zalecam skorzystanie z nowszej edycji i ewentualne rozszerzenie swojej wiedzy o zawartość starszej wersji poradnika.</p>

const WipMessage = () => <InfoBlock>Edycja 2020 jest w trakcie publikowania. Część artykułów może nie być jeszcze dostępna!</InfoBlock>

export default Page
