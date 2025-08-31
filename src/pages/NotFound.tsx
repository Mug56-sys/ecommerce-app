import { useNavigate } from "react-router"

export default function NotFound() {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col py-5 rounded-3xl gap-3 border m-10  justify-self-center ">
      <p className="text-5xl font-bold  pb-7 px-5 border-b-3">Page Not Found</p>
      <button className="bg-blue-500 rounded-full text-white hover:bg-blue-700 px-4 py-2 cursor-pointer text-xl w-[50%] self-center" onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}
