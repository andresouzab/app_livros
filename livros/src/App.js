// Importações da Aplicação:
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import ManutencaoLivros from './components/ManutencaoLivros';
import ResumoLivros from './components/ResumoLivros';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return ( // Tudo que vai aqui dentro aparece na aplicação.
  <>
  <MenuSuperior/>
  <Routes>
    <Route path="/" element={<InclusaoLivros/>}/>
    <Route path="/manutencao" element={<ManutencaoLivros/>}/>
    <Route path="/resumo" element={<ResumoLivros/>}/>
  </Routes>
  
  </>  
  
);
}



export default App;
