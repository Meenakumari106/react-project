import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/constants";
import Rescategory from "./Rescategory";


const Restramenu = () => {
  const [resInfo, setresinfo] = useState(null);
  const { resId } = useParams();
  const [showIndex,setShowIndex]=useState(null);
  //console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    //  console.log("this is restramenu")
    //  console.log(json);
    setresinfo(json.data);
    // console.log(json.data);

  }; //console.log(resInfo);
  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  //console.log(categories);
  //console.log(categories[0].card.card);
  return resInfo === null ? <Shimmer /> : (

    <div className="restramenu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      {categories.map((category, index) => {//console.log(category)
        return <Rescategory
          key={index}
          data={category.card.card}
          //controlled component

          showItems={index===showIndex ? true:false}
          setShowIndex={ () => setShowIndex(index)}
          />
      })}

    </div>

  )

}
export default Restramenu;