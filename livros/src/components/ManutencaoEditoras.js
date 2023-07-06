//Componente para realizar a manutenção dos livros
//importar os hooks componentes especiais do react
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react"; // os uses são hook
import { api } from "../config_axios";
import ItemLista from "./ItemListaEditoras";
//Componente para realizar a manutenção de livros


const ManutencaoEditoras = () => {
    //código
    const {register, handleSubmit, reset} = useForm();
    // vetor de livros, método setLivros para inserir livros no vetos livros
    const [editoras, setEditoras] = useState([]);
    //método obter lista de livros
    const obterLista = async () => {
        try {
            const lista = await api.get("editoras"); //api é axios vai buscar livros do BD
            setEditoras(lista.data);}
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
            const lista = await api.get(`editoras/filtro/${campos.palavra}`);
            lista.data.length
            ? setEditoras(lista.data)
            : alert("Não há editoras cadastradas com a palavra chave pesquisada");
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
        
    
    }
    
    const excluir = async(id,nome) => {
        if(!window.confirm(`Confirma a exclusão da Editora ${nome}?`)){
            return;
        }
        try{
            await api.delete(`editoras/${id}`);
            setEditoras(editoras.filter(editoras => editoras.id !== id));
            
        }catch(error){
            alert(`Erro: ..Não foi possível excluir a editora ${nome}: ${error}`);
        }
    }
    
    //alterar os registros
    const alterar = async (id,nome,index) => {
        const novoTelefone = prompt(`Digite o novo nº de telefone da Editora ${nome}`);
        if (novoTelefone==="" || novoTelefone === undefined) {
            alert('Digite um número válido!')
            return;
        }
        try{//captura os erros 
            //chamando o backend e passando os dados
            await api.put(`editoras/${id}`,{telefone: novoTelefone});
            const telefoneAtualizado = [...editoras];
            const indiceTelefone = telefoneAtualizado.findIndex(editoras => editoras.id === id);
            telefoneAtualizado[indiceTelefone].telefone = novoTelefone;
            setEditoras(telefoneAtualizado);
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
                        <th>cidade</th>
                        <th>estado</th>
                        <th>telefone</th>
                        <th>rua</th>
                        <th>cep</th>
                    </tr>
                </thead>
                <tbody>
                    {editoras.map((editora) => (
                        <ItemLista
                            key={editora.id}
                            id={editora.id}
                            nome={editora.nome}
                            cidade={editora.cidade}
                            estado={editora.estado}
                            telefone={editora.telefone}
                            rua={editora.rua}
                            cep={editora.cep}
                                                
                            excluirClick={()=>excluir(editora.id,editora.nome)}
                            alterarClick={()=>alterar(editora.id,editora.nome)}
                        />
                    ))}
                </tbody>
            </table>
    
           </div> 
        );
    };


export default ManutencaoEditoras;