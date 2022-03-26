import {useState} from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            grafica aqui
        </div>
    <div className='contenido-presupuesto'>
    <p>
        <span>Presupuesto: </span> {formatter.format(presupuesto)}
    </p>
    <p>
        <span>Diponible: </span> {formatter.format(0)}
    </p>
    <p>
        <span>Gastado: </span> {formatter.format(0)}
    </p>
    </div>
    </div>
  )
}

export default ControlPresupuesto