import Product from "./Product";
import { type Product as Prod } from "../utils/Types"
import {ProductList} from"../utils/FakeApi"

export default function Products() {
  return (
    <div className="h-screen mt-2  grid gap-4 grid-cols-1 sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5 auto-rows-[300px]  px-10">
      {ProductList
        ? ProductList.map((prod: Prod) => (
            <Product
              key={prod.id}
              img={prod.img}
              price={prod.price}
              id={prod.id}
              title={prod.title}
              description={prod.description}
            />
          ))
        : null}
    </div>
  );
}
