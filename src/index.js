import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<App />}/>
   
    </Routes>
    <Footer/>
  </BrowserRouter>,
  rootElement
);