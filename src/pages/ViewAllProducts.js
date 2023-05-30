import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import useActive from "../hooks/useActive";
// import productsData from "../../data/productsData";
import ProductCard from "../components/product/ProductCard";
import { useEffect,useState } from "react";
import { Api } from "../utils/Api";
import { getAllProductEndpoint } from "../utils/Endpoint";
const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
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

  return (
    <>
      <div className="wrapper products_wrapper">
        {products &&
          products
            .slice(0, 11)
            .map((item) => <ProductCard key={item.id} {...item} />)}
            <div className="card products_card browse_card">
                    <Link to="/all-products">
                        Browse All <br /> Products <BsArrowRight />
                    </Link>
                </div>
      </div>
    </>
  );
};

export default ViewAllProducts;
