
import { LOGO_URL } from "./utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import {useSelector} from "react-redux";
const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("login");
    const {loggedInUser}=useContext(UserContext);

    //subscribing to store using selector
  const cartItems=useSelector( (store) =>  store.cart.items);
    // console.log(cartItems);


    return (
        <div className='header'>
            <div className='Logo-container' >
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <Link to="/"> <li className="list-header" 
                    >Home</li></Link>
                    <Link to="/about"><li className="list-header">About US</li></Link>
                    <Link to="/contactus"><li className="list-header">Contact Us</li></Link>
                    <Link to="/Cart"> <li className="list-header">Cart-({cartItems.length}) </li></Link>
                    <button className="login"
                        onClick={() => {
                            btnNameReact === "login"
                                ? setBtnNameReact("Logout") : setBtnNameReact("login");
                        }}>{btnNameReact}</button>
                      {/* <li className="list-header">{loggedInUser}</li>  */}
                </ul>
            </div>
        </div>

    )
};
//we will export the component to make it import in below mentioned way\
export default Header
