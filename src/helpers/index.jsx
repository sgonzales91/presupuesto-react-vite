export const generarId = () =>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatearFecha = () =>{
    const fecha = new Date()
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }
    return fecha.toLocaleDateString('es-ES',opciones)
}

export const formatearNumero = (numero) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      return formatter.format(numero)
}