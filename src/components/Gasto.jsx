import React from 'react'
import {
    LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatearNumero } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const Gasto = ({gasto,setGastoEditar,setGastoEliminar}) => {
    const {concepto,montoGasto,categoria, fecha} = gasto

    const diccionarioIconos = {
        ahorro : IconoAhorro,
        casa : IconoCasa,
        comida : IconoComida,
        gastos : IconoGastos,
        ocio : IconoOcio,
        salud : IconoSalud,
        suscripciones : IconoSuscripciones

    }

    const leadingActions = () => ( 
        <LeadingActions>
            <SwipeAction onClick={() => (setGastoEditar(gasto))}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => ( 
        <TrailingActions>
            <SwipeAction onClick={() => (setGastoEliminar(gasto))}
            destructive = {true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

  return (
      <SwipeableList>
          <SwipeableListItem
          leadingActions = {leadingActions()}
          trailingActions = {trailingActions()}
          >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img 
                    src = {diccionarioIconos[categoria]}
                    alt = "Icono Gasto"
                    />
                    <div className='descripcion-gasto'>
                        <p className='categoria'>{categoria}</p>
                        <p className='nombre-gasto'> {concepto}</p>
                        <p className='fecha-gasto'>Agregado el: {''} {fecha}</p>
                    </div>
                </div>
                <p className='cantidad-gasto'>{formatearNumero(montoGasto)}</p>
            </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto