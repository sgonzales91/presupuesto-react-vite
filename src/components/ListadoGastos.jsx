import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar,setGastoEliminar, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
        {
            filtro ? (
                <>
                <h2>{gastosFiltrados.length > 0 ? "Gastos" :  "No hay Gastos registrados"} </h2>
               { gastosFiltrados.map(gasto => (
                    <Gasto
                        key = {gasto.id}
                        gasto = {gasto}
                        setGastoEditar = {setGastoEditar}
                        setGastoEliminar = {setGastoEliminar}
                        >
                    </Gasto>
                ))
                }
                </>
            ) : (
                <>
                <h2>{gastos.length > 0 ? "Gastos" :  "No hay Gastos registrados"} </h2>
                 { 
                   gastos.map(gasto => (
                    <Gasto
                        key = {gasto.id}
                        gasto = {gasto}
                        setGastoEditar = {setGastoEditar}
                        setGastoEliminar = {setGastoEliminar}
                        >
                    </Gasto>
                  
                        ))
                   }
                   </>
            )
        }
    </div>
  )
}

export default ListadoGastos