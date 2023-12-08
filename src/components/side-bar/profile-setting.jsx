import { TweetAvatar,UserInfo } from "../index"

function ProfileSetting({imgSrc,userName,userTitle}) {
    return (
        <div className="profile-setting">
            <TweetAvatar imgSrc={imgSrc} />
            <UserInfo userName={userName} userTitle={userTitle} />
        </div>
    )
}

export default ProfileSetting ;