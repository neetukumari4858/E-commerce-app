import "./ProductFilter.css";
const ProductFilter=()=>{
    return(
    <div className="side-bar">
        <div clasName="filter-div">
            <h3 clasName="filter-heading">&nbsp; &nbsp;&nbsp; FILTERS</h3>
        </div>
        <ul className="unordered-list">
            <h3 clasName="filter-items-heading">Price</h3>
            <li clasName="sidebarItem">
                <span>100  150   200</span>
                <input type="range" min="0" max="100" value="50"/>
            </li>

            <h3 clasName="filter-items-heading">Sort</h3>
            <li clasName="sidebarItem">
                <input type="radio" clasName="filter-item" value="price low to high" name="sort-btn"/>Price Low to high
            </li>
            <li clasName="sidebarItem">
                <input type="radio" value="price low to high" name="sort-btn"/>Price High to Low
            </li>

            <h3 clasName="filter-items-heading">Categories</h3>
            <li clasName="sidebarItem">
                <input type="checkbox" value="Men" name="categories-btn"/>Men
            </li>
            <li clasName="sidebarItem">
                <input type="checkbox" value="Woman" name="categories-btn"/>Woman
            </li>

            <h3 clasName="filter-items-heading">Brand</h3>
            <li clasName="sidebarItem">
                <input type="checkbox" value="Reebok" name="Brand-btn"/>Reebok
            </li>

            <li clasName="sidebarItem">
                <input type="checkbox" value="Lotto" name="Brand-btn"/>Lotto
            </li>
            <li clasName="sidebarItem">
                <input type="checkbox" value="Fila" name="Brand-btn"/>Fila
            </li>
            <li clasName="sidebarItem">
                <input type="checkbox" value="Hummel" name="Brand-btn"/>Hummel
            </li>
            <li clasName="sidebarItem">
                <input type="checkbox" value="Asics" name="Brand-btn"/>Asics
            </li>
            
            <h3 clasName="filter-items-heading">Rating</h3>
            <li clasName="sidebarItem">
                <input type="radio" clasName="filter-item" value="price low to high" name="sort-btn"/>4 stars & above
            </li>
            <li clasName="sidebarItem">
                <input type="radio" value="price low to high" name="sort-btn"/>3 stars & above
            </li>
            <li clasName="sidebarItem">
                <input type="radio" clasName="filter-item" value="price low to high" name="sort-btn"/>2 stars & above
            </li>
            <li clasName="sidebarItem">
                <input type="radio" value="price low to high" name="sort-btn"/>1 stars & above
            </li>

            <hr></hr>
            <button className="clear-btn">Clear Filter</button>
        </ul>
    </div>

    )
};
export {ProductFilter};
