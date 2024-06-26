import React from 'react'

function ProductItem(props) {
    return (
        <>

            <div className="image-holder">
                <img src={props.img} alt={props.imgAlt} className="product-image" />
            </div>
            <div className="cart-concern">
                <div className="d-flex justify-content-between align-items-center cart-button">
                    <button type="button" className="d-flex align-items-center btn-wrap cart-link">add to cart <i className="icon-arrow-io icon"></i>
                    </button>
                    <button type="button" className="d-flex view-btn tooltip">
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                    </button>
                </div>
            </div>
            <div className="product-detail">
                <h3 className="product-title">
                    <a href={props.link}>{props.title}</a>
                </h3>
                <span className="item-price text-primary">${props.price}</span>
            </div>
        </>
    )
}

export default ProductItem