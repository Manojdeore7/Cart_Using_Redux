import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
const ProductItem = (props) => {
  const { id, title, price, description } = props;
  console.log(id);
  let dispatch = useDispatch();
  function cartHandler() {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        description,
      })
    );
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
