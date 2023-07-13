import "./App.css";
import Nav from "./UI/Nav";
import Footer from "./UI/Footer";
import SignUp from "./UI/SignUp";
import PrivateComponent from "./UI/PrivateComponent";
import Login from "./UI/Login";
import AddProduct from "./UI/AddProduct";
import ProductList from "./UI/ProductList";
import UpdateProduct from "./UI/UpdateProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
