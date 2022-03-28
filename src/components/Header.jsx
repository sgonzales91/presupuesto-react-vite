import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({gastos, setGastos, presupuesto, setPresupuesto, presupuestoValido, isSetPresupuestoValido}) => {
  return (
    <header>
        <h1>Control de Gastos</h1>
        {presupuestoValido ? 
        <>
          <ControlPresupuesto
          gastos = {gastos}
          setGastos = {setGastos}
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          isSetPresupuestoValido = {isSetPresupuestoValido}>           
          </ControlPresupuesto>
        </>
        :
        <NuevoPresupuesto
           presupuesto = {presupuesto}
           setPresupuesto = {setPresupuesto}
           isSetPresupuestoValido = {isSetPresupuestoValido}
        ></NuevoPresupuesto>
      }
    </header>
  )
}

export default Header