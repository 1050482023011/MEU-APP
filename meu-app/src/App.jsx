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

      <CustonInput type="text"  placeholder="Nome" /> <br />
      <CustonInput type="text"  placeholder="Telefone" /><br />
      <CustonInput type="text"  placeholder="E-mail" /> <br />
      <br />
      <ButtonFatec type="button" label="Enviar" /> 
      
      <br />
    </>
  )
}

export default App
