import React from "react";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

const ProductTable = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Top Selling Products
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-400 font-normal">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-normal">
                    Price
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-normal">
                    Quantity
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-normal">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="py-4 px-4 text-gray-900">{product.name}</td>
                    <td className="py-4 px-4 text-gray-900">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-gray-900">
                      {product.quantity}
                    </td>
                    <td className="py-4 px-4 text-gray-900">
                      ${product.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
