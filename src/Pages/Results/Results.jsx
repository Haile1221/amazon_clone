// console ninja
import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import axios from "axios";
import LayOut from "../../amazonComponents/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { ProductUrl } from "../../Api/EndPoints";
import ProductCard from "../../amazonComponents/Product/ProductCard";
import Loader from "../../amazonComponents/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  console.log(categoryName);
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}> Results</h1>
        <p style={{ padding: "30px" }}> Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} 
              renderDesc={false}
              renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;
