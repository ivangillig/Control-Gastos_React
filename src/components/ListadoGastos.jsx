import React from 'react'
import Gasto from './Gasto'

function ListadoGastos({gastos, setGastoEditar, eliminarGastos, filtro, gastosFiltrados}) {
  return (
    <div className='listado-gastos contenedor'>
        
        
        {
         filtro ? (
           <>
              <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>
                {gastosFiltrados.map( gasto => (
                  <Gasto 
                      key={gasto.id}
                      gasto = {gasto} 
                      setGastoEditar= {setGastoEditar}  
                      eliminarGastos = {eliminarGastos}       
                  />
                ))}
            </>
          ) : (
            <>
              <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
              {gastos.map( gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto = {gasto} 
                    setGastoEditar= {setGastoEditar}  
                    eliminarGastos = {eliminarGastos}       
                />
              ))}
            </>
          )
        }
        </div>
  )}

export default ListadoGastos