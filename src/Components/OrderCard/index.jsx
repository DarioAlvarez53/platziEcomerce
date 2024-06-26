import { XMarkIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types'


const OrderCard = props => {

    OrderCard.propTypes = {
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }

    //aqui me voya traer solo lo que necesito
    const { title, imageUrl, price } = props
    

    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <p><XMarkIcon className='size-6 text-blue-500 cursor-pointer'/></p>
            </div>
        </div>
    )
}

export default OrderCard
