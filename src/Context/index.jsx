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

    //Creando funcion para que se abra y cierre el sidebar
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    //Creando funciones que se encargaran de ejecutarse para que cambie el valor de isProductDetailOpen
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true) //esta se en carga de cambiar el valor a true
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false) //esta se encarga de camviar el valor a false

    //Creando estado para visualizar el detalle de un producto
    const [productToShow, setProductToShow] = useState({}) //en el estado se trae un objeto vacio ya que este objeto se va a llenar

    //Creando estado para almacenar los articulos que se agreguen al carrito
    const [cartProduct, setCartProduct] = useState([]) //en el estado se trae un array vacio ya que este array se va a ir llenando

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            //Aqui se pasan la funciones para que todos los componentes escuchen el cambio
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProduct,
            setCartProduct,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}