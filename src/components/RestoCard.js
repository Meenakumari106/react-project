import { CDN_URL } from "./utils/constants";

const RestoCard = (props) => {
    const {resData}=props;//console.log(resData.info);
     const {name,cloudinaryImageId,locality,costForTwo,cuisines,avgRating}=resData?.info;
    return (
        <div className='restocard' >
            <img className="imglogo" src={CDN_URL+cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h3>{avgRating}STARS</h3>
            <h5 className='cuisines'>{cuisines.join(",")}</h5>   
            
            <h5 className='location'>{locality}</h5>
            <h5 className='offer'>{costForTwo}</h5>
        </div>
    );
}
export default RestoCard;
