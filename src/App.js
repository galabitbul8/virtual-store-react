import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={
          <div>
            <Header />
            <Checkout />
          </div>
          }>
          </Route>


          <Route path="/"element={
          <div>
            <Header />
            <Home />
          </div>
          }>
          </Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
