import { Fragment } from 'react';
import { TweetEditorInput } from '../components';
import { TweetEditorButtons } from '../components';

function TweetEditorForm() {
    return (
        <div className='tweet-editor-form'>
            <TweetEditorInput />
            <TweetEditorButtons />
        </div>
    )
}

export default TweetEditorForm ;