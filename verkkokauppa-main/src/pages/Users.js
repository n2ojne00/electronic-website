import React, { useState, useEffect } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data); 
      })
      .catch(error => console.error('Error:', error));
  }, []); 

  return (
    <div className='text-center' style={{margin:"10px", borderRadius:"10px"}}>
      <h2 style={{marginTop:"10px", marginBottom:"10px"}}>Käyttäjälista</h2><hr></hr>
      <ListGroup numbered>
        {users.map(user => (
          <ListGroupItem style={{backgroundColor: "#dbdada"}} key={user.username}> <br></br>Etunimi: {user.first_name} <br></br>   Sukunimi: {user.last_name} <br></br>    Käyttäjänimi:  {user.username}<br></br>
          {/** Nämä buttonit ei toiminnassa*/}
          <Button variant='dark' size='sm' style={{marginRight:"5px"}}>Muokkaa käyttäjän tietoja</Button>
          <Button variant='danger' size='sm'>Poista käyttäjä</Button>
          </ListGroupItem>
          
        ))}
      </ListGroup>
      <Button variant='dark' size='sm' href="/Admin" style={{margin:"10px",marginBottom:"20px"}}>Takaisin tuotteiden lisäykseen</Button>
    </div>
  );
};

export default Users;