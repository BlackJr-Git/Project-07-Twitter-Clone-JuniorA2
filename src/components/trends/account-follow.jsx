import TweetAvatar from "../tweet/tweet-avatar";
import Button from "../button";

function AccountFollow({userName, userTitle, imgSrc}) {
    return (
        <div className="account-follow"> 
            <TweetAvatar imgsrc={imgSrc} />
            <div className="user-info">
                <p className="user-title"> {userTitle} </p>
                <p className="user-name"> {userName} </p>
            </div>
            <Button texte={"Follow"} className={'button-follow'} />
        </div>
    )
}


export default AccountFollow ;

