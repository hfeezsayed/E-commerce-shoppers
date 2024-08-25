import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import ShopCategory from "./Pages/Shop/ShopCategory";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import LoginSignUp from "./Pages/Login/LoginSignUp";
import Footer from "./components/Footer/Footer";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banner} category="kid" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
