import "./ProductFilter.css";
const ProductFilter=()=>{
    return(
    <div className="side-bar">
        <div className="filter-div">
            <h3 className="filter-heading">FILTERS</h3>
        </div>
        <ul className="unordered-list">
            <h3 
            className="filter-items-heading">Price</h3>
            <li 
            className="sidebarItem">
                <span>100  150   200</span><br/><br/>
                <input type="range" min="0" max="100" /><br/><br/>
            </li>

            <h3 
            className="filter-items-heading">Sort</h3>
            <li 
            className="sidebarItem">
                <input type="radio" 
                className="filter-item"  name="sort-btn"/>Price Low to high
            </li>
            <li 
            className="sidebarItem">
                <input type="radio"  name="sort-btn"/>Price High to Low
            </li>

            <h3 
            className="filter-items-heading">Categories</h3>
            <li 
            className="sidebarItem">
                <input type="checkbox"  name="categories-btn"/>Men
            </li>
            <li 
            className="sidebarItem">
                <input type="checkbox" name="categories-btn"/>Woman
            </li>

            <h3 
            className="filter-items-heading">Brand</h3>
            <li 
            className="sidebarItem">
                <input type="checkbox"  name="Brand-btn"/>Reebok
            </li>

            <li 
            className="sidebarItem">
                <input type="checkbox"  name="Brand-btn"/>Lotto
            </li>
            <li 
            className="sidebarItem">
                <input type="checkbox"  name="Brand-btn"/>Fila
            </li>
            <li 
            className="sidebarItem">
                <input type="checkbox"  name="Brand-btn"/>Hummel
            </li>
            <li 
            className="sidebarItem">
                <input type="checkbox"  name="Brand-btn"/>Asics
            </li>
            
            <h3 
            className="filter-items-heading">Rating</h3>
            <li 
            className="sidebarItem">
                <input type="radio" 
                className="filter-item"  name="sort-btn"/>4 stars & above
            </li>
            <li 
            className="sidebarItem">
                <input type="radio"  name="sort-btn"/>3 stars & above
            </li>
            <li 
            className="sidebarItem">
                <input type="radio" 
                className="filter-item"  name="sort-btn"/>2 stars & above
            </li>
            <li 
            className="sidebarItem">
                <input type="radio"  name="sort-btn"/>1 stars & above
            </li>

            <hr></hr><br></br>
            <button className="clear-btn">Clear Filter</button>
            <br></br>
        </ul>
    </div>

    )
};
export {ProductFilter};
