import { TweetEditorInput } from "..";
import { TweetEditorButtons } from "..";

function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput />
      <TweetEditorButtons />
    </div>
  );
}

export default TweetEditorForm;
