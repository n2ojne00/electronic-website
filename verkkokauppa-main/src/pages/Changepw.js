import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Changepw.css";

export const Changepw = () => {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [npw, setNpw] = useState("");
  const [cpw, setCpw] = useState("");
  const navigate = useNavigate();

  function Changepassword(e) {
    e.preventDefault();
    if (npw === cpw) {
      console.log("Passwords match");
      axios
        .post("http://localhost:3001/changepassword", { username, pw, npw })
        .then((resp) => {
          alert("Salasana vaihdettu onnistuneesti");
        })
        .catch((err) => {
          alert("Väärä salasana tai käyttäjätunnus");
        });
    } else {
      alert("Uudet salasanat eivät täsmää");
    }
  }

  return (
    <Container style={{ marginTop: "60px", maxWidth: "100%" }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Vaihda salasanasi</h1>
          <Form
            style={{
              border: "1px solid black",
              padding: "50px",
              borderRadius: "4px",
              backgroundColor: "#D3D3D3",
            }}
          >
            <Form.Group>
              <Form.Label>Käyttäjänimi</Form.Label>
              <Form.Label style={{ color: "red" }}> *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Syötä käyttäjänimi"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={{ marginTop: "10px" }}>
              <Form.Label>Vanha salasana</Form.Label>
              <Form.Label style={{ color: "red" }}> *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Syötä vanha salasanasi"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "10px" }}>
              <Form.Label>Uusi salasana</Form.Label>
              <Form.Label style={{ color: "red" }}> *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Aseta uusi salasanasi"
                value={npw}
                onChange={(e) => setNpw(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "10px" }}>
              <Form.Label>Vahvista uusi salasana</Form.Label>
              <Form.Label style={{ color: "red" }}> *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Vahvista uusi salasanasi"
                value={cpw}
                onChange={(e) => setCpw(e.target.value)}
              />
            </Form.Group>

            <Button
              onClick={Changepassword}
              style={{ marginTop: "20px" }}
              variant="danger"
              type="submit"
            >
              Vaihda salasanasi
            </Button>
          </Form>
        </Col>
      </Row>
      <div className="history">
        <Button
          className="btn-history btn-primary btn-md"
          style={{ width: "100%" }}
          variant="primary"
          onClick={() => navigate("/order-history")}
        >
          Tilaushistoria
        </Button>
      </div>
    </Container>
  );
};
