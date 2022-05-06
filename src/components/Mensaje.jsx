import React from 'react'

export const Mensaje = ({children, tipo}) => {
  return (

    //uso template string para pasar el tipo de alerta que quiero mostrar, y el children con el mensaje
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje