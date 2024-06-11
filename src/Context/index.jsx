//Crenado el contexto global
import { createContext, useState } from "react"
import PropTypes from 'prop-types'

//Creamos la funcion para el contexto
export const ShoppingCartContext = createContext()

//Generamos el proveedor 
export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children:
        PropTypes.node.isRequired
    }

    //Creando el estado del contador del carrito de compras
    const [count, setCount] = useState(0)
    // console.log('COUNT: ', count)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}