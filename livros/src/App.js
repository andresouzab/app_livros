// Importações da Aplicação:
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import ManutencaoLivros from './components/ManutencaoLivros';
import ResumoLivros from './components/ResumoLivros';
import { Routes, Route } from 'react-router-dom';
import InclusaoAutores from './components/InclusaoAutores';
import InclusaoEditoras from './components/InclusaoEditoras';



const App = () => {
  return ( // Tudo que vai aqui dentro aparece na aplicação.
  <>
  <MenuSuperior/>
  <Routes>
    <Route path="/" element={<InclusaoLivros/>}/>
    <Route path="/manutencao" element={<ManutencaoLivros/>}/>
    <Route path="/manutencao/autores" element={<ManutencaoAutores/>}/>
    <Route path="/resumo" element={<ResumoLivros/>}/>
    <Route path="/autores" element={<InclusaoAutores/>}/>
    <Route path="/editoras" element={<InclusaoEditoras/>}/>
  </Routes>
  
  </>  
  
);
}



export default App;
