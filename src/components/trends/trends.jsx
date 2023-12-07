import { FollowList, TrendingList , SearchBox } from "../index.js";
// import SearchBox from "../search-box.jsx";


function Trends() {
return (
    <aside className="trends">
        <div>
            <SearchBox />
            <TrendingList />
            <FollowList />
        </div>
    </aside>
)
}

export default Trends ;