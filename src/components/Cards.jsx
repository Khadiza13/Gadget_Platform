import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.map((item) => {
        <Card item={item}></Card>;
      })}
    </div>
  );
};

export default Cards;
