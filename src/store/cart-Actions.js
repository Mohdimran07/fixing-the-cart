import { cartActions } from "./cart-Slice";
import { uiActions } from "./Ui-Slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-cart-f582a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!res.ok) {
        throw new Error("sending cart data failed!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!...",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async(dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-f582a-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("fetching cart data failed!");
      }
      const Data = await response.json();
      return Data;
    };
    try{
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
      }))
    } catch (error) {
        dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error!...",
              message: "Fetching cart data failed",
            })
          );
    }
  };
};
