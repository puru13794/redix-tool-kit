import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 20, title: "iphone", desc: "apple iphone" },
  { id: "p2", price: 40, title: "mi phone", desc: "xiami phone" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.desc}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
