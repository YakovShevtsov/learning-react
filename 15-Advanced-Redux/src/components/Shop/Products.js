import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
    id: "p1",
  },
  {
    title: "Test2",
    price: 12,
    description: "This is a second product - amazing!",
    id: "p2",
  },
  {
    title: "Test3",
    price: 24,
    description: "This is a third product - amazing!",
    id: "p3",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
