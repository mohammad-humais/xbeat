import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';


const ProductCard = (props) => {

    const {name} = props;
    const { productID, productImage,productName,productFollowers, productDescription, productPrice } = props.products;
    const {title } = props.products.subcategory;
    console.log('props',props)
// console.log('productID',productID)
// console.log('productImage',productImage)
// console.log('productName',productName)
// console.log('productDescription',productDescription)
// console.log('productPrice',productPrice)
// console.log('productPrice',productPrice)

    // const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // // handling Add-to-cart
    // const handleAddItem = () => {
    //     const item = { ...props };
    //     addItem(item);

    //     handleActive(id);

    //     setTimeout(() => {
    //         handleActive(false);
    //     }, 3000);
    // };

    // const newPrice = displayMoney(finalPrice);
    // const oldPrice = displayMoney(originalPrice);

    return (
        <>
            <div className="card products_card">
                <figure className="products_img" style={{"height": "180px"}}>
                    {/* <Link to={`${productID}`}> */}
                    <img src={`http://localhost:8083/images/${productImage[0]}`}/>
                    {/* </Link> */}
                </figure>
                <div className="products_details">
                    {/* <span className="rating_star">
                        {
                            [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                        }
                    </span> */}
                    <h3 className="products_title">
                        <Link to={`${productID}`}>{productName}</Link>
                    </h3>
                    <h5 className="products_info">{productDescription}</h5>
                    <div className="separator"></div>
                    <h4 className="products_follwers">{`${productFollowers} Follwers`}</h4><br></br>
                    <h3 className="products_price">
                        {`${productPrice}    `} 
                        <small><del>{`${Number(productPrice) +100} PKR`}</del></small>
                    </h3>
                    <button
                        type="button"
                         className={`btn products_btn ${activeClass(productID)}`}
                        // onClick={handleAddItem}
                    >
                        {/* {active ? 'Added' : 'Add to cart'} */}
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;