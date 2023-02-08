import React from 'react'

const CardDestacados = () => {
    return (
        <div class="flex justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://cdn.idealo.com/folder/Product/201843/4/201843467/s11_produktbild_gross/logitech-signature-m650-large-pink.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                    Mouse inalámbrico Logitech Pebble M350 bluetooth, 1000 dpi, 3 botones, usa pila, rosado
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    <div class="flex space-x-2 justify-center py-6">
                        <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDestacados