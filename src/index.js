import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./layout/Home/Home";
import Navigated from "./Component/Navbar/Navbar";
import About from "./layout/About/About";
import Contact from "./layout/Contact/Contact";
import Testimoni from "./layout/Testimoni/Testimoni"
import Services from "./Component/Content/Services";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigated />}>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Testimoni" element={<Testimoni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
