import logo from './logo.svg';
import './App.scss';
import Accueil from "./Pages/Accueil";
import Batiment from "./Pages/Batiment";
import Services from "./Pages/services";
import Fabrication from "./Pages/Fabrication";
import Alimentation from "./Pages/Alimentation";
import Error404 from "./Pages/404";
import EntrepriseDetailPage from './Pages/Entreprise';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Accueil />} />
          <Route path="/batiment" index element={<Batiment />} />
          <Route path="/services" index element={<Services />} />
          <Route path="/fabrication" index element={<Fabrication />} />
          <Route path="/alimentation" index element={<Alimentation />} />
          <Route path="/entreprise/:name" element={<EntrepriseDetailPage />} />
          <Route path="/*" index element={<Error404 />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
