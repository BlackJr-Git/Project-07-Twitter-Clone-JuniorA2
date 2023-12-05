import { Button } from "..";
import { TweetEditorActions } from "..";

function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions />
      <Button />
    </div>
  );
}

export default TweetEditorButtons;
