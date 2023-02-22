import React from 'react'
import parlante from '../../public/img/parlante.png'

const CardProductos = () => {
    return (
        <div className="flex flex-row w-11/12 max-w-sm rounded-lg bg-white shadow-lg mx-auto mb-4">
            <img className="w-24 h-auto object-cover rounded-l-lg" src={parlante} alt="" />
            <div className="flex flex-col justify-start w-full ml-4">
                <h5 className="text-gray-900 text-2xl font-bold pt-6 mb-2 w-44 leading-7">Parlante Awei</h5>

                <div className="flex justify-between w-10/12">
                    <p className="text-gray-700 text-base my-auto mb-2">
                        Bluetooth Flip 6 party boost potencia 20W, resistente al agua IP67
                    </p>
                </div>
                <div className="flex justify-between w-full mb-2">
                    <p className="text-2xl font-bold">$ 100</p>
                    <button type="button" className="inline-block px-1 py-1 mr-5 bg-white border-4 border-gray-800 text-gray-800 text-lg font-black leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg transition duration-150 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>

                </div>
            </div>
        </div>
    )
}

export default CardProductos