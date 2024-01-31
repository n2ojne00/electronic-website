import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

export const Help = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Usein kysytyt kysymykset</strong></Accordion.Header>
        <Accordion.Body>
          <strong>Miten teen tilauksen?</strong><br />
          Voit tehdä tilauksen lisäämällä haluamasi tuotteet ostoskoriin ja seuraamalla maksuprosessia.<br />
          <strong>Miksi tuotteeni ei toimi?</strong><br />
          Tarkista, että olet kytkenyt sen oikein päälle ja muita vianetsintävinkkejä.<br />
          <strong>Kuinka kauan tuotteella kestää saapua tilauksen jälkeen?</strong><br />
          Toimitusaika on 5-7 työpäivää tilauksesta.<br />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Asiakaspalautukset</strong></Accordion.Header>
        <Accordion.Body>
          <strong>Miten voin palauttaa tuotteeni?</strong><br />
          Voit tuoda tuotteen myymälämme huoltopisteelle. Palautettavan tuotteen tulee olla käyttämätön ja alkuperäispakkauksessa. Tuotteilla on 30 päivän palautusoikeus.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>Maksutavat</strong></Accordion.Header>
        <Accordion.Body>
          <strong>Mitkä maksutavat ovat käytettävissä?</strong><br />
          Hyväksymme luottokortit ja verkkopankkimaksut<br />
          <strong>Millä valuutalla voin maksaa?</strong><br />
          Hyväksymme eurot ja dollarit (USD).<br />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Tietosuojaseloste</strong></Accordion.Header>
        <Accordion.Body>
          <strong>Tietosuojaseloste - Nettikaubba</strong><br/>

          Päivitetty viimeksi: 10.12.2023<br/>

          Tervetuloa Nettikaubban tietosuojaselosteeseen. Tämä seloste kuvaa, miten keräämme, käytämme ja suojelemme henkilötietojasi.<br/>

          <strong>Kerätyt tiedot</strong><br/>
          Keräämme tilauksen käsittelyyn ja toimitukseen tarvittavat tiedot, kuten nimesi, osoitteesi ja maksutiedot.<br/>

          <strong>Evästeet</strong><br/>
          Käytämme evästeitä parantaaksemme sivuston käyttökokemusta. Voit hallita evästeasetuksiasi selaimessasi.<br/>

          <strong>Miten käytämme tietojasi</strong><br/>
          Käytämme kerättyjä tietoja tilaustesi käsittelyyn ja toimitukseen. Emme jaa tietojasi kolmansille osapuolille markkinointitarkoituksiin.<br/>

          <strong>Tietoturva</strong><br/>
          Tietojasi suojataan turvallisilla tietokannoilla ja suojaustoimenpiteillä. Maksukorttitietoja ei tallenneta.<br/>

          <strong>Oikeutesi</strong><br/>
          Sinulla on oikeus pyytää tietojesi kopiota, oikaista virheelliset tiedot ja pyytää tietojesi poistamista. Ota yhteyttä +044 000 0000 kysyäksesi lisätietoja.<br/>

          <strong>Muutokset tietosuojaselosteeseen</strong><br/>
          Pidätämme oikeuden päivittää tätä tietosuojaselostetta tarvittaessa. Päivitetyt versiot julkaistaan sivustollamme.<br/>

          <strong>Yhteydenotto</strong><br/>
          Jos sinulla on kysyttävää tietosuojaselosteestamme, ota meihin yhteyttä osoitteeseen example@example.com.<br/>
          Kiitos, että valitsit Nettikaubban!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
