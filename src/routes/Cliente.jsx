import { useForm } from "react-hook-form"

const Cliente = () => {

 // desestruturando o objeto
  const {register,setValue,setFocus} = useForm();

  // CRIANDO A FUNÇÃO DA API QUE VAI CONSUMIR OS DADOS

  function buscarCep(e){
    const cep= e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>res.json())
    .then((dados)=>{
      setValue("rua",dados.logradouro);
      setValue("bairro",dados.bairro);
      setValue("cidade",dados.localidade);
      setValue("estado",dados.estado);
      setFocus("numero");
    })
  }

  return (
    <div>
      <form>
        <fieldset>
          <legend>Dados Cliente</legend>
          <div>
            <lable>Cep:</lable>
            <input
            type="text"
             {...register("cep")}
            onBlur={buscarCep}
            />
          </div>
          <div>
            <lable>Rua:</lable>
            <input
            type="text"
            {...register("rua")}
            />
          </div>
          <div>
            <lable>Bairro:</lable>
            <input
            type="text"
            {...register("bairro")}
            />
          </div>
          <div>
            <lable>Numero:</lable>
            <input
            type="text"
            {...register("numero")}
            />
          </div>
          <div>
            <lable>Cidade:</lable>
            <input
            type="text"
            {...register("cidade")}
            />
          </div>
          <div>
            <lable>Estado:</lable>
            <input
            type="text"
            {...register("estado")}
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Cliente