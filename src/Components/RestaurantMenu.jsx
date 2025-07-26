import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResMenu_API } from "../utils/constants";
import Shimmer from "./Shimmer.jsx";
import { Res_Menu_Img } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    //   const data = await fetch(ResMenu_API + resId);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);

    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
  };
  if (resMenu === null) return <Shimmer />;
  const { name, price, imageId, category, ratings, description } =
    resMenu?.itemCards[0]?.card?.info;

  return (
    <div className="res-menu-card">
      <div>
        <h1>{name}</h1>
        <p>{category}</p>
        <p>{description}</p>
        <p>Price: {price / 100}</p>
        <p>{ratings?.aggregatedRating?.rating}</p>
      </div>
      <div>
        <img src={Res_Menu_Img + imageId} alt={name} className="res-menu-img" />
      </div>
    </div>
  );
};

export default RestaurantMenu;
