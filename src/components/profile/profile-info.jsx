import { UserInfo, Button, ProfileNavbar } from "../index";

function ProfileInfo({userName, userTitle}) {
    return (
        <section className="profil-info">
            <div className="user-id">
                <UserInfo userName={userName}  userTitle={userTitle}/>
                <Button className={'button profile-button'} texte={'Editer le profile'} />
            </div>
            <div className="profile-details">
                <p className="profile-description">engineering 👷🏿‍♂️ Sports 🏀 ⚽️ Relax 🍿🎬🎮♟👨‍💻</p>
                <p className="follows"> <span>1 002 abonnements</span> <span>402 abonnés</span></p>
            </div>
            <div>
                <ProfileNavbar />
            </div>
        </section>
    )
}

export default ProfileInfo ;