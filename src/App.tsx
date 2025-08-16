
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Content1 from "./components/Content1/Content1";
import Content2 from "./components/Content/Content2/Content2";





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
             
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
