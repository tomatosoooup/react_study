import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "First product",
    price: 6,
    description: "blap-blar-blak",
  },
  {
    id: "p2",
    title: "Second product",
    price: 3,
    description: "bla-bla-bla",
  },
];

const filteredProducts = DUMMY_PRODUCTS.map((product) => (
  <ProductItem
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />
));

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{filteredProducts}</ul>
    </section>
  );
};

export default Products;
