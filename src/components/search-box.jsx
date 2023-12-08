import { searchIcon } from '../images'
function SearchBox() {
    return (
        <div className="search-box">
            <img src={searchIcon} alt="search icon" />
            <input type="search" name="" id="" placeholder="Search Tweet" />
        </div>
    )
}

export default SearchBox ;