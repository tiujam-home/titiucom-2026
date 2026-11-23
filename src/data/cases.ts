// Work samples shown on the one-pager. Each one gets its own page at /tyonaytteet/<slug>.
export interface Case {
  slug: string;
  title: string;
  tags: string[];
  intro: string[];
  note?: string;
}

export const cases: Case[] = [
  {
    slug: 'e21',
    title: 'e21:n yksityiset työnäytteet',
    tags: ['Palvelumuotoilu', 'Bootstrap 5.3', 'Dokumentointi', 'Projektinhallinta', 'Tiedonhallinta', 'CX-muotoilu'],
    intro: [
      'Työskentelin yhteensä 12 vuotta digitaalisena palvelumuotoilijana e21:llä. Päivittäinen työni keskittyi pääasiassa käyttöliittymien ja taittojen suunnitteluun suomalaisten rakennusalan ja teknisen kaupan yritysten verkkosivuille ja tuotekatalogeihin. Tämä on yksityinen portfolioni noilta vuosilta.',
    ],
    note: 'Tämän puolen näkemiseen tarvitset salasanan. Laita minulle viestiä osoitteeseen hello@titiu.com, niin saat pääsyn.',
  },
  {
    slug: 'ystavyyden-majatalo',
    title: 'Ystävyyden Majatalo',
    tags: ['CX-muotoilu', 'Wordpress', 'Hakukoneoptimointi', 'Palvelumuotoilu', 'Dokumentointi', 'Projektinhallinta', 'Tiedonhallinta', 'Sähkötyökalut'],
    intro: [
      'Vuosina 2013–2017 vaihdoin pikselit analogisempaan ympäristöön, kun toimin majatalon toiminnanjohtajana ja toimitusjohtajana. Verkkosivu-uudistuksena alkanut projekti kasvoi lähes viisivuotiseksi sydämen asiaksi: palvelumuotoilua, muutosjohtamista ja operatiivista johtamista 1 600 m²:n voittoa tavoittelemattomassa majatalossa, joka oli ollut lähellä konkurssia.',
      'Tulokset: 20 000 euron verovelka maksettiin pois kahdessa vuodessa, vuositulot kasvoivat 20 000 eurosta 120 000 euroon ja talous saatiin nollatulokseen, vuodepaikat lisääntyivät 31 %, kurssit ja tapahtumat 45 % ja verkkosivujen kävijät 30 %. Uutiskirjeen avausprosentti nousi 60 %:iin.',
      'Kyse oli koko liiketoiminnan remontista aamiaisen laittamisesta ja saunan lämmittämisestä budjetin tasapainottamiseen ja järjestyssääntöjen kirjoittamiseen. Mutta ei mennä asioiden edelle. Mikä tämä paikka oli ja on?',
    ],
  },
  {
    slug: 'logot',
    title: 'Logoja vuosien varrelta',
    tags: ['Logosuunnittelu ;)'],
    intro: [
      'En näe logosuunnittelua itsetarkoituksena vaan yhtenä palvelumuotoilun työkaluista. Logosi ei ole brändisi. Brändisi on kokemus, jonka asiakkaasi saavat ja josta he kertovat ystävilleen. Logo saa merkityksensä sen laadusta, mitä se symboloi, eikä toisin päin.',
      'Arvostan silti teknisiä ja visuaalisia haasteita, jotka liittyvät hyvän logon suunnitteluun: logon, joka kestää aikaa ja kuvastaa taustalla olevan yrityksen henkeä.',
      'Tässä muutamia näytteitä siltä saralta.',
    ],
  },
];
