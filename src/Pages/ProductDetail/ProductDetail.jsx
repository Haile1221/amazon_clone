import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";
import axios from "axios";
import { ProductUrl } from "../../Api/EndPoints";
import ProductCard from "../../amazonComponents/Product/ProductCard";
import LayOut from "../../amazonComponents/LayOut/LayOut";
import Loader from "../../amazonComponents/Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ProductUrl}/products/${productId}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <LayOut>
      {isloading ? (
        <Loader />
      ) : (
        <ProductCard product={product}
        
        flex={true}
        renderDesc={true}
        renderAdd={true}
        />
      )}
    </LayOut>
  );
};

export default ProductDetail;