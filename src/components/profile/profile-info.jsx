import { UserInfo, Button, ProfileNavbar } from "../index";

function ProfileInfo({
  userName,
  userTitle,
  bio,
  followingAcccount,
  followersAccount,
  link,
  location,
  date,
}) {
  return (
    <section className="profil-info">
      <div className="user-id">
        <UserInfo userName={userName} userTitle={userTitle} />
        <Button
          className={"button profile-button"}
          texte={"Editer le profile"}
        />
      </div>
      <div className="px-5 text-lg py-2">
        <p className="profile-description"> {bio} </p>
      </div>

      <div className="px-5 flex gap-6  items-center pt-2 text-gray-400">
        <div className="text-lg flex items-center gap-3">
          <ion-icon name="location-outline"></ion-icon> {location}
        </div>
        <div className="text-lg flex items-center justify-center gap-3 ">
          <ion-icon name="link-outline"></ion-icon>{" "}
          <a className="text-blue-400 hover:text-blue-600" href={link}>
            {" "}
            {link}{" "}
          </a>
        </div>
      </div>

      <div className="px-5 text-lg pb-2 text-gray-400">
        <ion-icon name="calendar-outline"></ion-icon> A rejoint Twitter en{" "}
        {date}
      </div>

      <div className="profile-details">
        <p className="follows">
          {" "}
          <span> {followingAcccount} abonnements</span>{" "}
          <span> {followersAccount} abonnés</span>
        </p>
      </div>
      <div>
        {/* <ProfileNavbar /> */}
      </div>
    </section>
  );
}

export default ProfileInfo;
