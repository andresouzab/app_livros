// Importações da Aplicação:
import MenuSuperior from './components/MenuSuperior';
import ManutencaoLivros from './components/ManutencaoLivros';
import ManutencaoAutores from './components/ManutencaoAutores';
import ManutencaoEditoras from './components/ManutencaoEditoras';
import ResumoLivros from './components/ResumoLivros';
import { Routes, Route } from 'react-router-dom';
import InclusaoAutores from './components/InclusaoAutores';
import InclusaoEditoras from './components/InclusaoEditoras';
import InclusaoLivros from './components/InclusaoLivros';



const App = () => {
  return ( // Tudo que vai aqui dentro aparece na aplicação.
  <>
  <MenuSuperior/>
  <Routes>
    <Route path="/" element={<InclusaoLivros/>}/>
    <Route path="/autores" element={<InclusaoAutores/>}/>
    <Route path="/editoras" element={<InclusaoEditoras/>}/>
    <Route path="/manutencao" element={<ManutencaoLivros/>}/>
    <Route path="/manutencao/autores" element={<ManutencaoAutores/>}/>
    <Route path="/manutencao/editoras" element={<ManutencaoEditoras/>}/>
    <Route path="/resumo" element={<ResumoLivros/>}/>
  </Routes>
  
  </>  
  
);
}



export default App;
