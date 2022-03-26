import { useState } from 'react'
import Header from './components/Header'
import ControlPresupuesto from './components/ControlPresupuesto'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import {generarId} from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [presupuestoValido, isSetPresupuestoValido] = useState(false)
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  } 

  const guardarGasto = (gasto) => {
    gasto.id = generarId()

    setGastos([
      ...gastos,
      gasto
    ])
    console.log(gastos)
  }

  return (
    <div>
      {presupuestoValido ? 
      <>
      <ControlPresupuesto
                            presupuesto = {presupuesto}></ControlPresupuesto>
                            <div className='nuevo-gasto'>
                            <img src={IconoNuevoGasto}
                            alt= "Icono Nuevo Gasto"
                            onClick={handleNuevoGasto}/>
                          </div>
                          </>
      :
      <Header
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      isSetPresupuestoValido = {isSetPresupuestoValido}
      ></Header>
      }
      {
        modal && <Modal
        setModal = {setModal}
        animarModal = {animarModal}
        setAnimarModal = {setAnimarModal}
        guardarGasto = {guardarGasto}
        ></Modal>
      }
      {gastos.length > 0 && <ListadoGastos gastos = {gastos}></ListadoGastos>}
   </div>
  )
}

export default App
