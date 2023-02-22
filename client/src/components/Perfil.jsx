import React from 'react'
import { Link } from 'react-router-dom'
import UserProfileImg from '../img/user_profile.png'

const Perfil = () => {
    return (
        <div className="w-10/12 m-auto">

            <div className="flex flex-wrap justify-center relative -bottom-6">
                <div className="w-5/12 flex flex-wrap justify-center">
                    <img src={UserProfileImg} alt="user profile image" className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
            </div>

            <div>
                <div className='flex justify-center w-full border-b border-gray-800 pt-6'>
                    <p className='text-sm text-center font-medium text-gray-800 py-4 mb-1'>
                        Otros datos / personales
                    </p>
                </div>

                <div className="border-b  border-gray-800 py-4">
                    <div className='flex w-full justify-between'>
                        <div className="mb-2">
                            <p className="text-sm">Mis datos</p>
                            <p className="text-xs">Valida y edita tus datos</p>
                        </div>
                        <div className='my-auto'>                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> </div>
                    </div>

                    <div className='flex w-full justify-between'>
                        <div className="my-auto">
                            <p className="text-sm">Mis tarjetas</p>
                            <p className="text-xs">Gestiona tus tarjetas</p>
                        </div>
                        <div className='my-auto'>                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> </div>
                    </div>

                </div>

                <div className="border-b  border-gray-800 py-4">
                    <div className='flex w-full justify-between'>
                        <div className="mb-2">
                            <Link to='/miscompras'>
                                <p className="text-sm">Mis compras</p>
                            </Link>
                        </div>
                        <div className='my-auto'>                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> </div>
                    </div>

                    <div className='flex w-full justify-between'>
                        <div className="my-auto">
                            <p className="text-sm">Seguir Pedidos</p>
                        </div>
                        <div className='my-auto'>                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> </div>
                    </div>

                </div>

                <div className="py-4">
                    <div className='flex w-full justify-between'>
                        <div className="mb-2">
                            <p className="text-sm">Seguridad</p>
                        </div>
                        <div className='my-auto'>                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> </div>
                    </div>

                    <div className='flex w-full justify-between'>
                        <div className="my-auto">
                            <p className="text-sm">Suscripción</p>
                        </div>
                        <div className='my-auto'>                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> </div>
                    </div>

                </div>

                <button className='w-full rounded-md bg-white text-red-400 border border-red-400 font-semibold text-sm py-2 hover:cursor-pointer mb-8'>Cerrar sesión</button>
            </div>
        </div>
    )
}

export default Perfil