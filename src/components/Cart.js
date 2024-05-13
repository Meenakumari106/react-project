import { useSelector } from "react-redux";
import { CART_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import ItemList from "./cartitems";
import { clearCart } from "./utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
          dispatch(clearCart());
    };

    return (
        <div className="cart-design">
            <h2>MY-CART</h2>
            <button
                className="clearcart"
                onClick={handleClearCart}
            >
                ClearCart</button>
            {cartItems.length ===0 &&   
            <div className="cartempty" >
                 <img className="cutecartgirl"src={CART_URL}></img>
                <h3>CART IS EMPTY!!ADD ITEMS</h3>
                 </div>}
            <div className="cartitems">

                <ItemList items={cartItems} />
            </div>

        </div>);
}
export default Cart;