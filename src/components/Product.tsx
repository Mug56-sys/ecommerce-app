import { useNavigate } from "react-router"
import { type Product } from "../utils/Types"

export default function Product({id,title,description}:Product) {
  const navigate=useNavigate()
  return (
    <div className="border-2 p-3 rounded-lg flex-col flex w-[100%] hover:bg-gray-200 cursor-pointer"  key={id} onClick={()=>navigate(`/products/${id}`)}>
        <img src="https://placehold.co/600x400" alt="Placeholder" className="w-full h-40 object-cover rounded-xl border-1 " />
        <p className="text-xl font-bold py-1 truncate">{title}</p>
        <p className="text-sm text-gray-800 line-clamp-3 ">{description}</p>
      </div>
  )
}
