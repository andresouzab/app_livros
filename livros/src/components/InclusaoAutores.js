// Componente para incluir livros no Banco de Dados.
//Declaração da função do componente Inclurlivros
import {useForm} from "react-hook-form";
// Importar o axios para o código
import {api} from "../config_axios"
// Importar useState inclusivo do react usa metódo promisses com async e await
import { useState } from "react";
//Register serve para definir os nomes dos campos do form (validação)
// handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
const InclusaoAutores = () => {
const {register, handleSubmit} = useForm();
const [aviso, setAviso ] = useState("");
const salvar = async (campos) => {
    try {
            const resposta = await api.post("/autores", campos);
            setAviso("Autor cadastrado com sucesso!");
            alert("Autor cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar o Autor!");
        }
    }
//Metódo chamado para enviar o form on submit
//const salvar = (campos) => {
//JSON.stringify) converte um objeto javascript para uma String JSON
//alert(JSON.stringify(campos));
//}
//form on submit={handleSubmit(salvar)}


    return( //aqui é o que vai ser exibido em tela
        <div className="container">
            <h4 className="container">Inclusão de Autores</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" required autoFocus {...register("nome")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="sobrenome">Sobrenome</label>
                         <input type="text" className="form-control" id="sobrenome" required {...register("sobrenome")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="idade">Idade</label>
                         <input type="number" className="form-control" id="idade" required {...register("idade")}/>
                </div>
                <div className="row mt-2"></div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="nascimento">Data de Nascimento</label>
                            <input type="date" className="form-control" id="nascimento" required {...register("nascimento")}/>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="form-group">
                        <label htmlFor="sexo">Sexo</label>
                        <input type="text" className="form-control" id="sexo" required {...register("sexo")}/>
                    </div>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" className="form-control" id="telefone" required {...register("telefone")}/>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3" value="Limpar"/>
        </form>
        <div className="alert"></div>
                
        </div>
    )
}

export default InclusaoAutores;