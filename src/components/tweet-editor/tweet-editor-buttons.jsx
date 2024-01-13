import { Button } from "..";
import { TweetEditorActions } from "..";

function TweetEditorButtons({handleClick}) {
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions />
      <Button texte={'Tweet'} className={'button'} handleClick={handleClick}/>
    </div>
  );
}

export default TweetEditorButtons;
