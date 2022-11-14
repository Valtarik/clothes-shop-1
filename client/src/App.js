import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Payment from "./pages/Payment";
import Delivery from "./pages/Delivery";
import Return from "./pages/Return";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Product from "./pages/Product";
import ResetPass from "./pages/ResetPass";

function App() {
  return (
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/catalogue" element={ <Catalogue /> } />
          <Route path="/contacts" element={ <Contacts /> } />
          <Route path="/payment" element={ <Payment /> } />
          <Route path="/delivery" element={ <Delivery /> } />
          <Route path="/return" element={ <Return /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/registration" element={ <Registration /> } />
          <Route path="/forgot-password" element={ <ResetPass /> } />
          <Route path="/product" element={ <Product /> } />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
