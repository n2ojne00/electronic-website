import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export const Admin = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productDescription1, setProductDescription1] = useState('');
  const [productDescription2, setProductDescription2] = useState('');
  const [productDescription3, setProductDescription3] = useState('');
  const [price, setPrice] = useState('');
  const [priceUsd, setPriceUsd] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('Naytonohjaimet');

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:3001/addproducts', [
        {
          productName,
          productDescription,
          productDescription1,
          productDescription2,
          productDescription3,
          price,
          priceUsd,
          imageUrl,
          category,
        },
      ]);
      alert("Tuote lisätty onnistuneesti!")
      console.log(response.data);
    } catch (error) {
      alert("Tuotteen lisääminen epäonnistui!")
    }
  };

  return (
    <div style={{margin:"10px"}}>
      <Button variant='dark' size='sm' href="/users">Näytä nettikauban käyttäjät</Button>
      <h2>Tuotteiden lisäys</h2>
      <Form>
        <Form.Group controlId="productName">
          <Form.Label>Tuotteen nimi:</Form.Label>
          <Form.Control
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productDescription">
          <Form.Label>Tuotteen 1 kuvaus:</Form.Label>
          <Form.Control
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productDescription1">
          <Form.Label>Tuotteen toinen kuvaus / tulee eri riville:</Form.Label>
          <Form.Control
            type="text"
            value={productDescription1}
            onChange={(e) => setProductDescription1(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productDescription2">
          <Form.Label>Tuotteen kolmas kuvaus / tulee eri riville:</Form.Label>
          <Form.Control
            type="text"
            value={productDescription2}
            onChange={(e) => setProductDescription2(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productDescription3">
          <Form.Label>Tuotteen neljäs kuvaus / tulee eri riville:</Form.Label>
          <Form.Control
            type="text"
            value={productDescription3}
            onChange={(e) => setProductDescription3(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Tuotteen hinta euroissa:</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="priceUsd">
          <Form.Label>Tuotteen hinta USD:</Form.Label>
          <Form.Control
            type="text"
            value={priceUsd}
            onChange={(e) => setPriceUsd(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="image_url">
          <Form.Label>Tuotteen kuvan URL:</Form.Label>
          <Form.Control
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="category">
  <Form.Label>Kategoria:</Form.Label>
  <Form.Select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="Naytonohjaimet">Naytonohjaimet</option>
    <option value="Emolevyt">Emolevyt</option>
    <option value="Virtalahteet">Virtalahteet</option>
    <option value="Muistit">Muistit</option>
    <option value="Prosessorit">Prosessorit</option>
    <option value="Kotelot">Kotelot</option>
    
  </Form.Select>
</Form.Group>

        <Button variant="dark" size='lg' onClick={handleAddProduct}>
          Lisää tuote
        </Button>
      </Form>
    </div>
  );
};

export default Admin;