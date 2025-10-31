import { useState } from "react";
import data from "../data.js";
import MenuItem from "./MenuItem.jsx";


const MenuList = () => {
    const [items, setItems] = useState(data);

    return (
        <section>
            <h1>Our Menu</h1>

            {items.map(item => (
                <MenuItem img={item.img} title={item.title} category={item.category} price={item.price} description={item.desc} />
            ))}
        </section>
    );
}

export default MenuList;