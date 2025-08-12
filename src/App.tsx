import { Routes, Route } from 'react-router-dom'
import Connexion from './Pages/Connexion'
import Inscription from './Pages/Inscription'


function App() {
 return(
  <Routes>
    <Route path="/" element={<Connexion/>} />
    <Route path="/Inscription" element={<Inscription/>}/>
  
  </Routes>
 )
}

export default App
