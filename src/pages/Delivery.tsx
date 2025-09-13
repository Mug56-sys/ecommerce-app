import { useNavigate } from "react-router-dom";
import CheckoutNav from "../components/CheckoutNav";
import { useEffect, useState } from "react";

export default function Delivery() {
  const [countries, setCountries] = useState<any>();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchCountries = async () => {
      fetch("https://data-api.oxilor.com/rest/countries?lng=en", {
        headers: { Authorization: `Bearer EJnWtv9v696mmcWdrQzSu07rtmj1Az` },
      })
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          
        })
        .catch((err) => console.error(err));
    };
    fetchCountries();
  }, []);

  return (
    <>
      <div className="justify-self-center w-[50%]  h-screen border-x bg-gray-200 flex flex-col items-center ">
        <CheckoutNav stage={1} />
        <div className="mt-20 flex justify-self-center w-[70%] self-center flex-col">
          <p className="text-3xl font-black text-center">Delivery Form</p>
          <div>
            <p className="text-xl font-semibold py-1">Name</p>
            <div className="pb-3">
              <input
                placeholder="First"
                className="bg-white border rounded-lg p-1 w-[49%] "
              ></input>
              <div className="inline-block w-[2%]"></div>
              <input
                placeholder="Last"
                className="bg-white border rounded-lg p-1 w-[49%]"
              ></input>
            </div>

            <p className="text-xl font-semibold py-1">Address</p>
            <input
              placeholder="Street Address"
              className="bg-white w-full p-1 border rounded-lg mb-2"
            />
            <input
              placeholder="Street Address 2"
              className="bg-white w-full p-1 border rounded-lg mb-2"
            />
            <div className="pb-3">
              <input
                placeholder="City"
                className="bg-white border rounded-lg p-1 w-[49%] "
              ></input>
              <div className="inline-block w-[2%]"></div>
              <input
                placeholder="Region"
                className="bg-white border rounded-lg p-1 w-[49%]"
              ></input>
            </div>
            <div className="pb-3">
              <input
                placeholder="Postal/Zip Code"
                className="bg-white border rounded-lg p-1 w-[49%] "
              ></input>
              <div className="inline-block w-[2%]"></div>
              <select className="bg-white border rounded-lg p-1 w-[49%] ">
                {countries ? countries?.map((country: any) => {
                  return <option key={country.id} className="rounded">{country.name}</option>;
                }): <option>Loading...</option>}
              </select>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/checkout/method");
            }}
            className="border w-[50%] text-2xl bg-blue-500 text-white border-black rounded-xl font-semibold py-1 mt-5 self-center cursor-pointer hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
