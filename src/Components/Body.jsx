import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/Constants.jsx";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";

const Body = () => {
  // let resListData = resList;
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterOfRestaurant, setFilterOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-section">
        <button
          className="top-rated-btn"
          onClick={() => {
            const filterData = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log(filterData);
            setFilterOfRestaurant(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
        <span className="search-section">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("Searching for:", searchText);
              const filterData = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(filterData);
              setFilterOfRestaurant(filterData);
              // Implement search functionality here
            }}
          >
            Search
          </button>
        </span>
      </div>
      <div className="restaurant-list">
        {filterOfRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard
              img={restaurant.info.cloudinaryImageId}
              name={restaurant.info.name}
              cuisine={restaurant.info.cuisines.join(", ")}
              avgRating={restaurant.info.avgRating}
              time={restaurant.info.sla.deliveryTime + " mins"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
