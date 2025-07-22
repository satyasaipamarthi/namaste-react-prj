import { Img_URL } from "../utils/Constants";

const RestaurantCard = ({ img, name, cuisine, avgRating, time }) => {
  return (
    <div className="restaurant-card">
      <img src={Img_URL + img} alt="Restaurant" className="img-style" />
      <span className="text">{name}</span>
      <span className="text">{cuisine}</span>
      <span className="text">{avgRating}</span>
      <span className="text">{time}</span>
    </div>
  );
};

export default RestaurantCard;
