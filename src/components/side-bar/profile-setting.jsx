import { userData } from "../../utils/user-data";
import { TweetAvatar,UserInfo } from "../index"

function ProfileSetting({imgSrc,userName,userTitle}) {
    return (
        <div className="profile-setting">
            <TweetAvatar imgSrc={imgSrc} tweetData={userData.userName} />
            <UserInfo userName={userName} userTitle={userTitle} />
        </div>
    )
}

export default ProfileSetting ;