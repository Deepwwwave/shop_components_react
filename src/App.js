import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/header/Header";
import Home from "./containers/Pages/home/Home";
import Panier from "./containers/Pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/panier" element={<Panier/>} />
      </Routes>
    </div>
  );
}

export default App;
