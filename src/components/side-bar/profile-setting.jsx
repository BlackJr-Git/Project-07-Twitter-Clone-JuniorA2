import { userData } from "../../data/user-data";
import { TweetAvatar,UserInfo } from "../index" ;
import UserContext from "../../contexts/user-context";
import { useContext } from "react";

function ProfileSetting({imgSrc,userName,userTitle}) {
    const { currentUser } = useContext(UserContext) 
    return (
        <div className="profile-setting">
            <TweetAvatar imgSrc={imgSrc} tweetData={currentUser.handle} />
            <UserInfo userName={userName} userTitle={userTitle} />
        </div>
    )
}

export default ProfileSetting  ; 