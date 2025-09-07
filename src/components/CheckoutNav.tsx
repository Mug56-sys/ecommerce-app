
export default function CheckoutNav({stage}:{stage:number}) {
  return (
    <div className="flex  justify-around justify-self-center border-b border-x rounded-b-4xl  w-[80%] h-20 pt-3 bg-gray-500 text-white border-black  font-semibold relative ">
      <div className="absolute font-black self-center  mb-7 bg-yellow-400 z-0  left-[15%] w-[70%] text-center h-[3px]"> </div>
      <div className="w-15 z-10">
      <p className={`border flex rounded-full size-[40px]  justify-self-center justify-center items-center ${stage===1 ? 'bg-yellow-500': 'bg-white'} text-black `}>1</p>
      <p className="flex justify-center ">Delivery</p>
      </div>
      <div className="w-15  z-10">
      <p className={`border flex rounded-full size-[40px]  justify-self-center justify-center items-center ${stage===2 ? 'bg-yellow-500': 'bg-white'} text-black `}>2</p>
      <p className="flex justify-center ">Method</p>
      </div>
       <div className="w-15  z-10">
      <p className={`border flex rounded-full size-[40px]  justify-self-center justify-center items-center ${stage===3 ? 'bg-yellow-500': 'bg-white'} text-black `}>3</p>
      <p className="flex justify-center ">Payment</p>
      </div>
    </div>
  )
}
