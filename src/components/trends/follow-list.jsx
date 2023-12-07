import { AccountFollow, ShowMore } from "../index";

function FollowList() {
    return (
        <div className="follow-list">
            <h3>Who to follow</h3>
            <AccountFollow userTitle={"New-York"} userName={"@nytimes"} imgSrc={"src\\images\\image 1.png"}/>
            <AccountFollow userTitle={"CNN"} userName={"@cnn"} imgSrc={"src\\images\\tweet-profile-photo.png"} />
            <AccountFollow userTitle={"Twitter"} userName={"@twitter"} imgSrc={"src\\images\\avatar-tweeter.png"}/>
            <ShowMore />
        </div>
    )
}

export default FollowList ; 