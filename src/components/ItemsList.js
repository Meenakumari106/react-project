
import { CDN_URL } from "./utils/constants";
import { addItem } from "./utils/cartSlice";
import {useDispatch} from "react-redux";


const ItemsList = ({ items }) => {
    // const name = card?.info?.name;
    // const name = props.items.card.info.name;
// console.log(items);
  const dispatch= useDispatch();

   const  handleAddItem = (item) =>{
    //dispacth an action
    dispatch(addItem(item));
   }
    
    return (
        <div >
 
            {items.map(item =>
                <div key={item.card.info.id} className="items">
                    
                    <div className="forwidth">
                        <div className="items-name">
                            <span>{item.card.info.name}</span>
                            <span>${item.card.info.price / 100}</span>
                            {/* <p></p> */}
                        </div>
                    </div>
                    <div className="forw">
                        <div className="addbutton">
                            <button className="but"
                              onClick={() => handleAddItem(item)}
                            
                            >Add +</button>
                            </div>
                        <img src={CDN_URL + item.card.info.imageId} className="image-items" />
                    </div>

                   
                </div>

            )}



        </div>
    )
}

export default ItemsList;