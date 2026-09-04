import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal
  } = useCart();


  if (cart.length === 0) {
    return (
      <div className="cart-page">

        <h1>Your Cart</h1>

        <div className="empty-cart">
          <h2>🛒 Your cart is empty</h2>

          <p>
            Add some products to your cart.
          </p>
        </div>

      </div>
    );
  }


  return (
    <div className="cart-page">

      <h1>Your Shopping Cart</h1>


      <div className="cart-items">

        {cart.map((item) => (

          <div
            className="cart-item"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
            />


            <div className="cart-item-info">

              <h3>
                {item.name}
              </h3>

              <p>
                {item.category}
              </p>

              <h4>
                ₹{item.price}
              </h4>


              <div className="quantity">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  -
                </button>


                <span>
                  {item.quantity}
                </span>


                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

              </div>


              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>


            <div className="item-total">

              ₹{item.price * item.quantity}

            </div>

          </div>

        ))}

      </div>


      <div className="cart-summary">

        <h2>
          Cart Summary
        </h2>

        <h3>
          Total: ₹{cartTotal}
        </h3>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
};

export default Cart;