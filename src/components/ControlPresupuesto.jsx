import {useState, useEffect} from 'react'
import {formatearNumero} from '../helpers/index'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({gastos,setGastos, presupuesto, setPresupuesto, isSetPresupuestoValido}) => {

    const [gastado, setGastado] = useState(0);
    const [disponible, setDiponible] = useState(0) 
    const [porcGastado, setPorcGastado] = useState(0)

    useEffect(() => {
        //El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
       const obtenerTotalGastos = gastos.reduce((total, gasto) => gasto.montoGasto + total, 0 ) 
       //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
       //const obtenerTotalGastos = gastos.map(gasto => gasto.montoGasto)
        setGastado(obtenerTotalGastos) 
        console.log("se modifico el state de gastos")

        const totalDisponible = presupuesto - obtenerTotalGastos
        setDiponible(totalDisponible)

        setTimeout(() => {
            setPorcGastado( ((obtenerTotalGastos / presupuesto) * 100).toFixed(2) )
        }, 1000);
        
    }, [gastos])

    const handleResetApp = () => {
        const resultado = confirm('Desear reiniciar presupuesto y gastos?')
        if(resultado){
        setPresupuesto(0)
        setGastos([])
        isSetPresupuestoValido(false)
        }

    }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
           <CircularProgressbar
           styles={buildStyles({
               pathColor: porcGastado > 100 ? '#DC2626' : '#3B85F6',
               trailColor: '#F5F5F5',
               textColor: porcGastado > 100 ? '#DC2626' : '#3B85F6'
           })}
           value = {porcGastado}
           text ={`${porcGastado}% Gastado`}

           ></CircularProgressbar>
        </div>
    <div className='contenido-presupuesto'>
        <button className='reset-app'
        type='button'
        onClick={handleResetApp}>
            Resetear App
        </button>
    <p>
        <span>Presupuesto: </span> {formatearNumero(presupuesto)}
    </p>
    <p className={`${disponible < 0 ? 'negativo' : ''}`}>
        <span>Diponible: </span> {formatearNumero(disponible)}
    </p>
    <p>
        <span>Gastado: </span> {formatearNumero(gastado)}
    </p>
    </div>
    </div>
  )
}

export default ControlPresupuesto