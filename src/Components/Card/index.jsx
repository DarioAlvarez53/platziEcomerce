import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ArchiveBoxIcon } from "@heroicons/react/20/solid"

function Card(data) {
    const context = useContext(ShoppingCartContext)

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg" onClick={() => context.openProductDetail()}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img src={data.data.image} alt={data.data.title} className="w-full h-full object-cover rounded-t-lg" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={() => context.setCount(context.count + 1)}><ArchiveBoxIcon className="size-6 text-blue-500"/></div>
            </figure>
            <p className="flex justify-between items-center px-2">
                <span className="text-sm font-light truncate">{data.data.title}</span>
                <span className="text-lg font-semibold">$300</span>
            </p>
        </div>
    )
}

export default Card
