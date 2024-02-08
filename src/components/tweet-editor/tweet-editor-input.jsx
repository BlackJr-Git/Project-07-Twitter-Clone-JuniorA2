
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
          minLenght : 1 ,
          pattern : {
            value : /\S/ ,
            message : "Ajouter du texte dans votre tweet"
          }
        })}
      />
        {characterCount > 180 ? <p className="text-red-600"> {characterCount}/180 </p> : <p className="character-count"> {characterCount}/180 </p> }
    </>
  );
}
export default TweetEditorInput ;
