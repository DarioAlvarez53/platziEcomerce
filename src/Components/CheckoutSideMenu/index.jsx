import { useContext } from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)
    // console.log(context.productToShow)
    console.log("Cart: ",context.cartProduct);


    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-md text-xl'>My Order</h2>
                <div><XMarkIcon className='size-6 text-blue-500 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}/></div>
            </div>
            <div className='px-6 overflow-auto'>
                {context.cartProduct.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))}    
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu