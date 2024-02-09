import { useContext } from "react";
import { Avatar } from "..";
import { TweetEditorForm } from "..";
import { bradleyAvatar } from '../../images' ;
import UserContext from "../../contexts/user-context";

function TweetEditor() {
  const {currentUser} = useContext(UserContext)
  return (
    <div className="tweet-editor">
      <Avatar source={currentUser.tweetAvatarUrl} />
      <TweetEditorForm /> 
    </div>
  );
}

export default TweetEditor;
