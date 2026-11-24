// Recommendations from titiu.com. Photos live in /public/img.
// Each card also has a `back`: an e21 colleague's recommendation (from the e21 case page)
// that is revealed when the card flips on the home page.
export interface Person {
  name: string;
  role: string;
  then?: string;
  photo: string;
}
export interface Recommendation extends Person {
  quote: string;
  back: Person & { quote: string[] };
}

export const recommendations: Recommendation[] = [
  {
    name: 'Carita Reijonen',
    role: 'Yrittäjä @ Carita Reijonen tmi',
    photo: '/img/carita.jpg',
    quote:
      'Titiu tunnistaa asiakkaidensa tarpeet välittömästi, mikä kertoo sekä ammattitaidosta että ihmissuhdetaidoista. Hänellä on ideoita paitsi omalta osaamisalueeltaan myös koko yrityskuvan rakentamiseen. Titiun työstä huokuu raikkaus, selkeys ja inspiraatio. Hänen kanssaan on helppo tulla toimeen, sillä hän antaa työlleen koko persoonansa ja viestii asiakkaidensa kanssa avoimesti, lämpimästi ja luotettavasti.',
    back: {
      name: 'Kasperi Klaavo',
      role: 'CTO @ e21',
      photo: '/img/e21/kasperi.webp',
      quote: [
        'Titiun rooli oli paljon nimikettään laajempi. Hän on erittäin osaava suunnittelija, jolla on vahvat UI- ja UX-taidot ja vankka front-end-kehityksen ymmärrys, mikä teki hänestä erinomaisen työparin kehittäjille. Omien projektiensa lisäksi hän teki paljon työtä sen eteen, miten toimimme yrityksenä. Hän auttoi uudistamaan sisäisiä prosessejamme ja teki jokaisen tiimin arjesta sujuvampaa.',
        'Häntä arvostettiin yhtä lailla asiakasprojekteissa, joissa hänen positiivinen asenteensa ja harkitseva otteensa rakensivat luottamusta ja pitivät asiat liikkeessä. Titiu osoitti todellista johtajuutta tarvitsematta tehdä siitä numeroa. Ihmiset yksinkertaisesti halusivat työskennellä hänen kanssaan.',
      ],
    },
  },
  {
    name: 'Tiina Saukko',
    role: 'Toimitusjohtaja @ Infine',
    then: 'Mentori @ Ystävyyden Majatalo',
    photo: '/img/tiina.jpg',
    quote:
      'Titiussa yhdistyvät harvinaisella tavalla viisaus ja käytännön taidot, ja hän tavoittelee päämääriään sinnikkäästi. Luova ajattelu tulee aina mukaan kuvioihin, kun hän on paikalla, ja silti hänellä on lahja saada ihmiset seuraamaan häntä ja auttamaan tavoitteiden saavuttamisessa.',
    back: {
      name: 'Marko Rautakoura',
      role: 'Toimitusjohtaja @ e21',
      photo: '/img/e21/marko.webp',
      quote: [
        'Titiu on monipuolinen UI/UX-suunnittelija. Hän osaa yhdistää käyttäjien tarpeet, liiketoiminnan tavoitteet ja tekniset reunaehdot toimiviksi ratkaisuiksi, ja hän on osoittanut poikkeuksellista oma-aloitteisuutta sekä asiakas- että yrityksen kehitystyössä.',
      ],
    },
  },
  {
    name: 'Jan Wikholm',
    role: 'Tietoturva-asiantuntija',
    then: 'CTO @ e21',
    photo: '/img/jan.jpg',
    quote:
      'Olisin pahasti väärässä, jos ensimmäiset Titiua kuvaavat adjektiivini eivät olisi ystävällinen ja innostunut. Yritysmaailmassa, jossa asiakkaat tulivat pääosin betoni- ja rakennusalalta, hän onnistui tekemään suunnitelmistaan moderneja ja ripauksen säihkyviä mutta silti tyylikkäitä ja kunkin asiakkaan ilmeelle uskollisia. Hyvin teknistenkin sovellusten kohdalla hän ymmärsi nopeasti, miten käyttöliittymä kannattaisi rakentaa parhaan mahdollisen käyttökokemuksen saavuttamiseksi.',
    back: {
      name: 'Eetu Vierula',
      role: 'Full stack -kehittäjä @ e21',
      photo: '/img/e21/eetu.webp',
      quote: [
        '…Erinomaisen suunnittelijansilmänsä lisäksi hän on taitava ymmärtämään asiakkaiden tarpeet ja mukauttamaan suunnitelmansa niiden mukaan. Teknisellä puolella hän ymmärtää vahvasti design-järjestelmien periaatteet ja rakenteen ja osaa hyödyntää niitä parhaalla tavalla. Hän ei myöskään pelkää ottaa moderneja tekoälytyökaluja osaksi työtapojaan…',
      ],
    },
  },
  {
    name: 'Hanna Ahvensalmi',
    role: 'UI-suunnittelija ja omistaja @ Ntrnz Media',
    then: 'Nuorempi suunnittelija @ e21',
    photo: '/img/hanna.jpg',
    quote:
      'Titiu on käyttöliittymäsuunnittelun guru, ja hän on ollut mentorini, jolta olen oppinut paljon. Hänellä on laaja tietämys teknologioista, joiden varaan erinomaiset ja käyttäjäystävälliset verkkosivut ja käyttöliittymät rakentuvat. Titiu vie suunnitelmansa viimeistä yksityiskohtaa myöten loppuun ja seisoo näkemystensä takana. Hän on lämminsydäminen, ja hänen kanssaan on ilo työskennellä.',
    back: {
      name: 'Theo Martin',
      role: 'Digitaalinen palvelumuotoilija @ e21',
      photo: '/img/e21/theo.webp',
      quote: [
        '…Hänellä on todella hyvä silmä yksityiskohdille ja muotoilulle, mutta hän on myös tehnyt paljon sisäisten työkalujemme ja tiimimme työtapojen kehittämiseksi. Hän on ihminen, joka aidosti välittää asioiden parantamisesta, ei vain muotoilussa vaan siinä, miten teemme asioita ylipäätään. Hän on harkitseva ja lahjakas ja tuo positiivista energiaa ympärillään oleville ihmisille. Suosittelisin häntä epäröimättä mille tahansa tiimille, joka etsii taitavaa suunnittelijaa ja aidosti mahtavaa työkaveria…',
      ],
    },
  },
];
