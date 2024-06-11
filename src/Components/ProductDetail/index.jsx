import { useContext } from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext } from '../../Context'

function ProductDetail() {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-md text-xl'>Detail</h2>
                <div><XMarkIcon className='size-6 text-blue-500'/></div>
            </div>
        </aside>
    )
}

export default ProductDetail