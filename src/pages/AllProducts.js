import React, { useContext,useState,useEffect } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import useDocTitle from '../hooks/useDocTitle';
import FilterBar from '../components/filters/FilterBar';
import ProductCard from '../components/product/ProductCard';
import Services from '../components/common/Services';
import filtersContext from '../contexts/filters/filtersContext';
import EmptyView from '../components/common/EmptyView';
import { Api } from "../utils/Api";
import { getAllProductEndpoint } from "../utils/Endpoint";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useDocTitle('All Products');

    const getAllProducts = async () => {
        const { statusCode, data } = await Api.getAllProducts(
          getAllProductEndpoint,
          {}
        );
        console.log("View all data", data);
        if(statusCode === true){
        setProducts(data);
        }
    
      };
      useEffect(() => {
        getAllProducts();
      }, []);
    // const { allProducts } = useContext(filtersContext);


    return (
        <>
            <section id="all_products" className="section">
                <FilterBar />

                <div className="container">
                    {
                        products.length ? (
                            <div className="wrapper products_wrapper">
                                {
                                    products.map(item => (
                                        <ProductCard
                                            key={item.id}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <EmptyView
                                icon={<BsExclamationCircle />}
                                msg="No Results Found"
                            />
                        )
                    }
                </div>
            </section>

            <Services />
        </>
    );
};

export default AllProducts;