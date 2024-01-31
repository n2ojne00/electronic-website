import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Kortti() {
  return (
    <div className="container" style={{ maxWidth: "100em" }}>
      <div className="row justify-content-around">
        <Card
          className="col-md-3 mb-3 d-none d-sm-block"
          style={{
            width: "250px",
            backgroundColor: "grey",
            marginTop: "60px",
            marginBottom: "10rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg"
            className="img-fluid"
            style={{ height: "15rem", marginTop: "5px", padding: "15px", objectFit:"cover" }}
          />
          <Card.Body>
            <Card.Title>Näytönohjaimet</Card.Title>
            <Card.Text style={{ height: "200px" }}>
              Tehokkaat grafiikkakortit tarjoavat silmiähivelevän pelikokemuksen
              ja nopean suorituskyvyn vaativissa graafisissa sovelluksissa.
              Valitse huippumerkkien laatutuotteet ja nosta pelisi uudelle
              tasolle.
            </Card.Text>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "100%" }}
              variant="primary"
              href="/Naytonohjaimet"
            >
              Näytönohjaimet
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="col-md-3 mb-3 d-none d-sm-block"
          style={{
            width: "250px",
            backgroundColor: "grey",
            marginTop: "60px",
            marginBottom: "10rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://www.pctekreviews.com/Reviews/STRIX_B550E/01.jpg"
            style={{ height: "15rem", marginTop: "5px", padding: "15px", objectFit:"cover" }}
          />
          <Card.Body>
            <Card.Title>Emolevyt</Card.Title>
            <Card.Text style={{ height: "200px" }}>
              Laadukkaat emolevyt ovat tietokoneesi sydän. Valitse meiltä laaja
              valikoima emolevyjä, jotka tarjoavat luotettavan suorituskyvyn,
              laajennusmahdollisuudet ja huippuluokan teknologian.
            </Card.Text>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "100%" }}
              variant="primary"
              href="/Emolevyt"
            >
              Emolevyt
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="col-md-3 mb-3 d-none d-sm-block"
          style={{
            width: "250px",
            backgroundColor: "grey",
            marginTop: "60px",
            marginBottom: "10rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://ic.jimms.fi/product/5/8/408651-ig800gg.jpg"
            style={{ height: "15rem", marginTop: "5px", padding: "15px", objectFit:"cover" }}
          />
          <Card.Body>
            <Card.Title>Muistit</Card.Title>
            <Card.Text style={{ height: "200px" }}>
              Nopea ja tehokas muisti on avain sujuvaan tietokoneen toimintaan.
              Tutustu laajaan muistivalikoimaamme, joka kattaa kaikki tarpeesi
              pelaamisesta ammattimaiseen kuvankäsittelyyn.
            </Card.Text>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "100%" }}
              variant="primary"
              href="/Muistit"
            >
              Muistit
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="col-md-3 mb-3 d-none d-sm-block"
          style={{
            width: "250px",
            backgroundColor: "grey",
            marginTop: "60px",
            marginBottom: "10rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://www.io-tech.fi/wp-content/uploads/2022/02/12400f-00.jpg"
            style={{ height: "15rem", marginTop: "5px", padding: "15px", objectFit:"cover" }}
          />
          <Card.Body>
            <Card.Title>Prosessorit</Card.Title>
            <Card.Text style={{ height: "200px" }}>
              Suoritin on tietokoneesi moottori, ja meiltä löydät vain parhaat
              moottorit. Valitse tehokas prosessori, joka vastaa vaativiinkin
              tehtäviin, olipa kyse sitten pelaamisesta, suunnittelusta tai
              multitaskingista.
            </Card.Text>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "100%" }}
              variant="primary"
              href="/Prosessorit"
            >
              Prosessorit
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="col-md-3 mb-3 d-none d-sm-block"
          style={{
            width: "250px",
            backgroundColor: "grey",
            marginTop: "60px",
            marginBottom: "10rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://ic.jimms.fi/product/5/7/331652-ig800gg.jpg"
            style={{ height: "15rem", marginTop: "5px", padding: "15px", objectFit:"cover" }}
          />
          <Card.Body>
            <Card.Title>Kotelot</Card.Title>
            <Card.Text style={{ height: "200px" }}>
              Tyylikkäät ja tehokkaat kotelot suojaavat komponenttejasi ja
              tarjoavat viimeistellyn ulkoasun. Valitse meidän laajasta
              valikoimasta koteloita, jotka sopivat jokaiseen tarpeeseen.
            </Card.Text>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "100%" }}
              variant="primary"
              href="/Kotelot"
            >
              Kotelot ja oheistuotteet
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="col-md-3 mb-3 d-none d-sm-block"
          style={{
            width: "250px",
            backgroundColor: "grey",
            marginTop: "60px",
            marginBottom: "10rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://ic.jimms.fi/product/4/0/251749-ig800gg.jpg"
            style={{ height: "15rem", marginTop: "5px", padding: "15px", objectFit:"cover" }}
          />
          <Card.Body>
            <Card.Title>Virtalähteet</Card.Title>
            <Card.Text style={{ height: "200px" }}>
              Luotettava virtalähde on välttämätön tehokkaan tietokoneen
              rakentamiseen. Tutustu virtalähdevalikoimaamme, joka tarjoaa
              riittävästi tehoa ja turvallisuutta kaikkiin tarpeisiisi.
            </Card.Text>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "100%" }}
              variant="primary"
              href="/Virtalahteet"
            >
              Virtalähteet
            </Button>
          </Card.Body>
        </Card>
        <Container className="d-block d-sm-none">
          <Row className="justify-content-center">
            <Col xs={8} sm={6} md={4}>
              <ListGroup className="text-center" style={{ marginTop: "10px" }}>
                <ListGroup.Item>
                  <Button
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", margin: "10px", padding: "10px" }}
                    variant="primary"
                    href="/Naytonohjaimet"
                  >
                    Näytönohjaimet
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", margin: "10px", padding: "10px" }}
                    variant="primary"
                    href="/Emolevyt"
                  >
                    Emolevyt
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", margin: "10px", padding: "10px" }}
                    variant="primary"
                    href="/Muistit"
                  >
                    Muistit
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", margin: "10px", padding: "10px" }}
                    variant="primary"
                    href="/Prosessorit"
                  >
                    Prosessorit
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", margin: "10px", padding: "10px" }}
                    variant="primary"
                    href="/Kotelot"
                  >
                    Kotelot ja oheistuotteet
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", margin: "10px", padding: "10px" }}
                    variant="primary"
                    href="/Virtalahteet"
                  >
                    Virtalahteet
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Kortti;
