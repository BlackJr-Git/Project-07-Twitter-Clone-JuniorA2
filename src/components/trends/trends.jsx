import { FollowList, TrendingList , SearchBox,TwitterFooter } from "../index.js";

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