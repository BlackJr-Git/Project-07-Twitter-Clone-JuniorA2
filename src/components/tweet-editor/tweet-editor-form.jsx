import { useState, useContext } from "react";
import { TweetEditorInput, TweetEditorButtons } from "..";
import { addTweet } from "../../utils/add-tweet";
import TweetContext from "../../contexts/tweet-contexts";
import { useForm } from "react-hook-form";
import { postData } from "../../utils";
import UserContext from "../../contexts/user-context";

function TweetEditorForm({}) {
  const { data, updateTweetData } = useContext(TweetContext);
  const { currentUser } = useContext(UserContext);
  const [characterCount, setCharacterCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  watch((data) => {
    let tweet = data.tweetInput;
    setCharacterCount(tweet.length);
  });

  const handleClick = (formData, e) => {
    let tweetAdded = addTweet(formData.tweetInput, currentUser);
    postData(tweetAdded);
    updateTweetData([...data, tweetAdded]);
    reset({ tweetInput: "" });
    setCharacterCount(0);
  };

  return (
    <div className="tweet-editor-form">
      <form onSubmit={handleSubmit(handleClick)}>
        <TweetEditorInput
          registerFunction={register}
          characterCount={characterCount}
        />
        <TweetEditorButtons />
      </form>
      {errors.tweetInput && (
        <div className="error-message">{errors.tweetInput.message}</div>
      )}
    </div>
  );
}

export default TweetEditorForm;
