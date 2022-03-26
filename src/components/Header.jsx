import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const header = ({presupuesto, setPresupuesto, isSetPresupuestoValido}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <NuevoPresupuesto
           presupuesto = {presupuesto}
           setPresupuesto = {setPresupuesto}
           isSetPresupuestoValido = {isSetPresupuestoValido}
        ></NuevoPresupuesto>
    </header>
  )
}

export default header