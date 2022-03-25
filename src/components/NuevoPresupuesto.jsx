import {useState} from 'react'
import Error from './Error'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [error,guardarError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(presupuesto < 0){
            console.log("el presupuesto no puede ser negativo")
            guardarError(true)
            return;
        }
        if(isNaN(presupuesto)){
            console.log("el presupuesto solo puede ser número.")
            guardarError(true)
            return; 
        }

        guardarError(false);
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        {error && <Error mensaje = "Error al ingresar el presupuesto"></Error>}
        <form className='formulario' onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor='presupuesto'>Definir Presupuesto </label>
                <input className='nuevo-presupuesto' 
                id='presupuesto'
                type="text"
                placeholder='Añade tu presupuesto'
                value = {presupuesto}
                onChange={(e) => (setPresupuesto(e.target.value))}
                />
            </div>
            <input type="submit" value="Añadir"/>
        </form>
        </div>
  )
}

export default NuevoPresupuesto