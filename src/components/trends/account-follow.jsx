import { TweetAvatar , Button, UserInfo} from "../index"

function AccountFollow({userName, userTitle, imgSrc}) {
    return (
        <div className="account-follow"> 
            <TweetAvatar imgsrc={imgSrc} />
            <UserInfo userName={userName} userTitle={userTitle} />
            <Button texte={"Follow"} className={'button-follow'} />
        </div>
    )
}

export default AccountFollow ;

