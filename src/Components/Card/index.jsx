import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ArchiveBoxIcon } from "@heroicons/react/20/solid"

function Card(data) {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail() //esta funcion es la que va abrir el sidebar
        context.setProductToShow(productDetail) // esta funcion va a mandar informacion al sidebar
        context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1) //esto es para que haga el conteo en el carrito
        context.setCartProduct([...context.cartProduct, productData])//esto es para guardar la informacion que cambio el estado, y poder agregar mas informacion
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg" onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img src={data.data.image} alt={data.data.title} className="w-full h-full object-cover rounded-t-lg" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={(event) => addProductsToCart(event, data.data)}>
                    <ArchiveBoxIcon className="size-6 text-blue-500"/>
                </div>
            </figure>
            <p className="flex justify-between items-center px-2">
                <span className="text-sm font-light truncate">{data.data.title}</span>
                <span className="text-lg font-semibold">{data.data.price}</span>
            </p>
        </div>
    )
}

export default Card
