import { useState } from 'react'
import './App.css'
// importando o react hook form
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm()
  const [destaque, setDestaque] = useState("")
  const [entrada, setEntrada] = useState("")
  const [parcela, setParcela] = useState("")

  function enviarDados(data){
    setDestaque(`Promoção do veículo ${data.modelo}`)
    const totalEntrada = Number(data.preco) * 0.5
    setEntrada(`Entrada de R$ ${totalEntrada.toFixed(2)}`)
    const totalParc = totalEntrada / 12
    setParcela(`+ 12x de R$ ${totalParc.toFixed(2)}`)
  }

  function limpar(){
    setDestaque("")
    setEntrada("")
    setParcela("")
  }
  
  return (
    <>
      <div className="container">
        <h1>Revenda Wellar - Financiamentos</h1>
        <form onSubmit={handleSubmit(enviarDados)} onReset={limpar}>
          <div class="col-md-6 mb-3">
              <label htmlfor="modelo" class="form-label">Modelo do Veículo</label>
              <input type="text" class="form-control" id="modelo" placeholder="Exemplo" required {...register("modelo")}/>
          </div>
          <div class="col-md-6 mb-3">
              <label htmlfor="preco" class="form-label">Preço R$</label>
              <input type="number" step="10" class="form-control" id="preco" placeholder="R$ 00,00" required {...register("preco")}/>
          </div>

          <button type='submit' className='btn btn-success btn-lg'>Calcular Financiamento</button>
          <button type='reset' className='btn btn-danger btn-lg ms-3' onClick={limpar}>Limpar Dados</button>
        </form>
        <h2 className='text-primary mt-4'>{destaque}</h2>
        <h2 className='text-primary'>{entrada}</h2>
        <h2 className='text-primary'>{parcela}</h2>
      </div>
    </>
  )
}

export default App
