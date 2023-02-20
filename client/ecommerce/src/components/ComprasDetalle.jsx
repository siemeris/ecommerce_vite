import React from 'react'
import { useParams } from 'react-router-dom';

const ComprasDetalle = () => {
    const { idCompra } = useParams()

    return (
        <div className="mx-5 mb-5">
            <p className="mb-5">Detalle de Número de Compra {idCompra}</p>

            <div className='flex flex-row justify-start space-x-4'>
                <p className='text-sm text-gray-400 hover:cursor-pointer '>Atrás</p>
                <div className='my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg> </div>
                <p className='text-sm text-gray-800 hover:cursor-pointer '>Mis compras</p>
            </div>

            <div className="py-2">
                {/* Datos de Compra */}
                <div className="border-b-2  border-gray-800 w-full py-4">
                    <p className="text-base font-bold">Datos de Compra</p>
                </div>
                <div className="flex flex-col py-2 ml-4">
                    <div className="border-b  border-gray-200 py-1">
                        <p className="text-sm font-semibold py-2">Fecha de compra</p>
                        <p className="text-sm font-normal text-gray-400">01/01/2021</p>
                    </div>

                    <div className="border-b  border-gray-200 py-1">
                        <p className="text-sm font-semibold py-2">Nº de pedido</p>
                        <p className="text-sm font-normal text-gray-400">123456789</p>
                    </div>
                    <div className="border-b  border-gray-200 py-1">
                        <p className="text-sm font-semibold py-2">Dirección</p>
                        <p className="text-sm font-normal text-gray-400">Ciudad falsa - Buenos Aires / Calle falsa - Número 123</p>
                    </div>
                </div>

                {/* Método de Envío */}
                <div className="border-b-2  border-gray-800 w-full py-4">
                    <p className="text-base font-bold">Método de envío</p>
                </div>
                <div class="w-11/12 py-2 px-4 border-blue-400 border-4  my-4 rounded-md mx-auto">
                    <h3 class="font-semibold text-base mb-5">Standard</h3>
                    <p class="text-sm">(4-7 días hábiles)</p>
                    <p class="text-sm text-gray-400">Gratis</p>
                </div>

                {/* Método de Pago */}
                <div className="border-b-2  border-gray-800 w-full py-4">
                    <p className="text-base font-bold">Método de Pago</p>
                </div>
                <div className="flex flex-col py-2 ml-4">
                    <div className="border-b  border-gray-200 py-1">
                        <p className="text-sm font-semibold py-2">Nombre del titular</p>
                        <p className="text-sm font-normal text-gray-400">Juan López Vargas</p>
                    </div>
                    <div className="border-b  border-gray-200 py-1">
                        <p className="text-sm font-semibold py-2">Número de Tarjeta</p>
                        <p className="text-sm font-normal text-gray-400">0000 0000 0000 0000</p>
                    </div>
                </div>
                {/* Resumen de la Compra */}
                <div className="border-b-2  border-gray-800 w-full py-4">
                    <p className="text-base font-bold">Resumen de Compra</p>
                </div>

                <div class="px-4 w-full flex flex-col">
                    <div class="w-full mb-5">
                        <div className="border-b  border-gray-200 py-1">
                            <div class="w-full flex justify-between items-center">
                                <p class="text-sm font-semibold my-3 ">Parlante awai x2</p>
                                <p class="text-sm  my-3">$200</p>
                            </div>
                            <p class="text-sm font-normal text-gray-400">Envío gratis</p>
                        </div>

                    </div>
                    <div class="w-full flex justify-between items-center py-5 border-b border-gray-800 border-dotted">
                        <p class="font-sm font-semibold">TOTAL</p>
                        <p class="font-sm font-semibold">$200</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-row justify-center py-4">
                <button className="flex bg-blue-400 rounded-md text-white uppercase font-semibold text-sm p-2 hover:cursor-pointer mb-8" >Seguir pedido</button>
                {/* <a class="mb-4 text-xs text-center hover:cursor-pointer m-auto w-2/3 bg-indigo-700 hover:bg-indigo-800 uppercase text-white rounded-md py-2 px-4" href="/checkout">Finalizar compra</a> */}
            </div>
        </div>
    )
}

export default ComprasDetalle