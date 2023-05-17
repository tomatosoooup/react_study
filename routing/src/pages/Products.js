import { Link } from "react-router-dom";

function Products() {
  const style = { "text-align": "center" };

  const PRODUCTS = [
    { id: "p1", name: "product-1" },
    { id: "p2", name: "product-2" },
    { id: "p3", name: "product-3" },
  ];
  return (
    <>
      <div style={style}>My Products Page</div>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
