import React from 'react'
import { Link } from 'react-router-dom'

const CardDestacados = () => {
    return (
            <div className="flex flex-row w-11/12 max-w-sm min-h-36 min-w-fit rounded-md bg-white shadow-lg mx-auto mb-4 border border-gray-300">
                <img className="w-24 h-auto object-cover rounded-l-lg" src="https://cdn.idealo.com/folder/Product/201843/4/201843467/s11_produktbild_gross/logitech-signature-m650-large-pink.jpg" alt="" />
                <div className="flex flex-col justify-start w-full ml-2">
                    <h5 className="text-gray-900 text-2xl font-bold pt-6 mb-2 w-44 leading-7">Mouse Logitech</h5>

                    <div className="flex justify-between w-full">
                        <p className="text-gray-700 text-base my-auto">
                             Bluetooth M350 Rose
                        </p>
                            <Link>
                                <svg className='h-8 w-8' viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_502_6569" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31"><rect x="0.5" y="0.5" width="30" height="30" fill="#D9D9D9"/></mask><g mask="url(#mask0_502_6569)"><path d="M14.25 21.75H16.75V16.75H21.75V14.25H16.75V9.25H14.25V14.25H9.25V16.75H14.25V21.75ZM15.5 28C13.7708 28 12.1458 27.6719 10.625 27.0156C9.10417 26.3594 7.78125 25.4688 6.65625 24.3438C5.53125 23.2188 4.64063 21.8958 3.98438 20.375C3.32812 18.8542 3 17.2292 3 15.5C3 13.7708 3.32812 12.1458 3.98438 10.625C4.64063 9.10417 5.53125 7.78125 6.65625 6.65625C7.78125 5.53125 9.10417 4.64063 10.625 3.98438C12.1458 3.32812 13.7708 3 15.5 3C17.2292 3 18.8542 3.32812 20.375 3.98438C21.8958 4.64063 23.2188 5.53125 24.3438 6.65625C25.4688 7.78125 26.3594 9.10417 27.0156 10.625C27.6719 12.1458 28 13.7708 28 15.5C28 17.2292 27.6719 18.8542 27.0156 20.375C26.3594 21.8958 25.4688 23.2188 24.3438 24.3438C23.2188 25.4688 21.8958 26.3594 20.375 27.0156C18.8542 27.6719 17.2292 28 15.5 28ZM15.5 25.5C18.2917 25.5 20.6562 24.5312 22.5938 22.5938C24.5312 20.6562 25.5 18.2917 25.5 15.5C25.5 12.7083 24.5312 10.3438 22.5938 8.40625C20.6562 6.46875 18.2917 5.5 15.5 5.5C12.7083 5.5 10.3438 6.46875 8.40625 8.40625C6.46875 10.3438 5.5 12.7083 5.5 15.5C5.5 18.2917 6.46875 20.6562 8.40625 22.5938C10.3438 24.5312 12.7083 25.5 15.5 25.5Z" fill="#111928"/></g></svg>
                            </Link>

                    </div>
                </div>
            </div>
    )
}

export default CardDestacados