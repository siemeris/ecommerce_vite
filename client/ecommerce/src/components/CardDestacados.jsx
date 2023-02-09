import React from 'react'

const CardDestacados = () => {
    return (
        <div class="flex justify-center">
            <div class="flex flex-row max-w-xl rounded-lg bg-white shadow-lg">
                <img class="w-36 h-auto object-cover rounded-l-lg" src="https://cdn.idealo.com/folder/Product/201843/4/201843467/s11_produktbild_gross/logitech-signature-m650-large-pink.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Mouse Logitech</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Mouse inalámbrico Logitech Pebble M350 bluetooth, 1000 dpi, 3 botones, usa pila, rosado
                    </p>

                    <div class="flex space-x-2 justify-end py-6">
                        <button type="button" class="inline-block px-4 py-2.5 bg-gray-900 text-white text-lg font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDestacados