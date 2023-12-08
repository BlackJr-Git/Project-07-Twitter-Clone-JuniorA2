import { FollowList, TrendingList , SearchBox,TwitterFooter } from "../index.js";
// import SearchBox from "../search-box.jsx";


function Trends() {
return (
    <aside className="trends">
        <div>
            <SearchBox />
            <TrendingList />
            <FollowList />
            <TwitterFooter />
        </div>
    </aside>
)
}

export default Trends ;