import React from 'react'
import axios from 'axios';
import './OrderHistory.css'
import { jwtToken } from '../components/signals/TokenSignal';
import { useState ,useEffect } from 'react';


export const OrderHistory = () => {
    const token = jwtToken
    const [orders, setOrders] = useState([])
   
    

    useEffect(() => {
        // Fetch orders 
        const fetchOrders = async () => {
          try {
            
            const response = await axios.get('http://localhost:3001/orders', {
              headers: {
                Authorization: `Bearer ${token}`, 
              },
            });
    
            // Update the state with the fetched orders
            setOrders(response.data);
          } catch (error) {
            console.error('Error fetching orders:', error);
            alert('Ongelma tilauksia noudettaessa!')
          }
        };
    
        fetchOrders();
      }, [token]);
    
      // Calculates the total price of the order
      const calculateTotalPrice = (products) => {
        return products.reduce((total, product) => total + product.quantity * product.price, 0);
      }

  return (
    <div>
      <h2>Tilaushistoria</h2>
      {orders.map((order) => (
        <div className='orderlist' key={order.orderId}>
          <p>Tilauksen päivämäärä: {order.orderDate}</p>
          <p>Tilausnumero: {order.orderId}</p>
          <ul>
            {order.products.map((product) => (
              <li key={product.id}>
                {product.productName} - {product.quantity} x {product.price}€
              </li>
              
            ))}
          </ul> 
          <p>Yhteensä: {calculateTotalPrice(order.products).toFixed(2)}€</p>
        </div>
      ))}
    </div>
  );
};