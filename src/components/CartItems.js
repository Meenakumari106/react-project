
import { CDN_URL } from "./utils/constants";



const ItemList = ({ items }) => {
   
    
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
                        <img src={CDN_URL + item.card.info.imageId} className="image-items" />
                    </div>

                   
                </div>

            )}



        </div>
    )
}

export default ItemList;