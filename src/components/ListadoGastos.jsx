import React from 'react'

const ListadoGastos = ({gastos}) => {
  return (
    <div>
        {gastos.map(gasto => 
            
            <div>
                {gasto.concepto}
                {gasto.montoGasto}
                {gasto.categoria}
            </div>
            )}

    </div>
  )
}

export default ListadoGastos