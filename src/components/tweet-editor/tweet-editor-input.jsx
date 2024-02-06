
function TweetEditorInput({ getTweetText, registerFunction , characterCount }) {

  return (
    <>
      <textarea
        className="tweet-editor-input"
        placeholder="What's happening ?"
        type="text"
        name="tweetInput"
        id="tweet-input"
        // onChange={getTweetText}
        // value={tweet}
        {...registerFunction("tweetInput", {
          required: "Ajouter du texte dans votre tweet",
          maxLength: 180,
        })}
      />
      <p> {0 && characterCount}/180</p>
    </>
  );
}
export default TweetEditorInput;
