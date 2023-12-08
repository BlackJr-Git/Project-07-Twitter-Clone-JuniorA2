import { UserInfo, Button } from "../index";

function ProfileInfo() {
    return (
        <section className="profil-info">
            <div className="user-id">
                <UserInfo userName={"@bradley_"}  userTitle={"Bradley"}/>
                <Button className={'button'} texte={'Editer le profile'} />
            </div>
            <div>
                
            </div>
        </section>
    )
}

export default ProfileInfo ;