import { TweetAvatar , Button, UserInfo} from "../index"

function AccountFollow({userName, userTitle, imgSrc, tweetData}) {
    return (
        <div className="account-follow"> 
            <TweetAvatar imgSrc={imgSrc} tweetData={tweetData} />
            <UserInfo userName={userName} userTitle={userTitle} />
            <Button texte={"Follow"} className={'button-follow'} />
        </div>
    )
}

export default AccountFollow ;

