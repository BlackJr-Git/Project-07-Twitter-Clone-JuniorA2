import { Avatar } from '../components';
import { TweetEditorForm } from '../components';

function TweetEditor() {
    return (
        <div className="tweet-editor"> 
            <Avatar source={"src\\images\\profile-photo.png"} />
            <TweetEditorForm />
        </div>
    )
}

export default TweetEditor;