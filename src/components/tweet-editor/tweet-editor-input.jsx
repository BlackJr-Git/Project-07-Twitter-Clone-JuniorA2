
function TweetEditorInput({getTweetText , tweet}) {
    return (
        <input 
            className="tweet-editor-input" 
            placeholder="What's happening ?" 
            type="text" 
            name="tweet-input" 
            id="tweet-input" 
            onChange={getTweetText}
            value={tweet}
            >
        </input>
    )
}
export default TweetEditorInput;