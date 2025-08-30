import { type Product } from "./Products"

export default function Product({id,title,description}:Product) {
  return (
    <div className="border-[2px] p-2 rounded-lg flex-col flex" key={id}>
        <img src="https://placehold.co/600x400" alt="Placeholder" />
        <p className="text-xl font-bold py-1 truncate">{title}</p>
        <p className="text-sm text-gray-800 line-clamp-3 ">{description}</p>
      </div>
  )
}
