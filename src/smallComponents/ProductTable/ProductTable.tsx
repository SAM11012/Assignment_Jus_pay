

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
    <div
      className="p-6 flex flex-col gap-4 "
      style={{ borderRadius: "16px", width: "100%",backgroundColor: "var(--content-bg-color)" }}
    >
      <h1
        className=""
        style={{
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          color:'var(--conter-title-text)'
        }}
      >
        Top Selling Products
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b" style={{borderColor: 'var(--mini-table-header-border)'}}>
              <th
                className="text-left py-3 px-4"
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "var(--mini-table-head-text)",
                }}
              >
                Name
              </th>
              <th
                className="text-left py-3 px-4"
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "var(--mini-table-head-text)",
                }}
              >
                Price
              </th>
              <th
                className="text-left py-3 px-4"
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "var(--mini-table-head-text)",
                }}
              >
                Quantity
              </th>
              <th
                className="text-left py-3 px-4"
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "var(--mini-table-head-text)",
                }}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className=" last:border-b-0">
                <td
                  className="py-4 px-4"
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--mini-table-body-text)",
                  }}
                >
                  {product.name}
                </td>
                <td
                  className="py-4 px-4"
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--mini-table-body-text)",
                  }}
                >
                  ${product.price.toFixed(2)}
                </td>
                <td
                  className="py-4 px-4"
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--mini-table-body-text)",
                  }}
                >
                  {product.quantity}
                </td>
                <td
                  className="py-4 px-4"
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--mini-table-body-text)",
                  }}
                >
                  ${product.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
