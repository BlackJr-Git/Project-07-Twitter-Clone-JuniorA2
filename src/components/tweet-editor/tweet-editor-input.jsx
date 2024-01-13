
function TweetEditorInput({getTweetText}) {
    return (
        <input 
            className="tweet-editor-input" 
            placeholder="What's happening ?" 
            type="text" 
            name="tweet-input" 
            id="tweet-input" 
            onChange={getTweetText}>
        </input>
    )
}
export default TweetEditorInput;