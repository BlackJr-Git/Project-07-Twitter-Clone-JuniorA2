import { Link } from "react-router-dom";

function ProfileNavbar() {
    return (
        <ul className="profile-navbar border-b border-b-grey-500 ">
            <Link className="profile-navlink active-link ">Posts</Link>
            <Link className="profile-navlink">Reponse</Link>
            <Link className="profile-navlink">Posts Marquants</Link>
            <Link className="profile-navlink">Media</Link>
            <Link className="profile-navlink">Jaime</Link>
        </ul>
    )
}

export default ProfileNavbar ; 