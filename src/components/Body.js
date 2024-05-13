import RestoCard from "./RestoCard";
import Shimmer from "./shimmer";
// import resList from "./utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchdata, setSearchdata] = useState("");
    const [filtered, setFiltered] = useState([]);

    const fetchData = async () => {
        //console.log("fetcj")
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4385553&lng=79.1288412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            
        );
        const json = await data.json();
        //console.log(json);
        setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFiltered(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() => {
        //console.log("aAAA")
        fetchData();
    }, []);
    //spinner
    // if(listOfRestaurants.length===0)
    // {
    //     return <h1>Loading...</h1>;
    // }
    //console.log(listOfRestaurants)
    // if(listOfRestaurants.length===0)
    // {
    //     return <Shimmer/>
    // }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" placeholder="search for restraunts,food,price,landmark here..."
                        value={searchdata}
                        onChange={(e) => {
                            setSearchdata(e.target.value)
                        }} />
                    {/* <i class='bx bxs-search'></i> */}
                    <button
                        onClick={() => {
                            // console.log(searchdata);
                            console.log("eneter")
                            const filterdrestra = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchdata.toLowerCase()) ||
                                res.info.costForTwo.toLowerCase().includes(searchdata.toLowerCase()) ||
                                res.info.cuisines.some((cuisine) =>  //some fun checks if there exits some index which satisifes the mentioned condition
                                cuisine.toLowerCase().includes(searchdata.toLowerCase()))||
                                res.info.locality.toLowerCase().includes(searchdata.toLowerCase())

                            );
                           //console.log(filterdrestra);
                            setFiltered(filterdrestra);//modifying the copy of listofrestars intsead of original
                        }}

                    >
                        Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => 
                        res?.info?.avgRating > 4);
                        //console.log("this is flitered list")
                       // console.log(filteredList)
                        setFiltered(filteredList);//modifying copy of listof restras instead of original one
                        
                         //console.log(filteredList);
                    }}

                > TOP RATED RESTAURANT</button>
            </div>
            <div className='res-container' >
                {/* <RestoCard resData={resList[0]} />
                <RestoC ard resData={resList[1]} />
                <RestoCard resData={resList[2]} />
                <RestoCard resData={resList[3]} />
                <RestoCard resData={resList[4]} />
                <RestoCard resData={resList[5]} />
                <RestoCard resData={resList[6]} />
                <RestoCard resData={resList[7]} />
                <RestoCard resData={resList[8]} />
                <RestoCard resData={resList[9]} /> */}


                {/* <RestoCard resname="KFC" cusinie="French fries,Burger" cui="Cheese,Coco-Cola" />
                <RestoCard resname="REVATHI DESSERTS" cusinie="Laddu,Jammun" cui="Kalakand,Sonpapid" />
                <RestoCard resname="POOJA PIZZA HUT" cusinie="Chicken Pizza,Veg Pizza" cui="Cheese Pizza" />
                <RestoCard resname="KARTHI DRINKS" cusinie="All Soft Drinks" cui="HARD DRINKS" /> */}
                {
                    filtered?.map((restar, index) => {//console.log(restar)
                        return ( <Link 
                                     key ={restar.info.id}
                                     to={"/restaurants/"+restar.info.id}  style={{ textDecoration: 'none' }}><RestoCard key={index} resData={restar} /></Link>)
                    }
                    )
                }
            </div>
        </div>
    );
}
export default Body;