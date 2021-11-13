import React from "react";
import "./Home.css";
import Proudct from "../Product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p.jpg"
                 width="100%" alt="" className="home_image" />
                <div className="home_row">
                    <Proudct 
                        id="0" title="Title" price={5} rating={5} image=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
