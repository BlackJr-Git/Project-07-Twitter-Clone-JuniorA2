import { Button } from "..";
import { TweetEditorActions } from "..";

function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions />
      <Button texte={'Tweet'} className={'button'}/>
    </div>
  );
}

export default TweetEditorButtons;
