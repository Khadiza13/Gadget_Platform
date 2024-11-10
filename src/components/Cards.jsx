import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();
  const { category = "All Product" } = useParams();
  console.log(data);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!category || category === "All Product") {
      setProducts(data);
    } else {
      const filtered = data.filter((product) => product.category === category);
      setProducts(filtered);
    }
  }, [category, data]);
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
};

export default Cards;
