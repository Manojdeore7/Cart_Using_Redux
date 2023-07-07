import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./Store/ui-slice";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";
import { cartActions } from "./Store/cart-slice";
let notification = true;
function App() {
  let toggle = useSelector((state) => state.ui.cartIsVisible);
  let obj = useSelector((state) => state.ui.notification);
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  useEffect(() => {
    let getData = async () => {
      let response = await fetch(
        "https://reduxstore-751e1-default-rtdb.firebaseio.com/store.json"
      );
      if (!response.ok) {
        throw new Error("data is not get");
      }
      let data = response.json();
      return data;
    };

    getData()
      .then((data) => {
        dispatch(cartActions.add(data));
      })
      .catch((error) => {
        dispatch(
          uiActions.showNOtification({
            status: "error",
            title: "Error in getting data",
            message: `Cart data getting is failed! ${error}`,
          })
        );
      });
  }, [dispatch]);

  useEffect(() => {
    const cartFun = async () => {
      dispatch(
        uiActions.showNOtification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
      let response = await fetch(
        "https://reduxstore-751e1-default-rtdb.firebaseio.com/store.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("data is not send");
      }
      dispatch(
        uiActions.showNOtification({
          status: "success",
          title: "completed",
          message: "cart data is sent!",
        })
      );
    };
    if (notification) {
      notification = false;
      return;
    }
    cartFun().catch((error) => {
      dispatch(
        uiActions.showNOtification({
          status: "error",
          title: "not Send",
          message: `cart data sending is failed! ${error}`,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      <Notification
        status={obj.status}
        title={obj.title}
        message={obj.message}
      />

      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
