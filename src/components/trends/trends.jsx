import {TrendingList} from "../index.js";
import SearchBox from "../search-box.jsx";


function Trends() {
return (
    <aside className="trends">
        <div>
            <SearchBox />
            <TrendingList />
        </div>
    </aside>
)
}

export default Trends ;