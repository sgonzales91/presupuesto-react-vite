import {useState} from 'react'
import cerrarBtn from '../img/cerrar.svg'
import Error from './Error'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
    const [concepto, setConcepto] = useState('')
    const [montoGasto, setMontoGasto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

 const ocultarModal = () =>{
    setAnimarModal(false)

    setTimeout(() => {
        setModal(false)
    }, 500);
 }

  const handleNuevoGasto = (e) => {
    e.preventDefault()

    if ([concepto,montoGasto,categoria].includes('') ){
        setMensaje('Todos los campos son obligatorios')

        setTimeout(() => {
            setMensaje('')
        }, 2000);
        return;
    }
    guardarGasto({concepto,montoGasto,categoria})

    ocultarModal()

  }
  return (
    <div className='modal'>
    <div className='cerrar-modal'>
    <img src={cerrarBtn}
    alt="cerrar Modal"
    onClick={ocultarModal}/>

    </div>
    <form onSubmit={handleNuevoGasto} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        {mensaje && <Error tipo = "error">{mensaje}</Error>}
        <div className='campo'>
        <label htmlFor='concepto'>Concepto:</label>
        <input id="concepto" type="text" placeholder='Añade el nombre del gasto' value={concepto} onChange={(e) => (setConcepto(e.target.value) )} />
        </div>

        <div className='campo'>
        <label htmlFor='montoGasto'>Monto:</label>
        <input id="montoGasto" type="number" placeholder='Añade la cantidad del gasto ej. 300' value={montoGasto} onChange={(e) => (setMontoGasto(Number(e.target.value)))}/>
        </div>

        <div className='campo'>
        <label htmlFor='categoria'>Categoría del Gasto</label>
        <select name="categoria" id="categoria" value={categoria} onChange={(e) => (setCategoria(e.target.value))}>
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos varios">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
        </select>
        </div>

        <input type="submit" value="Guardar Gasto"/>
    </form>
        
    </div>
  )
}

export default Modal