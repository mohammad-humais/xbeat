import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineDelete,
  AiOutlineClear,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { dropdownMenu } from "../../data/headerData";
import commonContext from "../../contexts/common/commonContext";
import cartContext from "../../contexts/cart/cartContext";
import AccountForm from "../form/AccountForm";
import SearchBar from "./SearchBar";
import './SearchNavbar.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const SearchNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { cartItems } = useContext(cartContext);
  const cartQuantity = cartItems.length;

    const [searchText, setSearchText] = useState('');
  
    const handleInputChange = (e) => {
      setSearchText(e.target.value);
    };
  
    const handleClearSearch = () => {
      setSearchText('');
    };
  
    const handleSearch = () => {
      // Perform search functionality here
      console.log('Search:', searchText);
    };

  const category = ['Category', 'Youtube', 'Facebook', 'Instagram', 'TikTok'];
  const subCategory = ['Sub Category', 'Technology', 'Gaming', 'Food', 'Travelling', 'Sports', 'Fitness'];
  const price = ['Price in PKR', '5000', '8000', '10,000', '15,000', '20,000', '30,000'];
  const followers = ['Followers', '1k', '2k', '5k', '10k', '20k', '50k', '100k'];

  const categoryDefaultOption = category[0];
  const subCategoryDefaultOption = subCategory[0];
  const priceDefaultOption = price[0];
  const followersDefaultOption = followers[0];

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('second-navbar');
      const navbarOffsetTop = navbar.offsetTop;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setIsSticky(scrollTop > navbarOffsetTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="second-navbar" className={`${isSticky ? 'sticky' : ''}`}>
      <header id="searchNavbar" >
        <div className="container">
            <nav className="second-nav">
              <div className="small-portion">

              </div>
              <div className="big-potion">

                <div className="cart_action item-hover ">
                <Dropdown options={category} onChange={""} value={categoryDefaultOption} placeholder="Select an option" />
                </div>

                <div className="cart_action item-hover ">
                <Dropdown options={subCategory} onChange={""} value={subCategoryDefaultOption} placeholder="Select an option" />
                </div>

                <div className="cart_action item-hover ">
                <Dropdown options={followers} onChange={""} value={followersDefaultOption} placeholder="Select an option" />
                </div>

                <div className="cart_action item-hover">
                <Dropdown  options={price} onChange={""} value={priceDefaultOption} placeholder="Select an option" />
                </div>

                <div className="search-bar">
                  <div className="search-bar-wrapper">
                    <input
                      type="text"
                      placeholder="Search here"
                      value={searchText}
                      onChange={handleInputChange}
                    />
                    {searchText && (
                      <button className="clear-button" onClick={handleClearSearch}>
                        <AiOutlineDelete />
                      </button>
                    )}
                  </div>
                  <button className="search-button" onClick={handleSearch}>
                    Search
                  </button>
                </div>
                <div>
                <button type="submit" className="btn">Clear All Filters</button>
                </div>
              </div>



              <div className="cart_action Icon-props item-hover small-portion" style={{"font-size": "2rem"}}>
                <Link to="">
                  <AiOutlineShoppingCart />
                  {cartQuantity > 0 && (
                    <span className="badge">{cartQuantity}</span>
                  )}
                </Link>
                {/* <div className="tooltip">Cart</div> */}
              </div>

            </nav>
        </div>
      </header>
    </nav>
  );
};

export default SearchNavbar;
