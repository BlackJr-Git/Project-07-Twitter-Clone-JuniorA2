import { UserInfo, Button } from "../index";

function ProfileInfo({userName, userTitle}) {
    return (
        <section className="profil-info">
            <div className="user-id">
                <UserInfo userName={userName}  userTitle={userTitle}/>
                <Button className={'button'} texte={'Editer le profile'} />
            </div>
            <div>
                
            </div>
        </section>
    )
}

export default ProfileInfo ;