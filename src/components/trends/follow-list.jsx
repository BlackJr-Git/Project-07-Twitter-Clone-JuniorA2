import AccountFollow from "./account-follow";

function FollowList() {
    return (
        <div className="follow-list">
            <AccountFollow userTitle={"New-York"} userName={"@nytimes"} imgSrc={"src\\images\\image 1.png"}/>
            <AccountFollow userTitle={"CNN"} userName={"@cnn"} imgSrc={"src\\images\\tweet-profile-photo.png"} />
            <AccountFollow userTitle={"Twitter"} userName={"@twitter"} imgSrc={"src\\images\\avatar-tweeter.png"}/>
        </div>
    )
}

export default FollowList ; 