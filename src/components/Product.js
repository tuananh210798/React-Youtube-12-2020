import React from 'react';

const Product = (props) => {

    function onAddToCart(text) {
        alert(text);
        console.log(text);
    }



    return (

        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <div className="thumbnail">
                <img data-src="" alt="" src={props.image} />
                <div className="caption">
                    <h3>{props.children}</h3>
                    <p>
                        {props.price}VND
                  </p>

                </div>
                <button type="button" class="btn btn-success" onClick={() => onAddToCart(props.children)}>Mua hang</button>
            </div>



        </div>




    );
};

export default Product;