import React from 'react';
import "./Header.css";

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";

import {useStateValue} from "../../StateProvider"

function Header() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="header_logo">
                <StoreIcon className="header_logoImage" fontSize="large"></StoreIcon> 
                <h2 className="header_logoTitle">eShop</h2>
                </div>
            </Link>
            
            
            <div className="header_search">

                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_nav">
                <div className="nav_item">
                <span className="nav_itemOne">Hello Guest</span>
                <span className="nav_itemTwo">Sign In</span>
                </div>

                <div className="nav_item">
                <span className="nav_itemOne">Your</span>
                <span className="nav_itemTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{textDecoration:"none"}}>
                    <div className="nav_item">
                    <ShoppingBasketIcon className="itemBasket" />
                    <span className="nav_itemTwo nav_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>  
        </div>
    )
}

export default Header
