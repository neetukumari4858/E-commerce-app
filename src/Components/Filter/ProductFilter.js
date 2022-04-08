import { useProduct } from "../../Context/Context";
import "./ProductFilter.css";
const ProductFilter = () => {
    const { state, dispatch } = useProduct();
    const { sortBy, category,rating } = state;
    return (
        <div className="side-bar">
            <div className="filter-div">
                <h3 className="filter-heading" >FILTERS</h3>
            </div>
            <ul className="unordered-list">
                <h3
                    className="filter-items-heading">Price</h3>
                <li
                    className="sidebarItem">
                    <span>600  1000   2000</span>
                    <input type="range" min="650" max="2000" value={state.sliderPrice}
                        onChange={(e) => dispatch({ type: "FILTER_BY_PRICE_RANGE", payload: e.target.value })} />
                </li>

                <h3
                    className="filter-items-heading">Sort</h3>

                <li
                    className="sidebarItem">
                    <input type="radio"
                        className="filter-item" name="sort-btn" checked={sortBy === "high_to_low"} onChange={() => dispatch({ type: "high_to_low" })} />Price High to Low
                </li>

                <li
                    className="sidebarItem">
                    <input type="radio" name="sort-btn" checked={sortBy === "low_to_high"} onChange={() => dispatch({ type: "low_to_high" })} />Price Low to high
                </li>

                <h3 className="filter-items-heading">Categories</h3>

                <li
                    className="sidebarItem">
                    <input type="checkbox" name="categories-btn" onChange={() => dispatch({ type: "CATEGORY", payload: "Men" })} />Men
                </li>
                <li
                    className="sidebarItem">
                    <input type="checkbox" name="categories-btn" onChange={() => dispatch({ type: "CATEGORY", payload: "Woman" })} />Woman
                </li>

                <h3 className="filter-items-heading">Rating</h3>
                <li
                    className="sidebarItem">
                    <input type="radio"
                        className="filter-item" name="rating-btn" checked={rating === "4"} onChange={() => dispatch({ type: "RATING", payload: "4" })} />4 stars & above
                </li>
                <li
                    className="sidebarItem">
                    <input type="radio" className="filter-item" checked={rating === "3"} name="rating-btn" onChange={() => dispatch({ type: "RATING", payload: "3" })} />3 stars & above
                </li>
                <li
                    className="sidebarItem">
                    <input type="radio"
                        className="filter-item" name="rating-btn" checked={rating === "2"} onChange={() => dispatch({ type: "RATING", payload: "2" })} />2 stars & above
                </li>
                <li
                    className="sidebarItem">
                    <input type="radio" name="rating-btn" checked={rating === "1"} onChange={() => dispatch({ type: "RATING", payload: "1" })} />1 stars & above
                </li>
                <button className="clear-btn" onClick={() => dispatch({ type: "CLEAR_FILTER" })}>Clear Filter</button>

            </ul>
        </div>
    )
};
export { ProductFilter };



