import './App.css'
import ButtonFatec from './componentes/ButtonFatec'
import CustonInput from './componentes/CustonInput'

function App() {

  const msg = 'ENTRE EM CONTATO'
  return (
    <>
      <p>
        {msg} 
      </p>
      <br />

      <CustonInput type="text"  placeholder="Nome" />
      <CustonInput type="text"  placeholder="Telefone" /><div className="br"></div>
      <CustonInput type="text"  placeholder="E-mail" /><div className="br"></div> <br />
      <ButtonFatec type="button" label="Enviar" /> <div className="br"></div> 

    </>
  )
}

export default App
