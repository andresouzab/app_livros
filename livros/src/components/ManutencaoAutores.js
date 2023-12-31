//Componente para realizar a manutenção dos livros
//importar os hooks componentes especiais do react
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react"; // os uses são hook
import { api } from "../config_axios";
import ItemLista from "./ItemListaAutores";
//Componente para realizar a manutenção de livros


const ManutencaoAutores = () => {
    //código
    const {register, handleSubmit, reset} = useForm();
    // vetor de livros, método setLivros para inserir livros no vetos livros
    const [autores, setAutores] = useState([]);
    //método obter lista de livros
    const obterLista = async () => {
        try {
            const lista = await api.get("autores"); //api é axios vai buscar livros do BD
            setAutores(lista.data);}
        catch (e) {
            alert("Não foi possível obter dados", e);
        }
    }
    //Método qu será executado assim que o componente for carregado
    useEffect(() => {
        obterLista();
    }, []);
    
    const filtrarLista = async (campos) => {
        try{
            const lista = await api.get(`autores/filtro/${campos.palavra}`);
            lista.data.length
            ? setAutores(lista.data)
            : alert("Não há autores cadastrados com a palavra chave pesquisada");
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
        
    
    }
    
    const excluir = async(id,nome) => {
        if(!window.confirm(`Confirma a exclusão do Autor ${nome}?`)){
            return;
        }
        try{
            await api.delete(`autores/${id}`);
            setAutores(autores.filter(autores => autores.id !== id));
            
        }catch(error){
            alert(`Erro: ..Não foi possível excluir o Autor ${nome}: ${error}`);
        }
    }
    
    //alterar os registros
    const alterar = async (id,nome,index) => {
        const novoTelefone = prompt(`Digite o novo nº de telefone do Autor ${nome}`);
        if (novoTelefone==="" || novoTelefone === undefined) {
            alert('Digite um número válido!')
            return;
        }
        try{//captura os erros 
            //chamando o backend e passando os dados
            await api.put(`autores/${id}`,{telefone: novoTelefone});
            const telefoneAtualizado = [...autores];
            const indiceTelefone = telefoneAtualizado.findIndex(autores => autores.id === id);
            telefoneAtualizado[indiceTelefone].telefone = novoTelefone;
            setAutores(telefoneAtualizado);
            obterLista();
        }catch(error){
            alert(`Erro: ..Não foi possível alterar o telefone ${nome}: ${error}`);
        }
    }
        return (
           <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Manutenção</h4>
                </div>
                <div className="col-sm-5">
                    <form onSubmit={handleSubmit(filtrarLista)}>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Titulo ou Autor" required {...register("palavra")} />
                            <input type="submit" className="btn btn-primary" value="Pesquisar" />
                            <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterLista();}}/>
                        </div>
                    </form>
                </div>
            </div>
    
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Cód.</th>
                        <th>nome</th>
                        <th>sobrenome</th>
                        <th>idade</th>
                        <th>nascimento</th>
                        <th>sexo</th>
                        <th>telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((autor) => (
                        <ItemLista
                            key={autor.id}
                            id={autor.id}
                            nome={autor.nome}
                            sobrenome={autor.sobrenome}
                            idade={autores.idade}
                            nascimento={autor.nascimento}
                            sexo={autor.sexo}
                            telefone={autor.telefone}
                            excluirClick={()=>excluir(autor.id,autor.nome)}
                            alterarClick={()=>alterar(autor.id,autor.nome)}
                        />
                    ))}
                </tbody>
            </table>
    
           </div> 
        );
    };


export default ManutencaoAutores;