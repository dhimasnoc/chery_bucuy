import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ContactPage from "./components/ContactPage";
// import CarDetailPage from "./components/CarDetailPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kontak" element={<ContactPage />} />
        {/* <Route path="/mobil/:id" element={<CarDetailPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
