import { Button } from '../components';
import {TweetEditorActions} from '../components';

function TweetEditorButtons() {
    return (
        <div className="tweet-editor-buttons">
            <TweetEditorActions/>
            <Button />
        </div>
    )
}

export default TweetEditorButtons ;