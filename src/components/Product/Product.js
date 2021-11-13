import React from 'react';
import "./Product.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from "../../StateProvider"

function Proudct(props) {
    const [{state}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
    };
    return (
            <div className="product">
                <div className="product_info">
                    <p>{props.title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(props.rating).fill().map((_,i)=>(
                            <StarRateIcon/>
                        ))}
                    </div>
                </div>

                <img src={props.image} alt="" />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
    )
}

export default Proudct
