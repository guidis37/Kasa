import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Accomodation from "./pages/accomodation/Accomodation"
import Error from "./pages/error/Error"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
  
      
    </div>
  );
}

export default App;
