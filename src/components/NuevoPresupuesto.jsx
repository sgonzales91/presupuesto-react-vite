import {useState} from 'react'
import Error from './Error'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, isSetPresupuestoValido}) => {
    const [error,guardarError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(presupuesto < 0){
            guardarError("el presupuesto no puede ser negativo")
            return;
        }

        guardarError('')
        isSetPresupuestoValido(true)

    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor='presupuesto'>Definir Presupuesto </label>
                <input className='nuevo-presupuesto' 
                id='presupuesto'
                type="number"
                placeholder='Añade tu presupuesto'
                value = {presupuesto}
                onChange={(e) => (setPresupuesto(Number(e.target.value))) }
                /> 
            </div> 
            <input type="submit" value="Añadir"/>
            {error && <Error tipo = "error">{error}</Error>}
        </form>
        </div>
  )
}

export default NuevoPresupuesto