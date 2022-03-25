import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <NuevoPresupuesto
           presupuesto = {presupuesto}
           setPresupuesto = {setPresupuesto}
        ></NuevoPresupuesto>
    </header>
  )
}

export default header