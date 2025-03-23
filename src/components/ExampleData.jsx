import { useEffect } from "react";
import { useState } from "react"

export function ExampleData() {
  const [countriesContinents, setCountriesContinents] = useState([]);
  const [code, setCode] = useState("COP");

  const handleSubmit = () => {
    fetch("http://localhost:8080/energy-data/" + code)
      .then((res) => res.json().then(json => setCountriesContinents(json)))
  }
  return (
    <>
      <div className="relative overflow-x-auto w-1/2 pl-12">
        <input onChange={(e) => setCode(e.target.value)} />
        <button onClick={() => handleSubmit()}>Search</button>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Año
              </th>
            </tr>
          </thead>
          <tbody>
            {countriesContinents.map((value) => value.isCountry ? (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {value.name} ({value.code})              </th>
                <td>{value.dateYear}</td>
              </tr>
            ) : null)}
          </tbody>
        </table >
      </div >



    </>
  )
}
