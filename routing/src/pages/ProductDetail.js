import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>This is product - {params.productId}</p>
      <button>
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </>
  );
}

export default ProductDetailPage;
