import {useState, useEffect} from 'react'
import cerrarBtn from '../img/cerrar.svg'
import Error from './Error'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar, gastos, setGastos}) => {
    const [concepto, setConcepto] = useState('')
    const [montoGasto, setMontoGasto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
          console.log("gastoEditar tiene datos desde modal")
          
            setConcepto(gastoEditar.concepto)
            setMontoGasto(gastoEditar.montoGasto)
            setCategoria(gastoEditar.categoria)
            
        }
    },[gastoEditar])

 const ocultarModal = () =>{
    setAnimarModal(false)
    setGastoEditar({})
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
    }else{
        const objGasto = {
            concepto,
            montoGasto,
            categoria
        }
    
    if(gastoEditar.id){
        //estamos editando un gasto
        console.log("editando un gasto")
        objGasto.id = gastoEditar.id
        objGasto.fecha = gastoEditar.fecha

        const nuevoArregloGastos = gastos.map(gastoState => (
            gastoState.id === gastoEditar.id ? objGasto : gastoState
        ))
        setGastos(nuevoArregloGastos)
        setGastoEditar({})
        ocultarModal()
    }
    else{
        //estamos ingresando un nuevo gasto
        //guardarGasto({concepto,montoGasto,categoria})
        guardarGasto(objGasto)
        ocultarModal()
    }
}


  }
  return (
    <div className='modal'>
    <div className='cerrar-modal'>
    <img src={cerrarBtn}
    alt="cerrar Modal"
    onClick={ocultarModal}/>

    </div>
    <form onSubmit={handleNuevoGasto} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>{gastoEditar.id ? "Editar Gasto" : "Nuevo Gasto" }</legend>
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
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
        </select>
        </div>

        <input type="submit" value={gastoEditar.id ? "Guardar Cambios" :"Guardar Gasto"}/>
    </form>
        
    </div>
  )
}

export default Modal