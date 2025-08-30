import Product from "./Product";

export type Product = {
  id: number;
  title: string;
  description: string;
};
export type ProductList = Product[];

export default function Products() {
  const ProductList:ProductList = [
    { id: 1, title: "title1", description: "description1" },
    { id: 2, title: "title2", description: "description2" },
  ];
  return (
    <div className="h-screen mt-2  grid gap-2 grid-cols-5 auto-rows-[300px] px-2">
      {ProductList
        ? ProductList.map((prod: Product) => (
            <Product
              id={prod.id}
              title={prod.title}
              description={prod.description}
            />
          ))
        : null}
    </div>
  );
}
