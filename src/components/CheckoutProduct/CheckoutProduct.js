import React from "react";
import "./CheckoutProduct.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from "../../StateProvider";

function CheckoutProduct(props) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.id
        })
    }
    return (
            <div className="checkoutProduct">
                <img src={props.image} alt="" className="checkoutProduct_image" />
                <div className="product_info">
                    <p className="checkoutProduct_title">{props.title}</p>
                    <p className="checkoutProduct_price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(props.rating).fill().map((_,i)=>(
                            <StarRateIcon/>
                        ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
    )
}

export default CheckoutProduct
