import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Changepw } from "./pages/Changepw";
import { Naytonohjaimet } from "./pages/Gpu";
import { Admin } from "./pages/Admin";
import { Cpu } from "./pages/Cpu";
import { Emolevyt } from "./pages/Emolevyt";
import { Kotelot } from "./pages/Kotelot";
import { Virtalähteet } from "./pages/Virtalähteet";
import { Muistit } from "./pages/Muisti";
import { NotFound } from "./pages/NotFound";
import {BottomNavbar} from "./pages/phonenavbar"
import { SearchResultPage } from "./pages/SearchResultPage";
import { Feedback } from "./pages/Feedback";
import { Users } from "./pages/Users"
import { OrderHistory } from "./pages/OrderHistory";






function App({ products, searchTerm,   }) {
  
 
  return (
    <>
    <Header />
    <Search  />
    
    <div className="App">
      <Routes>
      
      
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/changepw" element={<Changepw />} />
      <Route path="/naytonohjaimet" element={<Naytonohjaimet />} />
      <Route path="/admin" element ={<Admin />} />
      <Route path="/emolevyt" element={<Emolevyt />} />
      <Route path="/prosessorit" element={<Cpu />} />
      <Route path="/kotelot" element={<Kotelot />} />
      <Route path="/virtalahteet" element={<Virtalähteet />} />
      <Route path="/muistit" element={<Muistit />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/search-results" element={<SearchResultPage products={products} searchTerm={searchTerm}/>} /> 
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/users" element={<Users />} />
      <Route path="/order-history" element={<OrderHistory />} />
     

      
      
      
      
      </Routes>
    </div>
    <Footer />
    <BottomNavbar />
    </>
  );
}
export default App;