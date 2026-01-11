import "./App.css";
import Header from "./elements/Header/Header";
import Home from "./elements/Home/Home.jsx";
import BookDetails from "./elements/BookDetails/BookDetails.jsx";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
