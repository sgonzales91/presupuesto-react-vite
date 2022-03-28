import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import {formatearFecha, generarId} from './helpers'
import Filtros from './components/Filtros'


function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : []
  )
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  )
  const [presupuestoValido, isSetPresupuestoValido] = useState(false)
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar , setGastoEditar] = useState({})
  const [gastoEliminar, setGastoEliminar] = useState({})
  const [filtro, setFiltro] =  useState('')
  const [gastosFiltrados , setGastosFiltrados] = useState([])


  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      console.log("gastoEditar tiene datos")
      handleNuevoGasto()
      /*
        setConcepto(gastoEditar.concepto)
        setMontoGasto(gastoEditar.montoGasto)
        setCategoria(gastoEditar.categoria)
        */
    }
},[gastoEditar])

useEffect(() => {
  localStorage.setItem("presupuesto", presupuesto ?? 0)
}, [presupuesto])

useEffect(() => {
  const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0

  if(presupuestoLS > 0){
    isSetPresupuestoValido(true)
  }
}, [])

useEffect(() => {
  localStorage.setItem("gastos",JSON.stringify(gastos) ?? [])
}, [gastos])


useEffect(() => {
  //filtrar los gastos segun la categoria seleccionada
  setGastosFiltrados(gastos.filter(gastoState => (
    filtro == gastoState.categoria
  )))

  
 }, [filtro])



useEffect(() => {
  const nuevoArregloGastos = gastos.filter(gastoState => gastoEliminar.id !== gastoState.id )
  setGastos(nuevoArregloGastos)
}, [gastoEliminar])



  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  } 

  const guardarGasto = (gasto) => {

    gasto.id = generarId()
    gasto.fecha = formatearFecha()

    setGastos([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className={modal ? "fijar" : ''}>
      <Header
      gastos = {gastos}
      setGastos = {setGastos}
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      presupuestoValido = {presupuestoValido}
      isSetPresupuestoValido = {isSetPresupuestoValido}
      ></Header>
      {
        presupuestoValido && 
        (
          <>
        <main> 
        <Filtros 
        filtro = {filtro}
        setFiltro = {setFiltro}
        ></Filtros>  
        <ListadoGastos 
        gastos = {gastos}
        setGastoEditar = {setGastoEditar}
        setGastoEliminar = {setGastoEliminar}
        filtro = {filtro}
        gastosFiltrados = {gastosFiltrados}
        ></ListadoGastos> </main>
        <div className='nuevo-gasto'>
        <img src={IconoNuevoGasto}
        alt= "Icono Nuevo Gasto"
        onClick={handleNuevoGasto}/>
      </div>
      </>)
      }
      {
        modal && <Modal
        setModal = {setModal}
        animarModal = {animarModal}
        setAnimarModal = {setAnimarModal}
        guardarGasto = {guardarGasto}
        gastoEditar = {gastoEditar}
        setGastoEditar = {setGastoEditar}
        gastos = {gastos}
        setGastos = {setGastos}
        ></Modal>
      }
      
   </div>
  )
}

export default App
