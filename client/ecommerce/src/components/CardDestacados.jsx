import React from 'react'

const CardDestacados = () => {
    return (
        // <div className="rounded overflow-hidden shadow-lg ml-5">
            <div className="flex flex-row w-96 h-36 rounded-lg bg-white shadow-lg ml-5">
                <img className="w-24 h-auto object-cover rounded-l-lg" src="https://cdn.idealo.com/folder/Product/201843/4/201843467/s11_produktbild_gross/logitech-signature-m650-large-pink.jpg" alt="" />
                <div className="flex flex-col justify-start w-full ml-2">
                    <h5 className="text-gray-900 text-2xl font-bold pt-6 mb-2 w-44 leading-7">Mouse Logitech</h5>

                    <div className="flex justify-between w-full">
                        <p className="text-gray-700 text-base my-auto">
                             Bluetooth M350 Rose
                        </p>

                        {/* <div className="flex space-x-2 justify-end py-6"> */}
                            <button type="button" className="inline-block px-4 py-2.5 mr-5 bg-gray-900 text-white text-lg font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">+</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default CardDestacados