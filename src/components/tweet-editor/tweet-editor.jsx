import { useContext } from "react";
import { Avatar } from "..";
import { TweetEditorForm } from "..";
import UserContext from "../../contexts/user-context";

function TweetEditor() {
  const {currentUser} = useContext(UserContext)
  return (
    <div className="tweet-editor">
      <Avatar source={currentUser.profilePicture} />
      <TweetEditorForm /> 
    </div>
  );
}

export default TweetEditor;