import React from "react";

const CheckOutFormCard = () => {
  return (
    <div>
      {/* Metodo de pago */}
      <div className="w-11/12 m-auto py-5 border-b border-gray-800 border-dotted mb-5">
        <h3 className="font-semibold text-gray-800 text-center mb-5">
          Método de pago
        </h3>

        {/* Formulario para completar */}
        {/* Input */}
        <div className="flex flex-col gap-1 mb-3">
          <label className="text-sm font-semibold text-gray-800" htmlFor="name">
            Nombre del titular:{" "}
          </label>
          <input
            className="bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800"
            type="text"
            id="name"
            placeholder="Ingresa nombre"
          />
        </div>
        {/* Input */}
        <div className="flex flex-col gap-1 mb-3">
          <label
            className="text-sm font-semibold text-gray-800"
            htmlFor="lastname"
          >
            Numero de tarjeta:{" "}
          </label>
          <input
            className="bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800"
            type="text"
            id="lastname"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div className="flex w-full justify-between">
          {/* Input */}
          <div className="flex flex-col w-5/12 gap-1 mb-3">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="dni"
            >
              CVC/CVV{" "}
            </label>
            <input
              className="bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800"
              type="text"
              id="dni"
              placeholder="***"
            />
          </div>
          {/* Input */}
          <div className="flex flex-col w-5/12 gap-1 mb-3">
            <label
              className="text-sm font-semibold text-gray-800"
              htmlFor="dni"
            >
              Vencimiento *{" "}
            </label>
            <input
              className="bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800"
              type="text"
              id="dni"
              placeholder="MM/YY"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutFormCard;
