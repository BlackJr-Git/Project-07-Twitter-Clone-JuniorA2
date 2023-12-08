import { ProfileInfo, ProfilePicture } from "../index";

function ProfileHero() {
  return (
    <>
      <section className="hero-section">
        <ProfilePicture />
      </section>
      <ProfileInfo />
    </>
  );
}

export default ProfileHero;
