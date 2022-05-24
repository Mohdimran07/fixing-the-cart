import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Dummy_Product = [
  {
    id: "p1",
    price: 20,
    title: "My first book",
    description: "This is what happens",
  },
  {
    id: "p2",
    price: 40,
    title: "My secound book",
    description: "Side hustler",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Product.map((product) => (
           <ProductItem key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
