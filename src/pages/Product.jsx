import axios from "axios";
import  { useEffect, useState } from "react";

export default function Products() {
  const [products, setproducts] = useState([]);
  const [isLoading, setisLoader] = useState(true);
  const [error, seterror] = useState("");

  const getproducts = async () => {
    try {
        
      const response = await axios.get(
        "https://dummyjson.com/products",
      );
      setproducts(response.data.products);
    } catch (e) {
      seterror("error to load data");
    } finally {
      setisLoader(false);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <section className="products">
      <h2>all products </h2>
      {products.map((post) => {
        return (
          <div className="post">
            <h2>{post.title}</h2>
            <span>{post.description}</span>
                        <h4>{post.price}</h4>

          </div>
        );
      })}
    </section>
  );
}
