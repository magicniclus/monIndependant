import "./styles/global.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from "./pages/Accueil"
import Footer from "./components/footer/Footer";
import Conditions from "./pages/conditions/Conditions";
import NavBar from "./components/navBar/NavBar"
import Faq from "./pages/FAQ/Faq";
import Articles from "./pages/articles/Articles";

function App() {
  return (
    <div className="App">
    <BrowserRouter >
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />}/>
            <Route path="/accueil" element={<Accueil />}/>
            <Route path="/conditions-generales" element={<Conditions />}/>
            <Route path="/FAQ" element={<Faq />}/>
            <Route path="/articles" element={<Articles/>}/>
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
