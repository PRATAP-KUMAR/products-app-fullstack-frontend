import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import { ProductsContextProvider } from "./context/ProductsContext";

export default function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes >
      </ProductsContextProvider>
    </BrowserRouter>
  )
}