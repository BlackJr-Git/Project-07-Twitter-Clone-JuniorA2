import TweetAvatar from "../tweet/tweet-avatar";
import Button from "../button";

function AccountFollow({userName, userTitle}) {
    return (
        <div className="account-follow"> 
            <TweetAvatar imgsrc={"src\\images\\avatar-tweeter.png"} />
            <div className="user-info">
                <p className="user-title"> {userTitle} </p>
                <p className="user-name"> {userName} </p>
            </div>
            <Button texte={"Follow"} className={'button-follow'} />
        </div>
    )
}


export default AccountFollow ;

