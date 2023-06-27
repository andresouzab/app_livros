// Componente para incluir livros no Banco de Dados.
//Declaração da função do componente Inclurlivros
import {useForm} from "react-hook-form";
// Importar o axios para o código
import {api} from "../config_axios"
// Importar useState inclusivo do react usa metódo promisses com async e await
import { useState } from "react";
//Register serve para definir os nomes dos campos do form (validação)
// handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
const InclusaoLivros = () => {
const {register, handleSubmit} = useForm();
const [aviso, setAviso ] = useState("");
const salvar = async (campos) => {
    try {
            const resposta = await api.post("/livros", campos);
            setAviso("Livro cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar livro!");
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
            <h4 className="container">Inclusão</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                        <input type="text" className="form-control" id="titulo" required autoFocus {...register("titulo")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="autor">Autor</label>
                         <input type="text" className="form-control" id="autor" required {...register("autor")}/>
                </div>
                <div className="form-group mt-2">URL da foto:
                    <label htmlFor="foto">Titulo</label>
                         <input type="url" className="form-control" id="foto" required {...register("foto")}/>
                </div>
                <div className="row mt-2"></div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de Publicação</label>
                            <input type="number" className="form-control" id="ano" required {...register("ano")}/>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="form-group">
                        <label htmlFor="preco">Preço</label>
                        <input type="number" className="form-control" id="preco" step="0.01" required {...register("preco")}/>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3" value="Limpar"/>
        </form>
        <div className="alert"></div>
                
        </div>
    )
}

export default InclusaoLivros;