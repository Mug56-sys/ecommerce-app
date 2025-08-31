import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../utils/FakeApi";
import { useEffect } from "react";

export default function ProductPage() {
  const { PageId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const IdLists: number[] = ProductList.map((prod) => prod.id);

    if (IdLists.includes(Number(PageId)) === false) navigate("/home");
  }, []);
  const { description, id, title } = ProductList[Number(PageId)];
  return (
    <div>
      {id ? (
        <div className="flex flex-col justify-self-center gap-2 border-2 rounded-lg p-4 text-3xl mt-15 w-[50%]">
          <p>ProductId:<span className="hover:underline cursor-default">{id}</span></p>
          <p>Title:<span className="hover:underline cursor-default">{title}</span></p>
          <p>Description:<span className="hover:underline cursor-default">{description}</span></p>
        </div>
      ) : null}
    </div>
  );
}
