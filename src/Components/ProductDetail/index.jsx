import { useContext } from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext } from '../../Context'

function ProductDetail() {
    const context = useContext(ShoppingCartContext)
    // console.log(context.productToShow)


    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-md text-xl'>Detail</h2>
                <div><XMarkIcon className='size-6 text-blue-500 cursor-pointer' onClick={() => context.closeProductDetail()}/></div>
            </div>
            <div className='flex-flex-col overflow-y-auto'>
                <figure className='px-6'>
                    <img src={context.productToShow.image} alt={context.productToShow.title} className='w-full h-full rounded-lg' />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2 '>${context.productToShow.price}</span>
                    <span className='font-medium text-md '>${context.productToShow.title}</span>
                    <span className='font-light text-sm '>${context.productToShow.description}</span>
                </p>
            </div>
            
        </aside>
    )
}

export default ProductDetail