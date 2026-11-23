// Recommendations from titiu.com. Photos live in /public/img.
export interface Recommendation {
  name: string;
  role: string;
  then?: string;
  photo: string;
  quote: string;
}

export const recommendations: Recommendation[] = [
  {
    name: 'Carita Reijonen',
    role: 'Yrittäjä @ Carita Reijonen tmi',
    photo: '/img/carita.jpg',
    quote:
      'Titiu tunnistaa asiakkaidensa tarpeet välittömästi, mikä kertoo sekä ammattitaidosta että ihmissuhdetaidoista. Hänellä on ideoita paitsi omalta osaamisalueeltaan myös koko yrityskuvan rakentamiseen. Titiun työstä huokuu raikkaus, selkeys ja inspiraatio. Hänen kanssaan on helppo tulla toimeen, sillä hän antaa työlleen koko persoonansa ja viestii asiakkaidensa kanssa avoimesti, lämpimästi ja luotettavasti.',
  },
  {
    name: 'Tiina Saukko',
    role: 'Toimitusjohtaja @ Infine',
    then: 'Mentori @ Ystävyyden Majatalo',
    photo: '/img/tiina.jpg',
    quote:
      'Titiussa yhdistyvät harvinaisella tavalla viisaus ja käytännön taidot, ja hän tavoittelee päämääriään sinnikkäästi. Luova ajattelu tulee aina mukaan kuvioihin, kun hän on paikalla, ja silti hänellä on lahja saada ihmiset seuraamaan häntä ja auttamaan tavoitteiden saavuttamisessa.',
  },
  {
    name: 'Jan Wikholm',
    role: 'Tietoturva-asiantuntija',
    then: 'CTO @ e21',
    photo: '/img/jan.jpg',
    quote:
      'Olisin pahasti väärässä, jos ensimmäiset Titiua kuvaavat adjektiivini eivät olisi ystävällinen ja innostunut. Yritysmaailmassa, jossa asiakkaat tulivat pääosin betoni- ja rakennusalalta, hän onnistui tekemään suunnitelmistaan moderneja ja ripauksen säihkyviä mutta silti tyylikkäitä ja kunkin asiakkaan ilmeelle uskollisia. Hyvin teknistenkin sovellusten kohdalla hän ymmärsi nopeasti, miten käyttöliittymä kannattaisi rakentaa parhaan mahdollisen käyttökokemuksen saavuttamiseksi.',
  },
  {
    name: 'Hanna Ahvensalmi',
    role: 'UI-suunnittelija ja omistaja @ Ntrnz Media',
    then: 'Nuorempi suunnittelija @ e21',
    photo: '/img/hanna.jpg',
    quote:
      'Titiu on käyttöliittymäsuunnittelun guru, ja hän on ollut mentorini, jolta olen oppinut paljon. Hänellä on laaja tietämys teknologioista, joiden varaan erinomaiset ja käyttäjäystävälliset verkkosivut ja käyttöliittymät rakentuvat. Titiu vie suunnitelmansa viimeistä yksityiskohtaa myöten loppuun ja seisoo näkemystensä takana. Hän on lämminsydäminen, ja hänen kanssaan on ilo työskennellä.',
  },
];
