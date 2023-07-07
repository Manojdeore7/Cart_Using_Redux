import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
let DATA = [
  {
    id: 1,
    price: 6,
    title: "my first book",
    description: "This is a first product",
  },
  {
    id: 2,
    price: 5,
    title: "my second book",
    description: "This is a second product",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
