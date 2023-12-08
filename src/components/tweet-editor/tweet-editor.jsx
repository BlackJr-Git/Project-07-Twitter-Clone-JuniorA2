import { Avatar } from "..";
import { TweetEditorForm } from "..";
import { bradleyAvatar } from '../../images' ;

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Avatar source={bradleyAvatar} />
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor;
