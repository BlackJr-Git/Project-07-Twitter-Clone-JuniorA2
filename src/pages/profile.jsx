import { Header, ProfileHero, Tweets } from "../components";

function Profile() {
    return (
        <main className="timeline">
            <Header pageTitle={"Profile"} />
            <ProfileHero />
            <Tweets />
        </main>
    )
}


export default Profile ;