import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  let ITEMS = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {ITEMS.map((Item, i) => (
          <CartItem
            item={{
              id: Item.id,
              quantity: Item.quantity,
              title: Item.name,
              price: Item.price,
              total: Item.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
