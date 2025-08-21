
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Content1 from "./components/Content1/Content1";
import Content2 from "./components/Content/Content2/Content2";
import Content3 from "./components/Content/Content3/Content3";
import Content4 from "./components/Content/Content4/Content4";



function App() {
  return (
    <div className="App">
      <Header />
      

      <Routes>
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route
          path="/"
          element={
            <>
            
          <Content1/>
          <Content2/>
          <Content3/>
          <Content4/>   
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
