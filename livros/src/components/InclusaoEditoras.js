// Componente para incluir livros no Banco de Dados.
//Declaração da função do componente Inclurlivros
import {useForm} from "react-hook-form";
// Importar o axios para o código
import {api} from "../config_axios"
// Importar useState inclusivo do react usa metódo promisses com async e await
import { useState } from "react";
//Register serve para definir os nomes dos campos do form (validação)
// handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
const InclusaoEditoras = () => {
const {register, handleSubmit} = useForm();
const [aviso, setAviso ] = useState("");
const salvar = async (campos) => {
    try {
            const resposta = await api.post("/editoras", campos);
            setAviso("Editora cadastrada com sucesso!");
            alert("Editora cadastrada com sucesso!")
        } catch (error) {
            setAviso("Erro ao cadastrar Editora!");
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
            <h4 className="container">Inclusão de Editoras</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome da Editora</label>
                        <input type="text" className="form-control" id="nome" required autoFocus {...register("nome")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="cidade">Cidade</label>
                         <input type="text" className="form-control" id="cidade" required {...register("cidade")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="estado">Estado</label>
                         <input type="text" className="form-control" id="estado" maxLength={2} required {...register("estado")}/>
                </div>
                <div className="row mt-2"></div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" className="form-control" id="telefone" maxLength={14} required {...register("telefone")}/>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="form-group">
                        <label htmlFor="rua">Rua</label>
                        <input type="text" className="form-control" id="rua" required {...register("rua")}/>
                    </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="cep">CEP</label>
                        <input type="text" className="form-control" id="cep" maxLength={10} required {...register("cep")}/>
                    </div>
                </div>

                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3" value="Limpar"/>
        </form>
        <div className="alert"></div>
                
        </div>
    )
}

export default InclusaoEditoras;