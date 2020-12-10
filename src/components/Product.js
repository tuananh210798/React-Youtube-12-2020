import React from 'react';

const Product = (props) => {
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
            </div>

            <button type="button" class="btn btn-success">Mua hang</button>

        </div>




    );
};

export default Product;