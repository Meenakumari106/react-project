import ItemsList from "./ItemsList";
import { useState } from "react";
const Rescategory = ({ data,showItems,setShowIndex }) => {
    //  const {data}=item;
    // const {itemCards,title}=data;
    //console.log(itemCards);
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // console.log("clicked")
        // setShowItems(!showItems);
        setShowIndex();//will be updated  on click
    };
    return (
        <div>
            <div className="acodium">
                <div className="acodium-inside" onClick={handleClick}>
                    <span>{data.title}({data.itemCards.length})</span>
                    <span>🔻</span>
                </div>

                {showItems && <ItemsList items={data.itemCards} />}
            </div>

        </div>
    );
}
export default Rescategory;