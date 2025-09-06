import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../utils/FakeApi";
import { useEffect, useState } from "react";
import type { ProductList as ProductListType } from "../utils/Types";

export default function ProductPage({
  cart,
  setCart,
}: {
  setCart: React.Dispatch<React.SetStateAction<ProductListType>>;
  cart: ProductListType;
}) {
  const { PageId } = useParams();
  const navigate = useNavigate();
  const [deliveryTime, setDeliveryTime] = useState<string>('[6, 0]');
  useEffect(() => {
    const IdLists: number[] = ProductList.map((prod) => prod.id);

    if (IdLists.includes(Number(PageId)) === false) navigate("/home");
  }, []);
  const { description, id, title, price, img } =
    ProductList[Number(PageId) - 1];

  const handleAddToCart = () => {
    setCart([...cart, { description, id, title, price, img, deliveryTime }]);
  };
  return (
    <div>
      {id ? (
        <div className="flex flex-col justify-self-center gap-2 border-2  rounded-lg p-4 text-3xl mt-15 w-[45%]">
          <img
            src={img === "" ? "https://placehold.co/600x400" : img}
            className="w-[75%] self-center rounded-lg"
          />
          <div className="mx-[13%]">
            <p>
              ProductId:
              <span className="hover:underline cursor-default ">{id}</span>
            </p>
            <p>
              Price:
              <span className="hover:underline cursor-default">{price}$</span>
            </p>
            <p>
              Title:
              <span className="hover:underline cursor-default">{title}</span>
            </p>
            <p>
              Description:
              <span className="hover:underline cursor-default">
                {description}
              </span>
            </p>
            <div>
              DeliveryTime:
              <select
                className="text-base font-semibold border "
                onChange={(e) => setDeliveryTime(e.target.value)}
              >
                <option defaultChecked value={"[6, 0]"}>
                  6 Days :Free
                </option>
                <option value={"[4,5]"}>
                  4 Days :5$
                </option>
                <option value={"[2,10]"}>
                  2 Days :10$
                </option>
              </select>
            </div>
            <button
              className="bg-blue-500 border rounded-xl w-30 text-white mt-3 cursor-pointer text-base py-2 font-semibold"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
