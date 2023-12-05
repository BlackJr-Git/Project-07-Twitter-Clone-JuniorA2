import { Avatar } from "..";
import { TweetEditorForm } from "..";

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Avatar source={"src\\images\\profile-photo.png"} />
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor;
