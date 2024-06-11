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

    //Creando funcion para que se abra y cierre el sidebar
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    //Creando funciones que se encargaran de ejecutarse para que cambie el valor de isProductDetailOpen
    const openProductDetail = () => setIsProductDetailOpen(true) //esta se en carga de cambiar el valor a true
    const closeProductDetail = () => setIsProductDetailOpen(false) //esta se encarga de camviar el valor a false

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            //Aqui se pasan la funciones para que todos los componentes escuchen el cambio
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}