import { useState } from "react";
import data from "./opdracht-04-menu/data.js"
import Menu from "./Menu.jsx"

const MenuList = () => {
    const [items, setItems] = useState(data);

    return (
        <section>
            <h1>Our Menu</h1>
            <MenuList item ={items}/>
        </section>
    );
}
 
export default MenuList;